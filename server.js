const http = require("http");
const fs = require("fs");
const path = require("path");

loadEnvFile();

const PORT = Number(process.env.PORT || 3000);
const HOST = "0.0.0.0";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5.4-mini";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

const carePlanSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    summary: {
      type: "array",
      items: { type: "string" },
      minItems: 2,
      maxItems: 4,
    },
    medications: {
      type: "array",
      items: { type: "string" },
    },
    followUps: {
      type: "array",
      items: { type: "string" },
    },
    warningSigns: {
      type: "array",
      items: { type: "string" },
    },
    lifestyle: {
      type: "array",
      items: { type: "string" },
    },
    caregiverNote: {
      type: "string",
    },
    prescriptionInsights: {
      type: "array",
      items: { type: "string" },
    },
    safetyAlerts: {
      type: "array",
      items: { type: "string" },
    },
    missingInfo: {
      type: "array",
      items: { type: "string" },
    },
    timeline: {
      type: "array",
      items: { type: "string" },
    },
    evidence: {
      type: "array",
      items: { type: "string" },
    },
    insuranceSummary: {
      type: "array",
      items: { type: "string" },
    },
    coverageGuidance: {
      type: "array",
      items: { type: "string" },
    },
    costWatchouts: {
      type: "array",
      items: { type: "string" },
    },
    reminderPlan: {
      type: "array",
      items: { type: "string" },
    },
    careCoordination: {
      type: "array",
      items: { type: "string" },
    },
    providerDetails: {
      type: "array",
      items: { type: "string" },
    },
    emergencyContactPlan: {
      type: "array",
      items: { type: "string" },
    },
    appointmentDetails: {
      type: "array",
      items: { type: "string" },
    },
    dailyChecklist: {
      type: "array",
      items: { type: "string" },
    },
    insuranceCardInsights: {
      type: "array",
      items: { type: "string" },
    },
    labReportInsights: {
      type: "array",
      items: { type: "string" },
    },
    vitalsReview: {
      type: "array",
      items: { type: "string" },
    },
    riskStatus: {
      type: "array",
      items: { type: "string" },
    },
    symptomReview: {
      type: "array",
      items: { type: "string" },
    },
    doctorVisitPrep: {
      type: "array",
      items: { type: "string" },
    },
    xrayImageInsights: {
      type: "array",
      items: { type: "string" },
    },
    xrayReportSummary: {
      type: "array",
      items: { type: "string" },
    },
  },
  required: [
    "summary",
    "medications",
    "followUps",
    "warningSigns",
    "lifestyle",
    "caregiverNote",
    "prescriptionInsights",
    "safetyAlerts",
    "missingInfo",
    "timeline",
    "evidence",
    "insuranceSummary",
    "coverageGuidance",
    "costWatchouts",
    "reminderPlan",
    "careCoordination",
    "providerDetails",
    "emergencyContactPlan",
    "appointmentDetails",
    "dailyChecklist",
    "insuranceCardInsights",
    "labReportInsights",
    "vitalsReview",
    "riskStatus",
    "symptomReview",
    "doctorVisitPrep",
    "xrayImageInsights",
    "xrayReportSummary",
  ],
};

const questionSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    answer: {
      type: "string",
    },
    evidence: {
      type: "array",
      items: { type: "string" },
    },
  },
  required: ["answer", "evidence"],
};

function loadEnvFile() {
  const envPath = path.join(__dirname, ".env");

  if (!fs.existsSync(envPath)) {
    return;
  }

  const envContents = fs.readFileSync(envPath, "utf8");
  const lines = envContents.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (key && !process.env[key]) {
      process.env[key] = value;
    }
  }
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(payload));
}

function serveStaticFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  fs.readFile(filePath, (error, data) => {
    if (error) {
      sendJson(res, 404, { error: "File not found." });
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    const maxBodySize = 20_000_000;

    req.on("data", (chunk) => {
      body += chunk;

      if (body.length > maxBodySize) {
        reject(new Error("Request body too large."));
        req.destroy();
      }
    });

    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function extractOutputText(responseJson) {
  const message = (responseJson.output || []).find((item) => item.type === "message");

  if (!message || !Array.isArray(message.content)) {
    throw new Error("No model message was returned.");
  }

  const outputTextPart = message.content.find((item) => item.type === "output_text");

  if (!outputTextPart || !outputTextPart.text) {
    throw new Error("No text content was returned from the model.");
  }

  return outputTextPart.text;
}

function hasAnySourceDocument(payload) {
  return Boolean(
    payload.dischargeText ||
      payload.prescriptionImage ||
      payload.insuranceCardImage ||
      payload.labReportImage ||
      payload.xrayImage ||
      payload.xrayReportImage
  );
}

async function generateCarePlan({
  patientName,
  language,
  patientAge,
  conditions,
  allergies,
  hasFoodAllergy,
  foodAllergies,
  patientPhone,
  patientEmail,
  caregiverPhone,
  caregiverEmail,
  preferredContact,
  emergencyName,
  emergencyRelation,
  emergencyPhone,
  insurancePlan,
  insuranceMemberId,
  insuranceCopay,
  insuranceDeductible,
  insurancePhone,
  insuranceEmail,
  insuranceAddress,
  insuranceCardImage,
  doctorName,
  doctorSpecialty,
  doctorPhone,
  clinicLocation,
  prescribedLocation,
  pharmacyName,
  pharmacyPhone,
  pharmacyLocation,
  appointmentDate,
  appointmentTime,
  appointmentDepartment,
  appointmentType,
  bloodPressure,
  heartRate,
  oxygenLevel,
  temperature,
  feverSymptom,
  painSymptom,
  coughSymptom,
  breathingSymptom,
  fatigueSymptom,
  labReportImage,
  xrayImage,
  xrayReportImage,
  dischargeText,
  prescriptionImage,
}) {
  if (!OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY. Add it to your environment before running the server.");
  }

  const systemPrompt =
    "You are a healthcare discharge clarity assistant for hackathon demo use only. " +
    "Rewrite discharge instructions in plain, supportive language without inventing facts. " +
    "Do not diagnose. If details are missing, say the care team should confirm them. " +
    "Keep medication items actionable and specific. Keep warning signs urgent and easy to scan. " +
    "If there are medication risks, allergy concerns, duplicate drugs, or unclear instructions, label them as potential safety alerts rather than certain diagnoses.";

  const patientLabel = patientName ? `Patient name: ${patientName}` : "Patient name: not provided";
  const userPrompt =
    `${patientLabel}\nPreferred language: ${language}\nPatient age: ${patientAge || "not provided"}\nKnown conditions: ${conditions || "not provided"}\nKnown allergies: ${allergies || "not provided"}\nHas food allergy: ${hasFoodAllergy || "not provided"}\nFood allergies: ${foodAllergies || "not provided"}\nPatient phone: ${patientPhone || "not provided"}\nPatient email: ${patientEmail || "not provided"}\nCaregiver phone: ${caregiverPhone || "not provided"}\nCaregiver email: ${caregiverEmail || "not provided"}\nPreferred contact method: ${preferredContact || "not provided"}\nEmergency contact: ${emergencyName || "not provided"}\nEmergency relationship: ${emergencyRelation || "not provided"}\nEmergency phone: ${emergencyPhone || "not provided"}\nInsurance plan: ${insurancePlan || "not provided"}\nInsurance member ID: ${insuranceMemberId || "not provided"}\nVisit copay: ${insuranceCopay || "not provided"}\nDeductible: ${insuranceDeductible || "not provided"}\nInsurance phone: ${insurancePhone || "not provided"}\nInsurance email: ${insuranceEmail || "not provided"}\nInsurance address: ${insuranceAddress || "not provided"}\nDoctor name: ${doctorName || "not provided"}\nDoctor specialty: ${doctorSpecialty || "not provided"}\nDoctor phone: ${doctorPhone || "not provided"}\nClinic or hospital: ${clinicLocation || "not provided"}\nPrescribed location: ${prescribedLocation || "not provided"}\nPharmacy: ${pharmacyName || "not provided"}\nPharmacy phone: ${pharmacyPhone || "not provided"}\nPharmacy location: ${pharmacyLocation || "not provided"}\nAppointment date: ${appointmentDate || "not provided"}\nAppointment time: ${appointmentTime || "not provided"}\nAppointment department: ${appointmentDepartment || "not provided"}\nAppointment type: ${appointmentType || "not provided"}\nBlood pressure: ${bloodPressure || "not provided"}\nHeart rate: ${heartRate || "not provided"}\nOxygen level: ${oxygenLevel || "not provided"}\nTemperature: ${temperature || "not provided"}\nFever: ${feverSymptom || "not provided"}\nPain: ${painSymptom || "not provided"}\nCough: ${coughSymptom || "not provided"}\nShortness of breath: ${breathingSymptom || "not provided"}\nFatigue: ${fatigueSymptom || "not provided"}\n\n` +
    "Create a patient-friendly discharge care plan from the provided discharge instructions and any prescription image.\n" +
    "If a prescription image is provided, carefully extract medicine names, doses, and frequency only when legible.\n" +
    "If an insurance card image is provided, extract only visible plan details and say when something is unclear.\n" +
    "If a lab report image is provided, summarize visible test findings in simple patient-friendly language without diagnosing.\n" +
    "If an X-ray image is provided, give only an educational, non-diagnostic description and clearly say the final interpretation must come from a radiologist or clinician.\n" +
    "If an X-ray report image is provided, summarize the written radiology findings in simple language and highlight urgent follow-up points if they are explicitly stated.\n" +
    "If handwriting or text is unclear, say that the patient should confirm the exact medicine with the prescribing clinician or pharmacist.\n" +
    "The summary should be easy for a patient or caregiver to understand.\n" +
    "Include prescription insights, safety alerts, missing information, a short recovery timeline, evidence points tied to the source text or image, insurance summary, likely coverage guidance, and cost watchouts.\n" +
    "Create a reminder plan using the available medication schedule, follow-up tasks, and preferred contact details.\n" +
    "Create care coordination actions for the patient, caregiver, primary care office, and pharmacy when appropriate.\n" +
    "Include provider and pharmacy details as a separate list so the patient knows exactly who and where to contact.\n" +
    "Include an emergency contact plan that explains who to call and when.\n" +
    "Include appointment details as a separate list and include a daily recovery checklist for the next few days.\n" +
    "Include insurance card insights, lab report insights, a vitals review section, risk status, symptom review, doctor visit prep questions, X-ray image insights, and X-ray report summary.\n" +
    "Do not claim actual insurance eligibility or actual benefits verification. Frame insurance output as likely guidance and recommended next steps.\n\n" +
    `Discharge instructions:\n${dischargeText || "No discharge text provided."}`;

  const userContent = [{ type: "input_text", text: userPrompt }];

  if (prescriptionImage) {
    userContent.push({
      type: "input_image",
      image_url: prescriptionImage,
    });
  }

  if (insuranceCardImage) {
    userContent.push({
      type: "input_image",
      image_url: insuranceCardImage,
    });
  }

  if (labReportImage) {
    userContent.push({
      type: "input_image",
      image_url: labReportImage,
    });
  }

  if (xrayImage) {
    userContent.push({
      type: "input_image",
      image_url: xrayImage,
    });
  }

  if (xrayReportImage) {
    userContent.push({
      type: "input_image",
      image_url: xrayReportImage,
    });
  }

  const requestBody = {
    model: OPENAI_MODEL,
    input: [
      {
        role: "system",
        content: [{ type: "input_text", text: systemPrompt }],
      },
      {
        role: "user",
        content: userContent,
      },
    ],
    text: {
      format: {
        type: "json_schema",
        name: "discharge_care_plan",
        schema: carePlanSchema,
        strict: true,
      },
    },
  };

  if (OPENAI_MODEL.startsWith("gpt-5")) {
    requestBody.reasoning = {
      effort: "low",
    };
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const responseJson = await response.json();

  if (!response.ok) {
    const apiMessage =
      responseJson.error && responseJson.error.message
        ? responseJson.error.message
        : "OpenAI request failed.";
    throw new Error(apiMessage);
  }

  const outputText = extractOutputText(responseJson);
  return JSON.parse(outputText);
}

async function askDischargeQuestion({
  patientName,
  language,
  patientAge,
  conditions,
  allergies,
  patientPhone,
  patientEmail,
  caregiverPhone,
  caregiverEmail,
  preferredContact,
  emergencyName,
  emergencyRelation,
  emergencyPhone,
  insurancePlan,
  insuranceMemberId,
  insuranceCopay,
  insuranceDeductible,
  doctorName,
  doctorSpecialty,
  doctorPhone,
  clinicLocation,
  prescribedLocation,
  pharmacyName,
  pharmacyPhone,
  pharmacyLocation,
  appointmentDate,
  appointmentTime,
  appointmentDepartment,
  appointmentType,
  bloodPressure,
  heartRate,
  oxygenLevel,
  temperature,
  feverSymptom,
  painSymptom,
  coughSymptom,
  breathingSymptom,
  fatigueSymptom,
  dischargeText,
  prescriptionImage,
  insuranceCardImage,
  labReportImage,
  xrayImage,
  xrayReportImage,
  question,
}) {
  if (!OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY. Add it to your environment before running the server.");
  }

  const systemPrompt =
    "You answer patient questions using only the provided discharge instructions, uploaded medical documents, and entered patient details. " +
    "Be calm and clear. Do not invent clinical facts. If the answer is not clearly supported by the documents, say the patient should confirm with a clinician or pharmacist.";

  const userPrompt =
    `Patient name: ${patientName || "not provided"}\nPreferred language: ${language}\nPatient age: ${patientAge || "not provided"}\nKnown conditions: ${conditions || "not provided"}\nKnown allergies: ${allergies || "not provided"}\nPatient phone: ${patientPhone || "not provided"}\nPatient email: ${patientEmail || "not provided"}\nCaregiver phone: ${caregiverPhone || "not provided"}\nCaregiver email: ${caregiverEmail || "not provided"}\nPreferred contact method: ${preferredContact || "not provided"}\nEmergency contact: ${emergencyName || "not provided"}\nEmergency relationship: ${emergencyRelation || "not provided"}\nEmergency phone: ${emergencyPhone || "not provided"}\nInsurance plan: ${insurancePlan || "not provided"}\nInsurance member ID: ${insuranceMemberId || "not provided"}\nVisit copay: ${insuranceCopay || "not provided"}\nDeductible: ${insuranceDeductible || "not provided"}\nDoctor name: ${doctorName || "not provided"}\nDoctor specialty: ${doctorSpecialty || "not provided"}\nDoctor phone: ${doctorPhone || "not provided"}\nClinic or hospital: ${clinicLocation || "not provided"}\nPrescribed location: ${prescribedLocation || "not provided"}\nPharmacy: ${pharmacyName || "not provided"}\nPharmacy phone: ${pharmacyPhone || "not provided"}\nPharmacy location: ${pharmacyLocation || "not provided"}\nAppointment date: ${appointmentDate || "not provided"}\nAppointment time: ${appointmentTime || "not provided"}\nAppointment department: ${appointmentDepartment || "not provided"}\nAppointment type: ${appointmentType || "not provided"}\nBlood pressure: ${bloodPressure || "not provided"}\nHeart rate: ${heartRate || "not provided"}\nOxygen level: ${oxygenLevel || "not provided"}\nTemperature: ${temperature || "not provided"}\nFever: ${feverSymptom || "not provided"}\nPain: ${painSymptom || "not provided"}\nCough: ${coughSymptom || "not provided"}\nShortness of breath: ${breathingSymptom || "not provided"}\nFatigue: ${fatigueSymptom || "not provided"}\n\n` +
    `Discharge instructions:\n${dischargeText || "No discharge text provided."}\n\n` +
    `Patient question: ${question}`;

  const userContent = [{ type: "input_text", text: userPrompt }];

  if (prescriptionImage) {
    userContent.push({
      type: "input_image",
      image_url: prescriptionImage,
    });
  }

  if (insuranceCardImage) {
    userContent.push({
      type: "input_image",
      image_url: insuranceCardImage,
    });
  }

  if (labReportImage) {
    userContent.push({
      type: "input_image",
      image_url: labReportImage,
    });
  }

  if (xrayImage) {
    userContent.push({
      type: "input_image",
      image_url: xrayImage,
    });
  }

  if (xrayReportImage) {
    userContent.push({
      type: "input_image",
      image_url: xrayReportImage,
    });
  }

  const requestBody = {
    model: OPENAI_MODEL,
    input: [
      {
        role: "system",
        content: [{ type: "input_text", text: systemPrompt }],
      },
      {
        role: "user",
        content: userContent,
      },
    ],
    text: {
      format: {
        type: "json_schema",
        name: "discharge_question_answer",
        schema: questionSchema,
        strict: true,
      },
    },
  };

  if (OPENAI_MODEL.startsWith("gpt-5")) {
    requestBody.reasoning = {
      effort: "low",
    };
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const responseJson = await response.json();

  if (!response.ok) {
    const apiMessage =
      responseJson.error && responseJson.error.message
        ? responseJson.error.message
        : "OpenAI request failed.";
    throw new Error(apiMessage);
  }

  const outputText = extractOutputText(responseJson);
  return JSON.parse(outputText);
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "POST" && requestUrl.pathname === "/api/summarize") {
    try {
      const rawBody = await readRequestBody(req);
      const payload = JSON.parse(rawBody || "{}");

      if (!hasAnySourceDocument(payload) || !payload.language) {
        sendJson(res, 400, {
          error: "Provide discharge text or an uploaded medical document, plus preferred language.",
        });
        return;
      }

      const carePlan = await generateCarePlan(payload);
      sendJson(res, 200, {
        carePlan,
        model: OPENAI_MODEL,
      });
    } catch (error) {
      sendJson(res, 500, {
        error: error.message || "Server error while generating care plan.",
      });
    }
    return;
  }

  if (req.method === "POST" && requestUrl.pathname === "/api/ask") {
    try {
      const rawBody = await readRequestBody(req);
      const payload = JSON.parse(rawBody || "{}");

      if (!hasAnySourceDocument(payload) || !payload.question) {
        sendJson(res, 400, {
          error: "Provide source documents and a patient question.",
        });
        return;
      }

      const answer = await askDischargeQuestion(payload);
      sendJson(res, 200, {
        answer,
        model: OPENAI_MODEL,
      });
    } catch (error) {
      sendJson(res, 500, {
        error: error.message || "Server error while answering the question.",
      });
    }
    return;
  }

  if (req.method !== "GET") {
    sendJson(res, 405, { error: "Method not allowed." });
    return;
  }

  const requestedPath =
    requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(__dirname, safePath);

  if (!filePath.startsWith(__dirname)) {
    sendJson(res, 403, { error: "Forbidden." });
    return;
  }

  serveStaticFile(res, filePath);
});

server.listen(PORT, HOST, () => {
  console.log(`Discharge Clarity Assistant running at http://${HOST}:${PORT}`);
});
