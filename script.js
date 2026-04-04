const sampleCases = {
  "regular-checkup": {
    patientName: "Ava Thompson",
    language: "English",
    patientAge: "31",
    conditions: "No major chronic conditions",
    allergies: "None known",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 201-4400",
    patientEmail: "ava.thompson@example.com",
    caregiverPhone: "",
    caregiverEmail: "",
    preferredContact: "Email",
    emergencyName: "Mark Thompson",
    emergencyRelation: "Brother",
    emergencyPhone: "(555) 201-4401",
    insurancePlan: "Blue Cross Blue Shield PPO",
    insuranceMemberId: "BCS110022",
    insuranceCopay: "$20 preventive visit",
    insuranceDeductible: "$750",
    doctorName: "Dr. Megan Ross",
    doctorSpecialty: "Primary care",
    doctorPhone: "(555) 303-2200",
    clinicLocation: "City Family Medicine",
    prescribedLocation: "Primary care office",
    pharmacyName: "Walgreens",
    pharmacyPhone: "(555) 303-2211",
    pharmacyLocation: "101 Main St, Chicago, IL",
    appointmentDate: "2026-04-15",
    appointmentTime: "09:00",
    appointmentDepartment: "Primary care",
    appointmentType: "In-person",
    bloodPressure: "118/72",
    heartRate: "74 bpm",
    oxygenLevel: "99%",
    temperature: "98.4 F",
    feverSymptom: "None",
    painSymptom: "None",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "None",
    dischargeText: `Patient seen for a routine annual wellness checkup. No acute complaints today and patient is stable for discharge home.

Visit summary:
- Reviewed preventive health maintenance and routine screening schedule.
- Encouraged healthy diet, regular exercise, hydration, and adequate sleep.
- Continue current home medications as previously prescribed.

Follow-up:
- Routine primary care follow-up in 6 to 12 months.
- Complete any recommended screening labs if ordered.

Return for care sooner if new symptoms develop, including chest pain, shortness of breath, persistent fever, severe abdominal pain, or fainting.`,
  },
  coronavirus: {
    patientName: "Elena Ramirez",
    language: "English",
    patientAge: "46",
    conditions: "Mild asthma",
    allergies: "None known",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 320-7788",
    patientEmail: "elena.ramirez@example.com",
    caregiverPhone: "(555) 320-7799",
    caregiverEmail: "sister@example.com",
    preferredContact: "Phone",
    emergencyName: "Sofia Ramirez",
    emergencyRelation: "Sister",
    emergencyPhone: "(555) 320-7799",
    insurancePlan: "Cigna Open Access Plus",
    insuranceMemberId: "COVID446622",
    insuranceCopay: "$25 urgent care",
    insuranceDeductible: "$900",
    insurancePhone: "(800) 555-0303",
    insuranceEmail: "support@cigna-demo.com",
    insuranceAddress: "330 Cigna Way, Chicago, IL",
    doctorName: "Dr. Nina Brooks",
    doctorSpecialty: "Primary care",
    doctorPhone: "(555) 202-4040",
    clinicLocation: "West Loop Family Health",
    prescribedLocation: "Urgent care discharge room",
    pharmacyName: "CVS Pharmacy",
    pharmacyPhone: "(555) 555-4433",
    pharmacyLocation: "210 Market St, Chicago, IL",
    appointmentDate: "2026-04-09",
    appointmentTime: "09:30",
    appointmentDepartment: "Primary care follow-up",
    appointmentType: "Virtual",
    bloodPressure: "124/80",
    heartRate: "88 bpm",
    oxygenLevel: "95%",
    temperature: "99.8 F",
    feverSymptom: "Mild",
    painSymptom: "Mild",
    coughSymptom: "Moderate",
    breathingSymptom: "Mild",
    fatigueSymptom: "Moderate",
    dischargeText: `Patient tested positive for coronavirus infection and was treated for cough, fatigue, mild shortness of breath, and dehydration. Oxygen level remained stable and patient is safe for discharge home with close monitoring.

Discharge medications:
- Acetaminophen 500 mg by mouth every 6 hours as needed for fever or body aches.
- Albuterol inhaler: 2 puffs every 4 to 6 hours as needed for wheezing or shortness of breath.
- Benzonatate 100 mg by mouth three times daily as needed for cough.

Home care instructions:
- Rest, drink plenty of fluids, and continue isolation precautions as advised.
- Use a pulse oximeter if available and monitor oxygen levels.
- Eat light meals as tolerated and avoid strenuous activity for 5 to 7 days.

Follow-up:
- Schedule follow-up with primary care within 3 to 5 days or sooner if symptoms worsen.
- Return to the ER for chest pain, worsening shortness of breath, blue lips, confusion, oxygen level below 92%, or inability to keep fluids down.`,
  },
  "hypertension-followup": {
    patientName: "Angela Brooks",
    language: "English",
    patientAge: "61",
    conditions: "Hypertension",
    allergies: "None known",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 415-6622",
    patientEmail: "angela.brooks@example.com",
    caregiverPhone: "(555) 415-6628",
    caregiverEmail: "daughter@example.com",
    preferredContact: "Phone",
    emergencyName: "Maya Brooks",
    emergencyRelation: "Daughter",
    emergencyPhone: "(555) 415-6628",
    insurancePlan: "Aetna Choice POS II",
    insuranceMemberId: "HTN889911",
    insuranceCopay: "$25 primary care",
    insuranceDeductible: "$1,000",
    insurancePhone: "(800) 555-0202",
    insuranceEmail: "support@aetna-demo.com",
    insuranceAddress: "220 Aetna Center Dr, Chicago, IL",
    doctorName: "Dr. Megan Ross",
    doctorSpecialty: "Primary care",
    doctorPhone: "(555) 303-2200",
    clinicLocation: "City Family Medicine",
    prescribedLocation: "Primary care office",
    pharmacyName: "Walgreens",
    pharmacyPhone: "(555) 303-2211",
    pharmacyLocation: "101 Main St, Chicago, IL",
    appointmentDate: "2026-04-18",
    appointmentTime: "08:15",
    appointmentDepartment: "Primary care",
    appointmentType: "In-person",
    bloodPressure: "158/94",
    heartRate: "82 bpm",
    oxygenLevel: "98%",
    temperature: "98.2 F",
    feverSymptom: "None",
    painSymptom: "None",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "Mild",
    dischargeText: `Patient evaluated for elevated blood pressure at follow-up. No chest pain, shortness of breath, neurologic deficit, or signs of hypertensive emergency. Patient is stable for discharge home.

Discharge medications:
- Lisinopril 10 mg by mouth once daily.
- Continue home blood pressure log twice daily.

Instructions:
- Reduce salt intake and maintain good hydration.
- Check blood pressure morning and evening for the next 7 days.
- Bring home blood pressure readings to the next visit.

Follow-up:
- Primary care follow-up in 1 week.
- Return urgently for severe headache, chest pain, shortness of breath, weakness, vision changes, or blood pressure readings that remain severely elevated.`,
  },
  "orthopedic-injury": {
    patientName: "Tyler Grant",
    language: "English",
    patientAge: "24",
    conditions: "No major chronic conditions",
    allergies: "None known",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 702-1100",
    patientEmail: "tyler.grant@example.com",
    caregiverPhone: "(555) 702-1120",
    caregiverEmail: "mom@example.com",
    preferredContact: "Phone",
    emergencyName: "Laura Grant",
    emergencyRelation: "Mother",
    emergencyPhone: "(555) 702-1120",
    insurancePlan: "Blue Cross Blue Shield PPO",
    insuranceMemberId: "ORTH331188",
    insuranceCopay: "$40 urgent care",
    insuranceDeductible: "$1,200",
    insurancePhone: "(800) 555-0101",
    insuranceEmail: "support@bcbs-demo.com",
    insuranceAddress: "120 Blue Shield Plaza, Chicago, IL",
    doctorName: "Dr. Daniel Chu",
    doctorSpecialty: "Orthopedics",
    doctorPhone: "(555) 818-4400",
    clinicLocation: "Midwest Sports Medicine",
    prescribedLocation: "Urgent care discharge station",
    pharmacyName: "CVS Pharmacy",
    pharmacyPhone: "(555) 818-4477",
    pharmacyLocation: "980 River Rd, Chicago, IL",
    appointmentDate: "2026-04-07",
    appointmentTime: "13:30",
    appointmentDepartment: "Orthopedics",
    appointmentType: "In-person",
    bloodPressure: "120/76",
    heartRate: "79 bpm",
    oxygenLevel: "99%",
    temperature: "98.1 F",
    feverSymptom: "None",
    painSymptom: "Moderate",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "Mild",
    dischargeText: `Patient evaluated for left ankle sprain after twisting injury while playing basketball. X-ray showed no acute fracture. Patient is stable for discharge with supportive care.

Discharge medications:
- Ibuprofen 600 mg by mouth every 8 hours as needed for pain with food.

Instructions:
- Rest, ice, compression, and elevation for the next 48 hours.
- Use ankle brace and crutches as instructed.
- Avoid sports and high-impact activity until cleared.

Follow-up:
- Orthopedic follow-up in 3 to 5 days if pain or swelling is not improving.
- Return urgently for worsening swelling, numbness, severe pain, skin color change, or inability to bear weight.`,
  },
  "sports-injury": {
    patientName: "Jordan Ellis",
    language: "English",
    patientAge: "19",
    conditions: "No major chronic conditions",
    allergies: "None known",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 745-3300",
    patientEmail: "jordan.ellis@example.com",
    caregiverPhone: "(555) 745-3301",
    caregiverEmail: "parent@example.com",
    preferredContact: "Phone",
    emergencyName: "Monica Ellis",
    emergencyRelation: "Mother",
    emergencyPhone: "(555) 745-3301",
    insurancePlan: "Blue Cross Blue Shield PPO",
    insuranceMemberId: "SPORT774411",
    insuranceCopay: "$40 sports medicine visit",
    insuranceDeductible: "$1,250",
    insurancePhone: "(800) 555-0101",
    insuranceEmail: "support@bcbs-demo.com",
    insuranceAddress: "120 Blue Shield Plaza, Chicago, IL",
    doctorName: "Dr. Daniel Chu",
    doctorSpecialty: "Sports medicine",
    doctorPhone: "(555) 818-4400",
    clinicLocation: "Midwest Sports Medicine",
    prescribedLocation: "Sports medicine urgent clinic",
    pharmacyName: "Walgreens",
    pharmacyPhone: "(555) 818-4477",
    pharmacyLocation: "980 River Rd, Chicago, IL",
    appointmentDate: "2026-04-08",
    appointmentTime: "15:00",
    appointmentDepartment: "Sports medicine",
    appointmentType: "In-person",
    bloodPressure: "118/74",
    heartRate: "84 bpm",
    oxygenLevel: "99%",
    temperature: "98.2 F",
    feverSymptom: "None",
    painSymptom: "Moderate",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "Mild",
    dischargeText: `Patient evaluated for right knee injury after twisting during soccer practice. Exam is most consistent with knee sprain and soft tissue inflammation. No fracture seen on imaging and patient is stable for discharge.

Discharge medications:
- Ibuprofen 600 mg by mouth every 8 hours as needed for pain with food.

Instructions:
- Rest, ice, compression, and elevation for 48 hours.
- Use knee brace and avoid running, jumping, or pivoting.
- Begin gentle range-of-motion exercises only if advised and pain is improving.

Follow-up:
- Sports medicine follow-up within 3 to 5 days.
- Return urgently for worsening swelling, inability to bear weight, new numbness, skin color change, or severe uncontrolled pain.`,
  },
  "migraine-visit": {
    patientName: "Hannah Price",
    language: "English",
    patientAge: "33",
    conditions: "Migraine headaches",
    allergies: "Sulfa drugs",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 266-4400",
    patientEmail: "hannah.price@example.com",
    caregiverPhone: "(555) 266-4430",
    caregiverEmail: "partner@example.com",
    preferredContact: "Email",
    emergencyName: "Chris Miller",
    emergencyRelation: "Partner",
    emergencyPhone: "(555) 266-4430",
    insurancePlan: "UnitedHealthcare Choice Plus",
    insuranceMemberId: "NEUR554400",
    insuranceCopay: "$35 urgent care",
    insuranceDeductible: "$1,500",
    insurancePhone: "(800) 555-0404",
    insuranceEmail: "support@uhc-demo.com",
    insuranceAddress: "440 United Plaza, Chicago, IL",
    doctorName: "Dr. Rachel Owens",
    doctorSpecialty: "Neurology",
    doctorPhone: "(555) 910-2211",
    clinicLocation: "Downtown Neurology Group",
    prescribedLocation: "Emergency department discharge area",
    pharmacyName: "Costco Pharmacy",
    pharmacyPhone: "(555) 600-3000",
    pharmacyLocation: "250 Warehouse Rd, Chicago, IL",
    appointmentDate: "2026-04-13",
    appointmentTime: "10:00",
    appointmentDepartment: "Neurology",
    appointmentType: "Virtual",
    bloodPressure: "126/80",
    heartRate: "76 bpm",
    oxygenLevel: "99%",
    temperature: "98.0 F",
    feverSymptom: "None",
    painSymptom: "Moderate",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "Moderate",
    dischargeText: `Patient treated for migraine flare with nausea, light sensitivity, and throbbing headache. Symptoms improved with IV fluids and migraine medication. Neurologic exam remained normal and patient is stable for discharge.

Discharge medications:
- Sumatriptan 50 mg by mouth at migraine onset as directed.
- Ondansetron 4 mg by mouth every 8 hours as needed for nausea.
- Acetaminophen 500 mg every 6 hours as needed for pain.

Instructions:
- Rest in a dark quiet room if migraine symptoms return.
- Drink fluids and avoid known migraine triggers.
- Do not exceed recommended medication dosing.

Follow-up:
- Neurology or primary care follow-up within 1 to 2 weeks.
- Return urgently for worst headache of life, new weakness, confusion, fainting, vision loss, or persistent vomiting.`,
  },
  "mental-health": {
    patientName: "Ariana Flores",
    language: "English",
    patientAge: "22",
    conditions: "Anxiety, depression",
    allergies: "None known",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 611-2200",
    patientEmail: "ariana.flores@example.com",
    caregiverPhone: "(555) 611-2201",
    caregiverEmail: "sister@example.com",
    preferredContact: "Phone",
    emergencyName: "Lucia Flores",
    emergencyRelation: "Sister",
    emergencyPhone: "(555) 611-2201",
    insurancePlan: "Cigna Open Access Plus",
    insuranceMemberId: "MH221900",
    insuranceCopay: "$30 behavioral health",
    insuranceDeductible: "$1,100",
    insurancePhone: "(800) 555-0303",
    insuranceEmail: "support@cigna-demo.com",
    insuranceAddress: "330 Cigna Way, Chicago, IL",
    doctorName: "Dr. Priya Mehta",
    doctorSpecialty: "Behavioral health",
    doctorPhone: "(555) 611-2288",
    clinicLocation: "MindWell Behavioral Clinic",
    prescribedLocation: "Behavioral health urgent clinic",
    pharmacyName: "CVS Pharmacy",
    pharmacyPhone: "(555) 611-2290",
    pharmacyLocation: "88 Elm St, Chicago, IL",
    appointmentDate: "2026-04-10",
    appointmentTime: "14:30",
    appointmentDepartment: "Behavioral health",
    appointmentType: "Virtual",
    bloodPressure: "116/72",
    heartRate: "86 bpm",
    oxygenLevel: "99%",
    temperature: "98.1 F",
    feverSymptom: "None",
    painSymptom: "None",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "Moderate",
    dischargeText: `Patient evaluated for anxiety flare with insomnia, low mood, and difficulty coping with stress. No acute medical instability at discharge. Safety plan reviewed and patient is stable for discharge with close follow-up.

Discharge medications:
- Continue home mental health medications as prescribed.
- Hydroxyzine 25 mg by mouth every 8 hours as needed for anxiety if prescribed.

Instructions:
- Use grounding techniques and take breaks from overwhelming triggers.
- Stay connected with a trusted support person today.
- Avoid alcohol or non-prescribed substances.

Follow-up:
- Behavioral health follow-up within 2 to 3 days.
- Return urgently or call emergency services for thoughts of self-harm, inability to stay safe, severe panic that does not improve, or new confusion.`,
  },
  "stomach-infection": {
    patientName: "Diego Alvarez",
    language: "English",
    patientAge: "35",
    conditions: "No major chronic conditions",
    allergies: "None known",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 644-9090",
    patientEmail: "diego.alvarez@example.com",
    caregiverPhone: "(555) 644-9091",
    caregiverEmail: "wife@example.com",
    preferredContact: "Phone",
    emergencyName: "Marisol Alvarez",
    emergencyRelation: "Spouse",
    emergencyPhone: "(555) 644-9091",
    insurancePlan: "Blue Cross Blue Shield PPO",
    insuranceMemberId: "GI550022",
    insuranceCopay: "$35 urgent care",
    insuranceDeductible: "$1,000",
    insurancePhone: "(800) 555-0101",
    insuranceEmail: "support@bcbs-demo.com",
    insuranceAddress: "120 Blue Shield Plaza, Chicago, IL",
    doctorName: "Dr. Steven Hall",
    doctorSpecialty: "Primary care",
    doctorPhone: "(555) 644-9000",
    clinicLocation: "Riverfront Medical Group",
    prescribedLocation: "Urgent care discharge desk",
    pharmacyName: "Walgreens",
    pharmacyPhone: "(555) 644-9011",
    pharmacyLocation: "215 River St, Chicago, IL",
    appointmentDate: "2026-04-09",
    appointmentTime: "10:45",
    appointmentDepartment: "Primary care",
    appointmentType: "Virtual",
    bloodPressure: "112/70",
    heartRate: "92 bpm",
    oxygenLevel: "99%",
    temperature: "99.2 F",
    feverSymptom: "Mild",
    painSymptom: "Mild",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "Moderate",
    dischargeText: `Patient treated for stomach infection with vomiting, diarrhea, and mild dehydration. Symptoms improved with fluids and anti-nausea treatment. Patient is stable for discharge home.

Discharge medications:
- Ondansetron 4 mg by mouth every 8 hours as needed for nausea.
- Oral rehydration solution as tolerated.

Instructions:
- Drink small amounts of fluid often.
- Start with bland foods and avoid greasy meals until symptoms improve.
- Wash hands frequently and rest.

Follow-up:
- Primary care follow-up in 2 to 3 days if symptoms are not improving.
- Return urgently for blood in stool, severe abdominal pain, fainting, inability to keep fluids down, or worsening dehydration.`,
  },
  "kidney-stone": {
    patientName: "Marcus Green",
    language: "English",
    patientAge: "47",
    conditions: "History of kidney stones",
    allergies: "None known",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 788-4400",
    patientEmail: "marcus.green@example.com",
    caregiverPhone: "(555) 788-4401",
    caregiverEmail: "partner@example.com",
    preferredContact: "Phone",
    emergencyName: "Naomi Green",
    emergencyRelation: "Partner",
    emergencyPhone: "(555) 788-4401",
    insurancePlan: "UnitedHealthcare Choice Plus",
    insuranceMemberId: "URO332211",
    insuranceCopay: "$45 emergency visit",
    insuranceDeductible: "$1,900",
    insurancePhone: "(800) 555-0404",
    insuranceEmail: "support@uhc-demo.com",
    insuranceAddress: "440 United Plaza, Chicago, IL",
    doctorName: "Dr. Aaron Blake",
    doctorSpecialty: "Urology",
    doctorPhone: "(555) 788-4490",
    clinicLocation: "Chicago Urology Associates",
    prescribedLocation: "Emergency department discharge room",
    pharmacyName: "CVS Pharmacy",
    pharmacyPhone: "(555) 788-4470",
    pharmacyLocation: "510 Oak Ave, Chicago, IL",
    appointmentDate: "2026-04-08",
    appointmentTime: "12:15",
    appointmentDepartment: "Urology",
    appointmentType: "In-person",
    bloodPressure: "134/84",
    heartRate: "90 bpm",
    oxygenLevel: "99%",
    temperature: "98.4 F",
    feverSymptom: "None",
    painSymptom: "Moderate",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "Mild",
    dischargeText: `Patient treated for kidney stone with flank pain and nausea. Pain improved with medication and patient is stable for discharge.

Discharge medications:
- Tamsulosin 0.4 mg by mouth once daily as prescribed.
- Ibuprofen 600 mg by mouth every 8 hours as needed for pain with food.
- Ondansetron 4 mg by mouth every 8 hours as needed for nausea.

Instructions:
- Drink plenty of water unless otherwise directed.
- Strain urine if instructed to catch the stone.
- Rest and avoid driving if pain medicine causes drowsiness.

Follow-up:
- Urology follow-up within 2 to 3 days.
- Return urgently for fever, uncontrolled pain, inability to urinate, persistent vomiting, or worsening symptoms.`,
  },
  "ear-infection": {
    patientName: "Lucas Bennett",
    language: "English",
    patientAge: "12",
    conditions: "Seasonal allergies",
    allergies: "None known",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 730-5511",
    patientEmail: "parent.bennett@example.com",
    caregiverPhone: "(555) 730-5511",
    caregiverEmail: "parent.bennett@example.com",
    preferredContact: "Phone",
    emergencyName: "Rachel Bennett",
    emergencyRelation: "Mother",
    emergencyPhone: "(555) 730-5511",
    insurancePlan: "Blue Cross Blue Shield PPO",
    insuranceMemberId: "ENT221144",
    insuranceCopay: "$25 pediatric visit",
    insuranceDeductible: "$800",
    insurancePhone: "(800) 555-0101",
    insuranceEmail: "support@bcbs-demo.com",
    insuranceAddress: "120 Blue Shield Plaza, Chicago, IL",
    doctorName: "Dr. Melissa Ford",
    doctorSpecialty: "Pediatrics",
    doctorPhone: "(555) 711-2299",
    clinicLocation: "Lakeshore Pediatrics",
    prescribedLocation: "Pediatric urgent care exam room",
    pharmacyName: "Walgreens",
    pharmacyPhone: "(555) 711-2200",
    pharmacyLocation: "640 Pine St, Chicago, IL",
    appointmentDate: "2026-04-11",
    appointmentTime: "16:00",
    appointmentDepartment: "Pediatrics",
    appointmentType: "In-person",
    bloodPressure: "108/68",
    heartRate: "94 bpm",
    oxygenLevel: "99%",
    temperature: "99.4 F",
    feverSymptom: "Mild",
    painSymptom: "Moderate",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "Mild",
    dischargeText: `Patient evaluated for right ear pain and diagnosed with acute ear infection. No severe swelling behind the ear, dehydration, or breathing concerns. Patient is stable for discharge home.

Discharge medications:
- Amoxicillin 500 mg by mouth twice daily for 7 days.
- Acetaminophen 500 mg every 6 hours as needed for pain or fever.

Instructions:
- Encourage fluids and rest.
- Avoid putting water inside the affected ear.
- Complete the full antibiotic course even if pain improves.

Follow-up:
- Pediatric follow-up in 3 to 5 days if pain is not improving.
- Return urgently for persistent vomiting, worsening swelling, high fever, severe headache, or new drainage from the ear.`,
  },
  "pregnancy-followup": {
    patientName: "Olivia Chen",
    language: "English",
    patientAge: "29",
    conditions: "28 weeks pregnant",
    allergies: "None known",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 801-4411",
    patientEmail: "olivia.chen@example.com",
    caregiverPhone: "(555) 801-4412",
    caregiverEmail: "partner@example.com",
    preferredContact: "Phone",
    emergencyName: "Daniel Chen",
    emergencyRelation: "Spouse",
    emergencyPhone: "(555) 801-4412",
    insurancePlan: "UnitedHealthcare Choice Plus",
    insuranceMemberId: "OB771155",
    insuranceCopay: "$35 OB visit",
    insuranceDeductible: "$1,400",
    insurancePhone: "(800) 555-0404",
    insuranceEmail: "support@uhc-demo.com",
    insuranceAddress: "440 United Plaza, Chicago, IL",
    doctorName: "Dr. Karen Liu",
    doctorSpecialty: "Obstetrics",
    doctorPhone: "(555) 811-3100",
    clinicLocation: "Women First OB Clinic",
    prescribedLocation: "Prenatal clinic",
    pharmacyName: "CVS Pharmacy",
    pharmacyPhone: "(555) 811-3199",
    pharmacyLocation: "725 Central Ave, Chicago, IL",
    appointmentDate: "2026-04-14",
    appointmentTime: "09:15",
    appointmentDepartment: "Obstetrics",
    appointmentType: "In-person",
    bloodPressure: "118/74",
    heartRate: "88 bpm",
    oxygenLevel: "99%",
    temperature: "98.3 F",
    feverSymptom: "None",
    painSymptom: "Mild",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "Mild",
    dischargeText: `Patient seen for pregnancy follow-up after mild dehydration and light cramping. Evaluation was reassuring and patient is stable for discharge home with close prenatal follow-up.

Discharge medications:
- Continue prenatal vitamin once daily.
- Acetaminophen 500 mg every 6 hours as needed for pain, if approved by obstetric provider.

Instructions:
- Drink plenty of fluids and rest.
- Monitor fetal movement as instructed.
- Avoid heavy lifting and call the OB clinic if cramping increases.

Follow-up:
- Obstetric follow-up within 2 to 3 days.
- Return urgently for vaginal bleeding, leaking fluid, regular contractions, decreased fetal movement, severe headache, or sudden swelling.`,
  },
  "eye-irritation": {
    patientName: "Mason Rivera",
    language: "English",
    patientAge: "41",
    conditions: "No major chronic conditions",
    allergies: "None known",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 922-6600",
    patientEmail: "mason.rivera@example.com",
    caregiverPhone: "",
    caregiverEmail: "",
    preferredContact: "Email",
    emergencyName: "Jenna Rivera",
    emergencyRelation: "Spouse",
    emergencyPhone: "(555) 922-6601",
    insurancePlan: "Cigna Open Access Plus",
    insuranceMemberId: "EYE909011",
    insuranceCopay: "$30 urgent care",
    insuranceDeductible: "$950",
    insurancePhone: "(800) 555-0303",
    insuranceEmail: "support@cigna-demo.com",
    insuranceAddress: "330 Cigna Way, Chicago, IL",
    doctorName: "Dr. Patrick Wells",
    doctorSpecialty: "Ophthalmology",
    doctorPhone: "(555) 922-6655",
    clinicLocation: "ClearView Eye Center",
    prescribedLocation: "Urgent eye clinic",
    pharmacyName: "Costco Pharmacy",
    pharmacyPhone: "(555) 600-3000",
    pharmacyLocation: "250 Warehouse Rd, Chicago, IL",
    appointmentDate: "2026-04-12",
    appointmentTime: "11:20",
    appointmentDepartment: "Ophthalmology",
    appointmentType: "In-person",
    bloodPressure: "122/78",
    heartRate: "72 bpm",
    oxygenLevel: "99%",
    temperature: "98.1 F",
    feverSymptom: "None",
    painSymptom: "Mild",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "None",
    dischargeText: `Patient evaluated for eye redness and irritation after suspected dust exposure. No vision loss, severe trauma, or corneal ulcer seen on exam. Patient is stable for discharge.

Discharge medications:
- Artificial tears: use as needed for irritation.
- Erythromycin ophthalmic ointment: apply as directed if symptoms worsen or as prescribed.

Instructions:
- Avoid rubbing the eye.
- Do not wear contact lenses until cleared.
- Use protective eyewear if returning to dusty work areas.

Follow-up:
- Ophthalmology follow-up if redness or pain is not improving within 2 days.
- Return urgently for vision loss, severe eye pain, light sensitivity, or thick drainage.`,
  },
  "dental-visit": {
    patientName: "Kevin Morales",
    language: "English",
    patientAge: "29",
    conditions: "No major chronic conditions",
    allergies: "Amoxicillin",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 600-7788",
    patientEmail: "kevin.morales@example.com",
    caregiverPhone: "",
    caregiverEmail: "",
    preferredContact: "Phone",
    emergencyName: "Linda Morales",
    emergencyRelation: "Mother",
    emergencyPhone: "(555) 600-7799",
    insurancePlan: "Blue Cross Blue Shield PPO",
    insuranceMemberId: "DEN224466",
    insuranceCopay: "$40 dental visit",
    insuranceDeductible: "$850",
    doctorName: "Dr. Sarah Nguyen",
    doctorSpecialty: "Dentistry",
    doctorPhone: "(555) 455-1212",
    clinicLocation: "Bright Smile Dental Care",
    prescribedLocation: "Dental clinic exam room",
    pharmacyName: "Walgreens",
    pharmacyPhone: "(555) 455-9000",
    pharmacyLocation: "75 Oak St, Chicago, IL",
    appointmentDate: "2026-04-16",
    appointmentTime: "15:10",
    appointmentDepartment: "Dental follow-up",
    appointmentType: "In-person",
    bloodPressure: "122/76",
    heartRate: "72 bpm",
    oxygenLevel: "99%",
    temperature: "98.3 F",
    feverSymptom: "None",
    painSymptom: "Moderate",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "Mild",
    insurancePhone: "(800) 555-0101",
    insuranceEmail: "support@bcbs-demo.com",
    insuranceAddress: "120 Blue Shield Plaza, Chicago, IL",
    dischargeText: `Patient evaluated for dental pain due to probable cavity and gum inflammation. No facial swelling or airway compromise at discharge.

Discharge medications:
- Ibuprofen 400 mg by mouth every 6 hours as needed for pain with food.
- Chlorhexidine mouth rinse: use twice daily as directed.

Instructions:
- Avoid very hot, cold, or sugary foods until symptoms improve.
- Brush gently and floss carefully around the painful area.
- Schedule dental treatment promptly for definitive care.

Follow-up:
- Dental follow-up within 3 to 5 days.
- Return urgently for facial swelling, fever, difficulty swallowing, worsening pain not controlled by medicine, or drainage from the gums.`,
  },
  pneumonia: {
    patientName: "Maria Johnson",
    language: "English",
    patientAge: "58",
    conditions: "Asthma",
    allergies: "None known",
    patientPhone: "(555) 123-4567",
    patientEmail: "maria@example.com",
    caregiverPhone: "(555) 987-6543",
    caregiverEmail: "daughter@example.com",
    preferredContact: "Phone",
    emergencyName: "Anita Johnson",
    emergencyRelation: "Daughter",
    emergencyPhone: "(555) 765-4321",
    insurancePlan: "Blue Cross Blue Shield PPO",
    insuranceMemberId: "ABC123456",
    insuranceCopay: "$30 primary care",
    insuranceDeductible: "$1,500",
    doctorName: "Dr. Emily Carter",
    doctorSpecialty: "Primary care",
    doctorPhone: "(555) 222-1111",
    clinicLocation: "Northside Medical Center",
    prescribedLocation: "Emergency department discharge desk",
    pharmacyName: "Walgreens",
    pharmacyPhone: "(555) 444-3333",
    pharmacyLocation: "123 Main St, Chicago, IL",
    appointmentDate: "2026-04-10",
    appointmentTime: "10:30",
    appointmentDepartment: "Primary care",
    appointmentType: "In-person",
    bloodPressure: "128/82",
    heartRate: "78 bpm",
    oxygenLevel: "97%",
    temperature: "98.6 F",
    feverSymptom: "Mild",
    painSymptom: "Mild",
    coughSymptom: "Moderate",
    breathingSymptom: "Mild",
    fatigueSymptom: "Moderate",
    dischargeText: `Patient was admitted for community-acquired pneumonia and dehydration. Patient is stable for discharge today.

Discharge medications:
- Amoxicillin 500 mg by mouth three times daily for 5 days.
- Acetaminophen 500 mg every 6 hours as needed for fever or pain.
- Albuterol inhaler: 2 puffs every 4-6 hours as needed for shortness of breath.

Diet: Drink plenty of fluids. Resume regular diet as tolerated.
Activity: Light activity for 3 days. Rest if tired. Avoid strenuous exercise for 1 week.
Follow-up: See primary care physician within 5 days. Complete the full antibiotic course.
Return to ER for worsening shortness of breath, chest pain, fever above 101.5 F that does not improve, confusion, or inability to keep fluids down.`,
  },
  "heart-failure": {
    patientName: "Robert Lee",
    language: "English",
    patientAge: "72",
    conditions: "Heart failure, hypertension",
    allergies: "Sulfa drugs",
    patientPhone: "(555) 246-8101",
    patientEmail: "robert.lee@example.com",
    caregiverPhone: "(555) 864-2109",
    caregiverEmail: "son@example.com",
    preferredContact: "Caregiver phone",
    emergencyName: "Michael Lee",
    emergencyRelation: "Son",
    emergencyPhone: "(555) 864-2109",
    insurancePlan: "UnitedHealthcare Choice Plus",
    insuranceMemberId: "UHC884422",
    insuranceCopay: "$40 specialist",
    insuranceDeductible: "$2,000",
    doctorName: "Dr. Susan Patel",
    doctorSpecialty: "Cardiology",
    doctorPhone: "(555) 333-7777",
    clinicLocation: "Lakeside Heart Clinic",
    prescribedLocation: "Cardiology inpatient discharge unit",
    pharmacyName: "CVS Pharmacy",
    pharmacyPhone: "(555) 555-1212",
    pharmacyLocation: "450 Lake Ave, Chicago, IL",
    appointmentDate: "2026-04-08",
    appointmentTime: "14:00",
    appointmentDepartment: "Cardiology",
    appointmentType: "In-person",
    bloodPressure: "138/86",
    heartRate: "84 bpm",
    oxygenLevel: "95%",
    temperature: "98.1 F",
    feverSymptom: "None",
    painSymptom: "Mild",
    coughSymptom: "None",
    breathingSymptom: "Moderate",
    fatigueSymptom: "Moderate",
    dischargeText: `Patient admitted for acute on chronic heart failure exacerbation with fluid overload. Symptoms improved after IV diuresis and monitoring.

Discharge medications:
- Furosemide 40 mg by mouth every morning.
- Lisinopril 10 mg by mouth once daily.
- Metoprolol succinate 25 mg by mouth once daily.

Diet: Low sodium diet. Limit fluids to 2 liters per day.
Activity: Daily weight check. Light walking as tolerated.
Follow-up: Cardiology follow-up within 3 days. Call clinic if weight increases by more than 2 pounds in 24 hours.
Return to ER for chest pain, worsening shortness of breath at rest, fainting, new confusion, or severe swelling.`,
  },
  "diabetes-management": {
    patientName: "Nina Patel",
    language: "English",
    patientAge: "52",
    conditions: "Type 2 diabetes",
    allergies: "None known",
    hasFoodAllergy: "No",
    foodAllergies: "",
    patientPhone: "(555) 410-2200",
    patientEmail: "nina.patel@example.com",
    caregiverPhone: "(555) 410-2255",
    caregiverEmail: "husband@example.com",
    preferredContact: "Phone",
    emergencyName: "Raj Patel",
    emergencyRelation: "Spouse",
    emergencyPhone: "(555) 410-2255",
    insurancePlan: "Aetna Choice POS II",
    insuranceMemberId: "AET550011",
    insuranceCopay: "$25 primary care",
    insuranceDeductible: "$1,000",
    doctorName: "Dr. Laura Benson",
    doctorSpecialty: "Endocrinology",
    doctorPhone: "(555) 600-1122",
    clinicLocation: "Downtown Endocrine Clinic",
    prescribedLocation: "Outpatient diabetes clinic",
    pharmacyName: "CVS Pharmacy",
    pharmacyPhone: "(555) 700-1100",
    pharmacyLocation: "200 State St, Chicago, IL",
    appointmentDate: "2026-04-12",
    appointmentTime: "08:45",
    appointmentDepartment: "Endocrinology",
    appointmentType: "In-person",
    bloodPressure: "126/78",
    heartRate: "80 bpm",
    oxygenLevel: "98%",
    temperature: "98.5 F",
    feverSymptom: "None",
    painSymptom: "None",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "Mild",
    dischargeText: `Patient seen for uncontrolled blood sugar and dehydration related to type 2 diabetes. Blood sugar improved with treatment and patient is stable for discharge.

Discharge medications:
- Metformin 500 mg by mouth twice daily with meals.
- Insulin glargine 10 units subcutaneously every night.

Diet: Follow diabetic meal plan and avoid sugary drinks.
Monitoring: Check blood sugar before breakfast and before dinner each day.
Activity: Light daily walking as tolerated.
Follow-up: Endocrinology or primary care follow-up within 1 week.
Return urgently for severe low blood sugar, vomiting, confusion, fainting, chest pain, or inability to keep fluids down.`,
  },
  "asthma-flare": {
    patientName: "Jasmine Walker",
    language: "English",
    patientAge: "27",
    conditions: "Asthma",
    allergies: "None known",
    patientPhone: "(555) 654-9988",
    patientEmail: "jasmine.walker@example.com",
    caregiverPhone: "(555) 454-2211",
    caregiverEmail: "mom@example.com",
    preferredContact: "Email",
    emergencyName: "Carla Walker",
    emergencyRelation: "Mother",
    emergencyPhone: "(555) 454-2211",
    insurancePlan: "Cigna Open Access Plus",
    insuranceMemberId: "CIG776655",
    insuranceCopay: "$20 urgent care",
    insuranceDeductible: "$900",
    doctorName: "Dr. Nina Brooks",
    doctorSpecialty: "Pulmonology",
    doctorPhone: "(555) 202-4040",
    clinicLocation: "West Loop Pulmonary Group",
    prescribedLocation: "Urgent care discharge station",
    pharmacyName: "Costco Pharmacy",
    pharmacyPhone: "(555) 600-3000",
    pharmacyLocation: "250 Warehouse Rd, Chicago, IL",
    appointmentDate: "2026-04-11",
    appointmentTime: "11:45",
    appointmentDepartment: "Pulmonology",
    appointmentType: "Virtual",
    bloodPressure: "118/74",
    heartRate: "92 bpm",
    oxygenLevel: "96%",
    temperature: "98.4 F",
    feverSymptom: "None",
    painSymptom: "None",
    coughSymptom: "Moderate",
    breathingSymptom: "Moderate",
    fatigueSymptom: "Mild",
    dischargeText: `Patient evaluated for asthma flare with wheezing and cough after seasonal allergen exposure. Improved after nebulizer treatment and steroids.

Discharge medications:
- Prednisone 40 mg once daily for 5 days.
- Albuterol inhaler: 2 puffs every 4 hours as needed for wheezing.
- Continue fluticasone inhaler twice daily.

Activity: Rest today and avoid smoke or pollen exposure when possible.
Follow-up: Pulmonology or primary care follow-up within 1 week.
Return urgently for breathing difficulty that does not improve after inhaler use, blue lips, chest tightness, or trouble speaking in full sentences.`,
  },
  "dermatology-rash": {
    patientName: "Priya Shah",
    language: "English",
    patientAge: "34",
    conditions: "Eczema",
    allergies: "None known",
    patientPhone: "(555) 112-3344",
    patientEmail: "priya.shah@example.com",
    caregiverPhone: "(555) 778-9911",
    caregiverEmail: "partner@example.com",
    preferredContact: "Email",
    emergencyName: "Arjun Shah",
    emergencyRelation: "Spouse",
    emergencyPhone: "(555) 778-9911",
    insurancePlan: "Cigna Open Access Plus",
    insuranceMemberId: "DERM443322",
    insuranceCopay: "$35 specialty visit",
    insuranceDeductible: "$1,100",
    doctorName: "Dr. Hannah Kim",
    doctorSpecialty: "Dermatology",
    doctorPhone: "(555) 909-1000",
    clinicLocation: "Lakeview Dermatology Center",
    prescribedLocation: "Outpatient dermatology clinic",
    pharmacyName: "CVS Pharmacy",
    pharmacyPhone: "(555) 700-8899",
    pharmacyLocation: "600 Clark St, Chicago, IL",
    appointmentDate: "2026-04-14",
    appointmentTime: "13:20",
    appointmentDepartment: "Dermatology",
    appointmentType: "In-person",
    bloodPressure: "116/72",
    heartRate: "76 bpm",
    oxygenLevel: "99%",
    temperature: "98.2 F",
    feverSymptom: "None",
    painSymptom: "Mild",
    coughSymptom: "None",
    breathingSymptom: "None",
    fatigueSymptom: "Mild",
    dischargeText: `Patient evaluated for itchy red rash on both forearms and neck, consistent with dermatitis flare. No signs of anaphylaxis or severe skin infection at discharge.

Discharge medications:
- Triamcinolone 0.1% cream: apply thin layer to affected areas twice daily for 7 days.
- Cetirizine 10 mg by mouth once daily as needed for itching.

Skin care: Avoid fragranced soaps and hot showers. Use fragrance-free moisturizer at least twice daily.
Activity: Avoid scratching and keep nails short.
Follow-up: Dermatology follow-up within 1 week if rash is not improving.
Return urgently for facial swelling, trouble breathing, rapidly spreading rash, fever, severe pain, or drainage from the skin.`,
  },
};

const insuranceSupportDefaults = {
  "Blue Cross Blue Shield PPO": {
    phone: "(800) 555-0101",
    email: "support@bcbs-demo.com",
    address: "120 Blue Shield Plaza, Chicago, IL",
  },
  "Aetna Choice POS II": {
    phone: "(800) 555-0202",
    email: "support@aetna-demo.com",
    address: "220 Aetna Center Dr, Chicago, IL",
  },
  "Cigna Open Access Plus": {
    phone: "(800) 555-0303",
    email: "support@cigna-demo.com",
    address: "330 Cigna Way, Chicago, IL",
  },
  "UnitedHealthcare Choice Plus": {
    phone: "(800) 555-0404",
    email: "support@uhc-demo.com",
    address: "440 United Plaza, Chicago, IL",
  },
  "Kaiser Permanente HMO": {
    phone: "(800) 555-0505",
    email: "support@kaiser-demo.com",
    address: "550 Kaiser Blvd, Chicago, IL",
  },
};

const defaultQuestionTemplates = [
  "Can I take these medicines with food?",
  "What symptoms mean I should call the doctor right away?",
  "When is my next follow-up and what should I bring?",
  "What should I do if I miss a dose of my medicine?",
  "Which part of my care plan is most important today?",
  "Are there any warning signs that mean I should go to the ER?",
  "What should I ask my pharmacist about these medicines?",
  "What care gaps do I still need to complete before recovery is on track?",
];

const departmentQuestionTemplates = {
  dentistry: [
    "What foods should I avoid until the dental pain improves?",
    "When should I call the dentist about swelling or drainage?",
    "How should I use the mouth rinse and pain medicine safely?",
  ],
  dermatology: [
    "What could make this rash worse and what should I avoid?",
    "When should I call if the rash is spreading or painful?",
    "How should I apply the cream and skin-care plan correctly?",
  ],
  cardiology: [
    "What weight change or swelling should I report right away?",
    "How much fluid and salt should I limit each day?",
    "Which symptoms mean I should go to the ER instead of waiting?",
  ],
  pulmonology: [
    "How often can I use my inhaler safely?",
    "What breathing symptoms mean I need urgent care?",
    "What should I avoid while my lungs are recovering?",
  ],
  respiratory: [
    "What oxygen level means I should get urgent help?",
    "How long should I rest before returning to normal activity?",
    "What cough or breathing changes should I report right away?",
  ],
  orthopedics: [
    "When can I put weight on this injury again?",
    "What swelling or numbness means I should come back urgently?",
    "How long should I use the brace, ice, and elevation plan?",
  ],
  "sports medicine": [
    "When can I safely return to sports or practice?",
    "What pain or swelling means the injury is getting worse?",
    "What rehab or stretching questions should I ask at follow-up?",
  ],
  neurology: [
    "What headache symptoms mean this is more serious than a migraine?",
    "When should I take the migraine medicine after symptoms start?",
    "What triggers should I avoid before the next follow-up?",
  ],
  obstetrics: [
    "What pregnancy symptoms mean I should go in right away?",
    "How should I monitor fetal movement at home?",
    "What cramping or swelling should I report to my OB team?",
  ],
  "behavioral health": [
    "What should I do if anxiety or low mood gets worse tonight?",
    "Who should I contact first if I feel unsafe or overwhelmed?",
    "What daily routine can help me stay on track before follow-up?",
  ],
  endocrinology: [
    "What blood sugar readings should I call about right away?",
    "How should I take these diabetes medicines with meals?",
    "What signs of low blood sugar should I watch for today?",
  ],
  urology: [
    "How much water should I drink while recovering from a kidney stone?",
    "What symptoms mean the stone may be causing a blockage?",
    "When should I call if the pain medicine is not helping enough?",
  ],
  ophthalmology: [
    "What eye symptoms mean I need urgent help today?",
    "When can I wear contact lenses again safely?",
    "How should I use the eye medicine or artificial tears correctly?",
  ],
  ent: [
    "What ear, throat, or sinus symptoms mean I should come back urgently?",
    "How should I take the antibiotic and pain medicine correctly?",
    "When should I follow up if the pain is not improving?",
  ],
  "primary care": [
    "What part of my recovery plan should I focus on first?",
    "Which symptoms should be better by my next follow-up?",
    "What should I ask my doctor if I am not improving as expected?",
  ],
};

const patientNameInput = document.getElementById("patient-name");
const languageSelect = document.getElementById("language");
const patientAgeInput = document.getElementById("patient-age");
const conditionsInput = document.getElementById("conditions");
const allergiesInput = document.getElementById("allergies");
const hasFoodAllergyInput = document.getElementById("has-food-allergy");
const foodAllergiesInput = document.getElementById("food-allergies");
const patientPhoneInput = document.getElementById("patient-phone");
const patientEmailInput = document.getElementById("patient-email");
const caregiverPhoneInput = document.getElementById("caregiver-phone");
const caregiverEmailInput = document.getElementById("caregiver-email");
const preferredContactInput = document.getElementById("preferred-contact");
const emergencyNameInput = document.getElementById("emergency-name");
const emergencyRelationInput = document.getElementById("emergency-relation");
const emergencyPhoneInput = document.getElementById("emergency-phone");
const insurancePlanInput = document.getElementById("insurance-plan");
const insuranceMemberIdInput = document.getElementById("insurance-member-id");
const insuranceCopayInput = document.getElementById("insurance-copay");
const insuranceDeductibleInput = document.getElementById("insurance-deductible");
const insurancePhoneInput = document.getElementById("insurance-phone");
const insuranceEmailInput = document.getElementById("insurance-email");
const insuranceAddressInput = document.getElementById("insurance-address");
const insuranceCardImageInput = document.getElementById("insurance-card-image");
const insuranceImageStatus = document.getElementById("insurance-image-status");
const doctorNameInput = document.getElementById("doctor-name");
const doctorSpecialtyInput = document.getElementById("doctor-specialty");
const doctorPhoneInput = document.getElementById("doctor-phone");
const clinicLocationInput = document.getElementById("clinic-location");
const prescribedLocationInput = document.getElementById("prescribed-location");
const pharmacyNameInput = document.getElementById("pharmacy-name");
const pharmacyPhoneInput = document.getElementById("pharmacy-phone");
const pharmacyLocationInput = document.getElementById("pharmacy-location");
const appointmentDateInput = document.getElementById("appointment-date");
const appointmentTimeInput = document.getElementById("appointment-time");
const appointmentDepartmentInput = document.getElementById("appointment-department");
const appointmentTypeInput = document.getElementById("appointment-type");
const bloodPressureInput = document.getElementById("blood-pressure");
const heartRateInput = document.getElementById("heart-rate");
const oxygenLevelInput = document.getElementById("oxygen-level");
const temperatureInput = document.getElementById("temperature");
const labReportImageInput = document.getElementById("lab-report-image");
const labImageStatus = document.getElementById("lab-image-status");
const xrayImageInput = document.getElementById("xray-image");
const xrayImageStatus = document.getElementById("xray-image-status");
const xrayReportImageInput = document.getElementById("xray-report-image");
const xrayReportStatus = document.getElementById("xray-report-status");
const feverSymptomInput = document.getElementById("fever-symptom");
const painSymptomInput = document.getElementById("pain-symptom");
const coughSymptomInput = document.getElementById("cough-symptom");
const breathingSymptomInput = document.getElementById("breathing-symptom");
const fatigueSymptomInput = document.getElementById("fatigue-symptom");
const dischargeText = document.getElementById("discharge-text");
const prescriptionImageInput = document.getElementById("prescription-image");
const statusPill = document.getElementById("status-pill");
const apiStatus = document.getElementById("api-status");
const imageStatus = document.getElementById("image-status");
const questionTemplateSelect = document.getElementById("question-template");
const patientQuestionInput = document.getElementById("patient-question");
const qaStatus = document.getElementById("qa-status");

const summaryOutput = document.getElementById("summary-output");
const medicationsOutput = document.getElementById("medications-output");
const followupOutput = document.getElementById("followup-output");
const warningsOutput = document.getElementById("warnings-output");
const lifestyleOutput = document.getElementById("lifestyle-output");
const caregiverOutput = document.getElementById("caregiver-output");
const prescriptionOutput = document.getElementById("prescription-output");
const safetyOutput = document.getElementById("safety-output");
const missingOutput = document.getElementById("missing-output");
const timelineOutput = document.getElementById("timeline-output");
const evidenceOutput = document.getElementById("evidence-output");
const insuranceOutput = document.getElementById("insurance-output");
const coverageOutput = document.getElementById("coverage-output");
const costOutput = document.getElementById("cost-output");
const remindersOutput = document.getElementById("reminders-output");
const coordinationOutput = document.getElementById("coordination-output");
const providerOutput = document.getElementById("provider-output");
const emergencyOutput = document.getElementById("emergency-output");
const appointmentOutput = document.getElementById("appointment-output");
const checklistOutput = document.getElementById("checklist-output");
const insuranceCardOutput = document.getElementById("insurance-card-output");
const labOutput = document.getElementById("lab-output");
const vitalsOutput = document.getElementById("vitals-output");
const dashboardSummaryOutput = document.getElementById("dashboard-summary");
const riskOutput = document.getElementById("risk-output");
const nextActionsOutput = document.getElementById("next-actions-output");
const symptomOutput = document.getElementById("symptom-output");
const careTeamOutput = document.getElementById("care-team-output");
const progressOutput = document.getElementById("progress-output");
const doctorQuestionsOutput = document.getElementById("doctor-questions-output");
const readmissionScoreOutput = document.getElementById("readmission-score-output");
const careGapsOutput = document.getElementById("care-gaps-output");
const readmissionActionsOutput = document.getElementById("readmission-actions-output");
const doctorPrepOutput = document.getElementById("doctor-prep-output");
const xrayImageOutput = document.getElementById("xray-image-output");
const xrayReportOutput = document.getElementById("xray-report-output");
const documentCenterOutput = document.getElementById("document-center-output");
const urgentBanner = document.getElementById("urgent-banner");
const qaAnswer = document.getElementById("qa-answer");
const printPlanButton = document.getElementById("print-plan");
const printPlanTopButton = document.getElementById("print-plan-top");
const speakPlanButton = document.getElementById("speak-plan");
const speakPlanTopButton = document.getElementById("speak-plan-top");
const copySummaryButton = document.getElementById("copy-summary");
const copySummaryTopButton = document.getElementById("copy-summary-top");
const downloadSummaryButton = document.getElementById("download-summary");
const downloadSummaryTopButton = document.getElementById("download-summary-top");
const sampleCaseSelect = document.getElementById("sample-case-select");
const toastContainer = document.getElementById("toast-container");

const buttons = {
  loadSample: document.getElementById("load-sample"),
  runDemo: document.getElementById("run-demo"),
  loadExample: document.getElementById("load-example"),
  analyzeTop: document.getElementById("analyze-top"),
  analyzeMain: document.getElementById("analyze-main"),
  clearAll: document.getElementById("clear-all"),
  askQuestion: document.getElementById("ask-question"),
};

let prescriptionImageDataUrl = "";
let insuranceCardImageDataUrl = "";
let labReportImageDataUrl = "";
let xrayImageDataUrl = "";
let xrayReportImageDataUrl = "";
let prescriptionImageName = "";
let insuranceCardImageName = "";
let labReportImageName = "";
let xrayImageName = "";
let xrayReportImageName = "";
let currentCarePlan = null;

function hasAnySourceDocument(context) {
  return Boolean(
    context.dischargeText ||
      context.prescriptionImage ||
      context.insuranceCardImage ||
      context.labReportImage ||
      context.xrayImage ||
      context.xrayReportImage
  );
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function bulletList(items) {
  if (!items.length) {
    return '<p class="muted">No items available.</p>';
  }

  return `<ul>${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function sanitizeFilenamePart(value, fallback = "care-plan") {
  return (value || fallback)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || fallback;
}

function showToast(message, variant = "info") {
  if (!toastContainer) {
    return;
  }

  const toast = document.createElement("div");
  toast.className = `toast ${variant}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);

  window.setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
  }, 2400);

  window.setTimeout(() => {
    toast.remove();
  }, 2800);
}

function setStatusPill(level, label) {
  statusPill.classList.remove("status-low", "status-medium", "status-urgent");
  if (level) {
    statusPill.classList.add(`status-${level}`);
  }
  statusPill.textContent = label;
}

function mapLinkMarkup(label, address) {
  if (!address) {
    return "";
  }

  const href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return `<p><a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(
    label
  )}</a></p>`;
}

function phoneLinkMarkup(label, phoneNumber) {
  if (!phoneNumber) {
    return "";
  }

  const telValue = phoneNumber.replace(/[^+\d]/g, "");
  if (!telValue) {
    return "";
  }

  return `<p><a href="tel:${telValue}">${escapeHtml(label)}</a></p>`;
}

function emailLinkMarkup(label, email) {
  if (!email) {
    return "";
  }

  return `<p><a href="mailto:${encodeURIComponent(email)}">${escapeHtml(label)}</a></p>`;
}

function paragraphList(items) {
  if (!items.length) {
    return '<p class="muted">No summary available yet.</p>';
  }

  return items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

function caregiverMarkup(text) {
  return `<p>${escapeHtml(text || "No caregiver note available yet.")}</p>`;
}

function cleanMarkdownText(value) {
  if (!value) {
    return "";
  }

  return value
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`(.*?)`/g, "$1")
    .trim();
}

function buildDashboardSummary(plan) {
  const parts = [];
  if (patientNameInput.value.trim()) parts.push(`Patient: ${patientNameInput.value.trim()}`);
  if (patientAgeInput.value.trim()) parts.push(`Age: ${patientAgeInput.value.trim()}`);
  if (conditionsInput.value.trim()) parts.push(`Conditions: ${conditionsInput.value.trim()}`);
  if (doctorNameInput.value.trim()) parts.push(`Doctor: ${doctorNameInput.value.trim()}`);
  if (appointmentDateInput.value) parts.push(`Next visit: ${appointmentDateInput.value}`);
  if (pharmacyNameInput.value.trim()) parts.push(`Pharmacy: ${pharmacyNameInput.value.trim()}`);
  if (!parts.length && plan.summary && plan.summary.length) {
    parts.push(plan.summary[0]);
  }
  return parts.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

function buildCareTeamMarkup() {
  const items = [];

  if (doctorNameInput.value.trim()) {
    items.push(`<p><strong>Doctor:</strong> ${escapeHtml(doctorNameInput.value.trim())}</p>`);
  }
  if (pharmacyNameInput.value.trim()) {
    items.push(`<p><strong>Pharmacy:</strong> ${escapeHtml(pharmacyNameInput.value.trim())}</p>`);
  }
  if (insurancePlanInput.value.trim()) {
    items.push(`<p><strong>Insurance:</strong> ${escapeHtml(insurancePlanInput.value.trim())}</p>`);
  }
  if (emergencyNameInput.value.trim()) {
    items.push(`<p><strong>Emergency contact:</strong> ${escapeHtml(emergencyNameInput.value.trim())}</p>`);
  }

  const links = [
    phoneLinkMarkup("Call doctor", doctorPhoneInput.value.trim()),
    phoneLinkMarkup("Call pharmacy", pharmacyPhoneInput.value.trim()),
    phoneLinkMarkup("Call insurance", insurancePhoneInput.value.trim()),
    phoneLinkMarkup("Call emergency contact", emergencyPhoneInput.value.trim()),
    mapLinkMarkup("Open clinic in Google Maps", clinicLocationInput.value.trim()),
    mapLinkMarkup("Open pharmacy in Google Maps", pharmacyLocationInput.value.trim()),
  ].filter(Boolean);

  const info = items.length ? items.join("") : '<p class="muted">Add provider and insurance details to build your care team hub.</p>';
  const actionLinks = links.length ? `<div class="link-stack">${links.join("")}</div>` : "";

  return `${info}${actionLinks}`;
}

function buildProgressMarkup(plan) {
  const reminders = plan.reminderPlan && plan.reminderPlan.length ? plan.reminderPlan[0] : "Generate a plan to see your first reminder.";
  const appointment = appointmentDateInput.value
    ? `${appointmentDateInput.value}${appointmentTimeInput.value ? ` at ${appointmentTimeInput.value}` : ""}`
    : "No appointment entered yet";
  const monitor = plan.warningSigns && plan.warningSigns.length
    ? plan.warningSigns[0]
    : "Keep checking symptoms and compare them with the warning signs section.";

  return `<div class="progress-grid">
    <div class="progress-chip">
      <strong>Today</strong>
      <span>${escapeHtml(reminders)}</span>
    </div>
    <div class="progress-chip">
      <strong>Next visit</strong>
      <span>${escapeHtml(appointment)}</span>
    </div>
    <div class="progress-chip">
      <strong>Keep watching</strong>
      <span>${escapeHtml(monitor)}</span>
    </div>
  </div>`;
}

function buildDoctorQuestions(plan) {
  const source = plan.doctorVisitPrep && plan.doctorVisitPrep.length
    ? plan.doctorVisitPrep
    : buildDoctorPrepFallback();
  return source.slice(0, 3);
}

function getQuestionTemplateKey() {
  const specialty = doctorSpecialtyInput.value.trim().toLowerCase();

  if (specialty.includes("sports")) return "sports medicine";
  if (specialty.includes("ortho")) return "orthopedics";
  if (specialty.includes("cardio")) return "cardiology";
  if (specialty.includes("pulmon")) return "pulmonology";
  if (specialty.includes("ob") || specialty.includes("gyn") || specialty.includes("pregnan")) return "obstetrics";
  if (specialty.includes("behavior") || specialty.includes("mental") || specialty.includes("psy")) return "behavioral health";
  if (specialty.includes("endo")) return "endocrinology";
  if (specialty.includes("uro")) return "urology";
  if (specialty.includes("oph")) return "ophthalmology";
  if (specialty.includes("derm")) return "dermatology";
  if (specialty.includes("dent")) return "dentistry";
  if (specialty.includes("neuro")) return "neurology";
  if (specialty.includes("ent") || specialty.includes("otol")) return "ent";
  if (specialty.includes("primary")) return "primary care";

  if (
    coughSymptomInput.value ||
    breathingSymptomInput.value ||
    dischargeText.value.toLowerCase().includes("coronavirus") ||
    dischargeText.value.toLowerCase().includes("pneumonia")
  ) {
    return "respiratory";
  }

  return "primary care";
}

function populateQuestionTemplates() {
  if (!questionTemplateSelect) {
    return;
  }

  const key = getQuestionTemplateKey();
  const questions = [...(departmentQuestionTemplates[key] || []), ...defaultQuestionTemplates];
  const uniqueQuestions = [...new Set(questions)].slice(0, 8);
  const previousValue = questionTemplateSelect.value;

  questionTemplateSelect.innerHTML = '<option value="">Choose a suggested question</option>';
  uniqueQuestions.forEach((question) => {
    const option = document.createElement("option");
    option.value = question;
    option.textContent = question;
    questionTemplateSelect.appendChild(option);
  });

  if (uniqueQuestions.includes(previousValue)) {
    questionTemplateSelect.value = previousValue;
  }
}

function buildReadmissionInsights(plan) {
  let score = 0;
  const reasons = [];
  const careGaps = [];
  const actions = [];

  const moderateOrSevereSymptoms = [
    feverSymptomInput.value,
    painSymptomInput.value,
    coughSymptomInput.value,
    breathingSymptomInput.value,
    fatigueSymptomInput.value,
  ].filter((value) => value === "Moderate" || value === "Severe");

  if (!appointmentDateInput.value) {
    score += 25;
    reasons.push("No follow-up appointment is scheduled yet.");
    careGaps.push("Missing follow-up appointment");
    actions.push("Book the follow-up visit before leaving the app.");
  }

  if (!pharmacyNameInput.value.trim()) {
    score += 12;
    reasons.push("No pharmacy is listed for medication pickup.");
    careGaps.push("Pharmacy access not confirmed");
    actions.push("Choose a pharmacy and confirm where medicines will be picked up.");
  }

  if (!emergencyNameInput.value.trim() && !caregiverPhoneInput.value.trim()) {
    score += 12;
    reasons.push("Support at home is limited because no caregiver or emergency support is listed.");
    careGaps.push("Limited home support plan");
    actions.push("Add an emergency contact or caregiver for discharge support.");
  }

  if (moderateOrSevereSymptoms.length >= 3) {
    score += 22;
    reasons.push("Several active symptoms are still moderate or severe.");
    careGaps.push("Symptoms remain active after the visit");
    actions.push("Monitor symptoms closely and contact the care team if they worsen.");
  } else if (moderateOrSevereSymptoms.length > 0) {
    score += 10;
    reasons.push("Some symptoms are still active and need monitoring.");
  }

  if (breathingSymptomInput.value === "Severe") {
    score += 28;
    reasons.push("Severe breathing symptoms increase the chance of urgent return to care.");
    careGaps.push("Severe breathing symptoms");
    actions.push("Use urgent care guidance and seek emergency care if breathing gets worse.");
  }

  if (oxygenLevelInput.value.trim()) {
    const oxygenValue = Number.parseInt(oxygenLevelInput.value, 10);
    if (!Number.isNaN(oxygenValue) && oxygenValue <= 94) {
      score += 18;
      reasons.push("Lower oxygen level may signal slower recovery.");
      careGaps.push("Low oxygen trend to monitor");
      actions.push("Recheck oxygen levels and escalate if they keep dropping.");
    }
  }

  if (temperatureInput.value.trim()) {
    const tempValue = Number.parseFloat(temperatureInput.value);
    if (!Number.isNaN(tempValue) && tempValue >= 100.4) {
      score += 12;
      reasons.push("Fever may suggest infection or worsening recovery.");
      careGaps.push("Fever monitoring needed");
      actions.push("Track temperature and call the clinician if fever persists.");
    }
  }

  if (!insurancePlanInput.value.trim()) {
    score += 10;
    reasons.push("Insurance details are missing, which can delay medicines or follow-up care.");
    careGaps.push("Coverage not confirmed");
    actions.push("Confirm insurance coverage for medicines and follow-up visits.");
  }

  if (!patientPhoneInput.value.trim() && !patientEmailInput.value.trim()) {
    score += 8;
    reasons.push("No direct patient contact is listed for reminders or appointment updates.");
    careGaps.push("Reminder contact missing");
    actions.push("Add a phone number or email for reminders.");
  }

  if (!dischargeText.value.trim()) {
    score += 8;
    reasons.push("Incomplete discharge details make the recovery plan less reliable.");
    careGaps.push("Source instructions are incomplete");
  }

  score = Math.min(score, 100);

  let level = "Low";
  if (score >= 60) {
    level = "High";
  } else if (score >= 30) {
    level = "Medium";
  }

  if (!reasons.length) {
    reasons.push("No major readmission drivers were detected from the current inputs.");
  }

  if (!careGaps.length) {
    careGaps.push("No major care gaps detected from the current patient setup.");
  }

  if (!actions.length) {
    actions.push("Keep following the reminder plan, warning signs, and next appointment.");
  }

  return {
    score,
    level,
    explanation:
      level === "High"
        ? "This score is high because there are multiple unresolved recovery risks that could lead to urgent return to care."
        : level === "Medium"
          ? "This score is medium because recovery is partly on track, but some care gaps or active symptoms still need attention."
          : "This score is low because the current plan shows fewer barriers and fewer warning signals for avoidable readmission.",
    reasons: reasons.slice(0, 4),
    careGaps: careGaps.slice(0, 4),
    actions: actions.slice(0, 4),
  };
}

function buildEmergencyFallback() {
  const items = [];

  if (emergencyNameInput.value.trim()) {
    const relation = emergencyRelationInput.value.trim();
    items.push(
      `Primary emergency contact: ${emergencyNameInput.value.trim()}${
        relation ? ` (${relation})` : ""
      }`
    );
  }

  if (emergencyPhoneInput.value.trim()) {
    items.push(`Emergency phone: ${emergencyPhoneInput.value.trim()}`);
  }

  if (items.length) {
    items.push("Call 911 immediately for severe trouble breathing, chest pain, or sudden confusion.");
  }

  return items;
}

function buildAppointmentFallback() {
  const items = [];

  if (appointmentDateInput.value || appointmentTimeInput.value) {
    items.push(
      `Next appointment: ${appointmentDateInput.value || "date not entered"}${
        appointmentTimeInput.value ? ` at ${appointmentTimeInput.value}` : ""
      }`
    );
  }

  if (appointmentDepartmentInput.value.trim()) {
    items.push(`Department: ${appointmentDepartmentInput.value.trim()}`);
  }

  if (appointmentTypeInput.value) {
    items.push(`Visit type: ${appointmentTypeInput.value}`);
  }

  if (doctorNameInput.value.trim()) {
    items.push(`Scheduled provider: ${doctorNameInput.value.trim()}`);
  }

  return items;
}

function buildChecklistFallback() {
  const items = [];

  if (medicationsOutput.textContent.trim()) {
    items.push("Review medicine schedule for today and confirm all planned doses.");
  }

  if (appointmentDateInput.value || appointmentTimeInput.value) {
    items.push("Confirm the follow-up appointment date, time, and travel plan.");
  }

  if (pharmacyNameInput.value.trim()) {
    items.push(`Check prescription pickup or refill status with ${pharmacyNameInput.value.trim()}.`);
  }

  items.push("Monitor symptoms and compare them with the warning signs section.");
  items.push("Use the reminder plan and contact the care team if recovery changes.");

  return items;
}

function buildRiskFallback() {
  const items = [];
  const concerningSymptoms = [
    feverSymptomInput.value,
    painSymptomInput.value,
    coughSymptomInput.value,
    breathingSymptomInput.value,
    fatigueSymptomInput.value,
  ].filter((value) => value === "Severe" || value === "Moderate");

  if (breathingSymptomInput.value === "Severe" || oxygenLevelInput.value.trim()) {
    items.push("Watch breathing symptoms closely and compare them with the warning signs section.");
  }

  if (concerningSymptoms.length >= 3) {
    items.push("Current symptom pattern suggests closer follow-up may be needed.");
  } else if (concerningSymptoms.length > 0) {
    items.push("Some active symptoms are present, so keep monitoring recovery daily.");
  } else {
    items.push("No major symptom severity was entered, but continue routine monitoring.");
  }

  if (appointmentDateInput.value) {
    items.push(`Next planned follow-up is on ${appointmentDateInput.value}.`);
  }

  return items;
}

function buildSymptomFallback() {
  const symptomPairs = [
    ["Fever", feverSymptomInput.value],
    ["Pain", painSymptomInput.value],
    ["Cough", coughSymptomInput.value],
    ["Shortness of breath", breathingSymptomInput.value],
    ["Fatigue", fatigueSymptomInput.value],
  ].filter(([, value]) => value);

  if (!symptomPairs.length) {
    return ["No symptom severity was entered. Add symptoms if you want a more personalized review."];
  }

  return symptomPairs.map(([label, value]) => `${label}: ${value}`);
}

function buildDoctorPrepFallback() {
  const items = [];

  if (doctorNameInput.value.trim()) {
    items.push(`Confirm the recovery plan and medicine schedule with ${doctorNameInput.value.trim()}.`);
  }

  items.push("Ask which symptoms should improve first and which ones should prompt urgent follow-up.");
  items.push("Ask whether any medicines need to be taken with food or avoided together.");

  if (labReportImageDataUrl || xrayReportImageDataUrl || xrayImageDataUrl) {
    items.push("Ask the doctor to explain any uploaded lab or imaging results in plain language.");
  }

  return items;
}

function buildDocumentCenterMarkup() {
  const documents = [
    {
      label: "Discharge notes",
      ready: Boolean(dischargeText.value.trim()),
      detail: dischargeText.value.trim() ? "Ready to analyze" : "Paste instructions to include them",
      meta: dischargeText.value.trim() ? `${dischargeText.value.trim().split(/\s+/).length} words added` : "Not added yet",
    },
    {
      label: "Prescription image",
      ready: Boolean(prescriptionImageDataUrl),
      detail: prescriptionImageDataUrl ? "Uploaded" : "Optional upload",
      meta: prescriptionImageName || "No file selected",
    },
    {
      label: "Insurance card",
      ready: Boolean(insuranceCardImageDataUrl),
      detail: insuranceCardImageDataUrl ? "Uploaded" : "Optional upload",
      meta: insuranceCardImageName || "No file selected",
    },
    {
      label: "Lab report",
      ready: Boolean(labReportImageDataUrl),
      detail: labReportImageDataUrl ? "Uploaded" : "Optional upload",
      meta: labReportImageName || "No file selected",
    },
    {
      label: "X-ray image",
      ready: Boolean(xrayImageDataUrl),
      detail: xrayImageDataUrl ? "Uploaded" : "Optional upload",
      meta: xrayImageName || "No file selected",
    },
    {
      label: "X-ray report",
      ready: Boolean(xrayReportImageDataUrl),
      detail: xrayReportImageDataUrl ? "Uploaded" : "Optional upload",
      meta: xrayReportImageName || "No file selected",
    },
  ];

  return `<ul class="document-center-list">${documents
    .map(
      (item) => `<li class="document-center-item">
        <span class="document-badge ${item.ready ? "ready" : "missing"}">${
          item.ready ? "OK" : "..."
        }</span>
        <div>
          <strong>${escapeHtml(item.label)}</strong>
          <span>${escapeHtml(item.detail)}</span>
          <span class="doc-meta">${escapeHtml(item.meta)}</span>
        </div>
      </li>`
    )
    .join("")}</ul>`;
}

function buildPlainTextItems(items) {
  return items.filter(Boolean);
}

function buildCarePlanText(plan) {
  if (!plan) {
    return "";
  }

  const sections = [
    [
      "Patient Snapshot",
      buildPlainTextItems([
        patientNameInput.value.trim() ? `Patient: ${patientNameInput.value.trim()}` : "",
        patientAgeInput.value.trim() ? `Age: ${patientAgeInput.value.trim()}` : "",
        conditionsInput.value.trim() ? `Conditions: ${conditionsInput.value.trim()}` : "",
        doctorNameInput.value.trim() ? `Doctor: ${doctorNameInput.value.trim()}` : "",
        pharmacyNameInput.value.trim() ? `Pharmacy: ${pharmacyNameInput.value.trim()}` : "",
      ]),
    ],
    ["Top 3 Next Actions", buildNextActions(plan)],
    ["Summary", plan.summary || []],
    ["Medicine Schedule", plan.medications || []],
    ["Follow-up Checklist", plan.followUps || []],
    ["Call a Doctor If", plan.warningSigns || []],
    ["Lifestyle Instructions", plan.lifestyle || []],
    [
      "Safety Alerts",
      plan.safetyAlerts && plan.safetyAlerts.length ? plan.safetyAlerts : buildSafetyFallback(),
    ],
    [
      "Appointment Details",
      plan.appointmentDetails && plan.appointmentDetails.length
        ? plan.appointmentDetails
        : buildAppointmentFallback(),
    ],
    ["Reminder Plan", plan.reminderPlan || []],
    ["Care Coordination", plan.careCoordination || []],
    ["Coverage Guidance", plan.coverageGuidance || []],
  ];

  return sections
    .filter(([, items]) => items.length)
    .map(([title, items]) => `${title}\n${items.map((item) => `- ${item}`).join("\n")}`)
    .join("\n\n");
}

function refreshDocumentCenter() {
  documentCenterOutput.innerHTML = buildDocumentCenterMarkup();
}

function buildSafetyFallback() {
  const items = [];

  if (allergiesInput.value.trim()) {
    items.push(`Check every medicine against listed allergies: ${allergiesInput.value.trim()}.`);
  }

  if (foodAllergiesInput.value.trim()) {
    items.push(`Watch diet and medication instructions for food allergy triggers: ${foodAllergiesInput.value.trim()}.`);
  }

  if (breathingSymptomInput.value === "Moderate" || breathingSymptomInput.value === "Severe") {
    items.push("Breathing symptoms are active. Compare them closely with the warning signs section.");
  }

  if (oxygenLevelInput.value.trim()) {
    items.push(`Monitor oxygen level trend if symptoms worsen. Current entered value: ${oxygenLevelInput.value.trim()}.`);
  }

  if (temperatureInput.value.trim()) {
    items.push(`Watch for fever changes. Current entered temperature: ${temperatureInput.value.trim()}.`);
  }

  if (!items.length) {
    items.push("No specific safety alerts were generated. Continue following medicines, appointments, and warning signs closely.");
  }

  return items;
}

function buildNextActions(plan) {
  const actions = [];

  if (plan.reminderPlan && plan.reminderPlan.length) {
    actions.push(...plan.reminderPlan.slice(0, 2));
  }

  if (plan.followUps && plan.followUps.length) {
    actions.push(plan.followUps[0]);
  }

  if (!actions.length) {
    actions.push("Review the medicine schedule.");
    actions.push("Check your next appointment details.");
    actions.push("Watch for warning signs and call for help if symptoms worsen.");
  }

  return actions.slice(0, 3);
}

function buildUrgentBanner(plan) {
  if (plan.warningSigns && plan.warningSigns.length) {
    return `Urgent: ${plan.warningSigns[0]}`;
  }

  if (breathingSymptomInput.value === "Severe") {
    return "Urgent: Severe breathing symptoms were entered. Seek urgent medical attention if they are worsening.";
  }

  return "No urgent alert yet. Generate a care plan to see the highest-priority warning.";
}

function deriveRiskLevel(plan) {
  const warnings = (plan.warningSigns || []).join(" ").toLowerCase();
  const risks = (plan.riskStatus || []).join(" ").toLowerCase();

  if (
    warnings.includes("er") ||
    warnings.includes("emergency") ||
    warnings.includes("chest pain") ||
    warnings.includes("trouble breathing") ||
    warnings.includes("difficulty breathing") ||
    breathingSymptomInput.value === "Severe"
  ) {
    return { level: "urgent", label: "Urgent review" };
  }

  if (
    breathingSymptomInput.value === "Moderate" ||
    feverSymptomInput.value === "Moderate" ||
    painSymptomInput.value === "Moderate" ||
    risks.includes("closer follow-up") ||
    risks.includes("monitor")
  ) {
    return { level: "medium", label: "Medium risk" };
  }

  return { level: "low", label: "Stable plan" };
}

function buildInsuranceCardFallback() {
  if (!insuranceCardImageDataUrl) {
    return ["Upload an insurance card image if you want the assistant to extract visible plan details."];
  }

  return ["Insurance card uploaded. If extraction is limited, confirm member and support details manually."];
}

function buildLabFallback() {
  if (doctorSpecialtyInput.value.trim() === "Dentistry") {
    return ["No routine lab report is included for this dental visit. If infection symptoms worsen, the care team may order additional tests."];
  }

  if (!labReportImageDataUrl) {
    return ["Upload a lab report image to get a patient-friendly explanation of visible results."];
  }

  return ["Lab report uploaded. If any values seem unclear, confirm them with your clinician."];
}

function buildVitalsFallback() {
  const items = [];

  if (bloodPressureInput.value.trim()) items.push(`Blood pressure entered: ${bloodPressureInput.value.trim()}`);
  if (heartRateInput.value.trim()) items.push(`Heart rate entered: ${heartRateInput.value.trim()}`);
  if (oxygenLevelInput.value.trim()) items.push(`Oxygen level entered: ${oxygenLevelInput.value.trim()}`);
  if (temperatureInput.value.trim()) items.push(`Temperature entered: ${temperatureInput.value.trim()}`);

  if (!items.length) {
    return ["Enter vitals to get a basic review and watchouts."];
  }

  items.push("Compare these values with your discharge instructions and contact your care team if they worsen.");
  return items;
}

function buildXrayImageFallback() {
  if (doctorSpecialtyInput.value.trim() === "Dentistry") {
    return ["Dental X-ray image not uploaded. For this visit, bitewing or periapical dental imaging may be used to check for cavities, tooth-root infection, or deeper gum involvement."];
  }

  if (!xrayImageDataUrl) {
    return ["Upload an X-ray image to get an educational, non-diagnostic summary."];
  }

  return ["X-ray image uploaded. Final interpretation should still come from a radiologist or clinician."];
}

function buildXrayReportFallback() {
  if (doctorSpecialtyInput.value.trim() === "Dentistry") {
    return ["Dental X-ray report not uploaded. For this visit, imaging may still be useful to confirm cavities, tooth infection, or deeper gum problems."];
  }

  if (!xrayReportImageDataUrl) {
    return ["Upload an X-ray report to get a simple explanation of written radiology findings."];
  }

  return ["X-ray report uploaded. Confirm urgent findings directly with your clinician if any are noted."];
}

function answerMarkup(answer, evidence) {
  const answerText = cleanMarkdownText(answer) || "No answer available yet.";
  const evidenceMarkup = evidence && evidence.length
    ? `<div class="answer-evidence"><strong>Based on:</strong>${bulletList(evidence)}</div>`
    : "";
  return `<p>${escapeHtml(answerText)}</p>${evidenceMarkup}`;
}

function resetOutputs(message = "Add discharge instructions and generate a care plan.") {
  summaryOutput.innerHTML = `<p class="muted">${escapeHtml(message)}</p>`;
  medicationsOutput.innerHTML =
    '<p class="muted">Medication timing will appear here.</p>';
  followupOutput.innerHTML =
    '<p class="muted">Follow-up tasks will appear here.</p>';
  warningsOutput.innerHTML =
    '<p class="muted">Red-flag symptoms will appear here.</p>';
  lifestyleOutput.innerHTML =
    '<p class="muted">Diet and activity instructions will appear here.</p>';
  caregiverOutput.innerHTML =
    '<p class="muted">A caregiver handoff note will appear here.</p>';
  prescriptionOutput.innerHTML =
    '<p class="muted">Prescription extraction will appear here.</p>';
  safetyOutput.innerHTML =
    '<p class="muted">Medication and risk alerts will appear here.</p>';
  missingOutput.innerHTML =
    '<p class="muted">Missing or unclear details will appear here.</p>';
  timelineOutput.innerHTML =
    '<p class="muted">A day-by-day timeline will appear here.</p>';
  evidenceOutput.innerHTML =
    '<p class="muted">Supporting reasons from the documents will appear here.</p>';
  insuranceOutput.innerHTML =
    '<p class="muted">Insurance plan details will appear here.</p>';
  coverageOutput.innerHTML =
    '<p class="muted">Likely coverage guidance will appear here.</p>';
  costOutput.innerHTML =
    '<p class="muted">Cost-related risks and next steps will appear here.</p>';
  remindersOutput.innerHTML =
    '<p class="muted">Medication and follow-up reminders will appear here.</p>';
  coordinationOutput.innerHTML =
    '<p class="muted">Patient, caregiver, doctor, and pharmacy coordination steps will appear here.</p>';
  providerOutput.innerHTML =
    '<p class="muted">Doctor, clinic, prescribed location, and pharmacy details will appear here.</p>';
  emergencyOutput.innerHTML =
    '<p class="muted">Emergency contact and escalation instructions will appear here.</p>';
  appointmentOutput.innerHTML =
    '<p class="muted">Follow-up appointment details will appear here.</p>';
  checklistOutput.innerHTML =
    '<p class="muted">A daily recovery checklist will appear here.</p>';
  insuranceCardOutput.innerHTML =
    '<p class="muted">Insurance card extraction and notes will appear here.</p>';
  labOutput.innerHTML =
    '<p class="muted">Lab report findings in simple language will appear here.</p>';
  vitalsOutput.innerHTML =
    '<p class="muted">Vitals interpretation and watchouts will appear here.</p>';
  dashboardSummaryOutput.innerHTML =
    '<p class="muted">Generate a plan to see a quick patient summary.</p>';
  careTeamOutput.innerHTML =
    '<p class="muted">Doctor, pharmacy, insurance, and emergency support links will appear here.</p>';
  progressOutput.innerHTML =
    '<p class="muted">Generate a plan to see the recovery timeline at a glance.</p>';
  readmissionScoreOutput.innerHTML =
    '<p class="muted">Generate a plan to see the readmission prevention score.</p>';
  careGapsOutput.innerHTML =
    '<p class="muted">Missing follow-up, refill, support, and symptom gaps will appear here.</p>';
  readmissionActionsOutput.innerHTML =
    '<p class="muted">Recommended next actions to reduce avoidable readmission will appear here.</p>';
  riskOutput.innerHTML =
    '<p class="muted">Risk status will appear here.</p>';
  nextActionsOutput.innerHTML =
    '<p class="muted">Generate a plan to see the most important next steps.</p>';
  symptomOutput.innerHTML =
    '<p class="muted">Symptom analysis will appear here.</p>';
  doctorQuestionsOutput.innerHTML =
    '<p class="muted">Suggested questions for the next visit will appear here.</p>';
  doctorPrepOutput.innerHTML =
    '<p class="muted">Suggested questions and prep points for the next visit will appear here.</p>';
  xrayImageOutput.innerHTML =
    '<p class="muted">Educational X-ray image insights will appear here.</p>';
  xrayReportOutput.innerHTML =
    '<p class="muted">X-ray report findings in simple language will appear here.</p>';
  refreshDocumentCenter();
  urgentBanner.textContent =
    "No urgent alert yet. Generate a care plan to see the highest-priority warning.";
  setStatusPill("", "Waiting for input");
  qaAnswer.innerHTML =
    '<p class="muted">Ask a question after loading discharge text or a prescription image.</p>';
  qaStatus.textContent = "No question asked";
}

function setBusyState(isBusy) {
  buttons.analyzeTop.disabled = isBusy;
  buttons.analyzeMain.disabled = isBusy;
  buttons.loadSample.disabled = isBusy;
  buttons.runDemo.disabled = isBusy;
  buttons.loadExample.disabled = isBusy;
  buttons.clearAll.disabled = isBusy;
  buttons.askQuestion.disabled = isBusy;
}

function renderCarePlan(plan) {
  currentCarePlan = plan;
  const clinicLocation = clinicLocationInput.value.trim();
  const pharmacyLocation = pharmacyLocationInput.value.trim();
  const doctorPhone = doctorPhoneInput.value.trim();
  const pharmacyPhone = pharmacyPhoneInput.value.trim();
  const emergencyPhone = emergencyPhoneInput.value.trim();
  summaryOutput.innerHTML = paragraphList(plan.summary || []);
  medicationsOutput.innerHTML = bulletList(plan.medications || []);
  followupOutput.innerHTML = bulletList(plan.followUps || []);
  warningsOutput.innerHTML = bulletList(plan.warningSigns || []);
  lifestyleOutput.innerHTML = bulletList(plan.lifestyle || []);
  caregiverOutput.innerHTML = caregiverMarkup(plan.caregiverNote);
  prescriptionOutput.innerHTML = bulletList(plan.prescriptionInsights || []);
  safetyOutput.innerHTML = bulletList(
    plan.safetyAlerts && plan.safetyAlerts.length
      ? plan.safetyAlerts
      : buildSafetyFallback()
  );
  missingOutput.innerHTML = bulletList(plan.missingInfo || []);
  timelineOutput.innerHTML = bulletList(plan.timeline || []);
  evidenceOutput.innerHTML = bulletList(plan.evidence || []);
  insuranceOutput.innerHTML = bulletList(plan.insuranceSummary || []);
  coverageOutput.innerHTML =
    bulletList(plan.coverageGuidance || []) +
    phoneLinkMarkup("Call insurance", insurancePhoneInput.value.trim()) +
    emailLinkMarkup("Email insurance", insuranceEmailInput.value.trim()) +
    mapLinkMarkup("Open insurance address in Google Maps", insuranceAddressInput.value.trim());
  costOutput.innerHTML = bulletList(plan.costWatchouts || []);
  remindersOutput.innerHTML = bulletList(plan.reminderPlan || []);
  coordinationOutput.innerHTML = bulletList(plan.careCoordination || []);
  providerOutput.innerHTML =
    bulletList(plan.providerDetails || []) +
    mapLinkMarkup("Open clinic in Google Maps", clinicLocation) +
    mapLinkMarkup("Open pharmacy in Google Maps", pharmacyLocation) +
    phoneLinkMarkup("Call doctor", doctorPhone) +
    phoneLinkMarkup("Call pharmacy", pharmacyPhone);
  emergencyOutput.innerHTML = bulletList(
    plan.emergencyContactPlan && plan.emergencyContactPlan.length
      ? plan.emergencyContactPlan
      : buildEmergencyFallback()
  ) + phoneLinkMarkup("Call emergency contact", emergencyPhone);
  appointmentOutput.innerHTML = bulletList(
    plan.appointmentDetails && plan.appointmentDetails.length
      ? plan.appointmentDetails
      : buildAppointmentFallback()
  );
  checklistOutput.innerHTML = bulletList(
    plan.dailyChecklist && plan.dailyChecklist.length
      ? plan.dailyChecklist
      : buildChecklistFallback()
  );
  labOutput.innerHTML = bulletList(
    plan.labReportInsights && plan.labReportInsights.length
      ? plan.labReportInsights
      : buildLabFallback()
  );
  vitalsOutput.innerHTML = bulletList(
    plan.vitalsReview && plan.vitalsReview.length
      ? plan.vitalsReview
      : buildVitalsFallback()
  );
  const readmission = buildReadmissionInsights(plan);
  dashboardSummaryOutput.innerHTML = buildDashboardSummary(plan);
  careTeamOutput.innerHTML = buildCareTeamMarkup();
  progressOutput.innerHTML = buildProgressMarkup(plan);
  readmissionScoreOutput.innerHTML = `<p><strong>${escapeHtml(
    `${readmission.level} risk`
  )}</strong></p><p>${escapeHtml(
    `Readmission prevention score: ${readmission.score}/100`
  )}</p><p>${escapeHtml(readmission.explanation)}</p>${bulletList(readmission.reasons)}`;
  careGapsOutput.innerHTML = bulletList(readmission.careGaps);
  readmissionActionsOutput.innerHTML = bulletList(readmission.actions);
  riskOutput.innerHTML = bulletList(
    plan.riskStatus && plan.riskStatus.length ? plan.riskStatus : buildRiskFallback()
  );
  nextActionsOutput.innerHTML = bulletList(buildNextActions(plan));
  symptomOutput.innerHTML = bulletList(
    plan.symptomReview && plan.symptomReview.length
      ? plan.symptomReview
      : buildSymptomFallback()
  );
  doctorQuestionsOutput.innerHTML = bulletList(buildDoctorQuestions(plan));
  doctorPrepOutput.innerHTML = bulletList(
    plan.doctorVisitPrep && plan.doctorVisitPrep.length
      ? plan.doctorVisitPrep
      : buildDoctorPrepFallback()
  );
  insuranceCardOutput.innerHTML = bulletList(
    plan.insuranceCardInsights && plan.insuranceCardInsights.length
      ? plan.insuranceCardInsights
      : buildInsuranceCardFallback()
  );
  xrayImageOutput.innerHTML = bulletList(
    plan.xrayImageInsights && plan.xrayImageInsights.length
      ? plan.xrayImageInsights
      : buildXrayImageFallback()
  );
  xrayReportOutput.innerHTML = bulletList(
    plan.xrayReportSummary && plan.xrayReportSummary.length
      ? plan.xrayReportSummary
      : buildXrayReportFallback()
  );
  refreshDocumentCenter();
  urgentBanner.textContent = buildUrgentBanner(plan);
  const riskLevel = deriveRiskLevel(plan);
  setStatusPill(riskLevel.level, riskLevel.label);
}

function getPatientContext() {
  return {
    patientName: patientNameInput.value.trim(),
    language: languageSelect.value,
    patientAge: patientAgeInput.value.trim(),
    conditions: conditionsInput.value.trim(),
    allergies: allergiesInput.value.trim(),
    hasFoodAllergy: hasFoodAllergyInput.value,
    foodAllergies: foodAllergiesInput.value.trim(),
    patientPhone: patientPhoneInput.value.trim(),
    patientEmail: patientEmailInput.value.trim(),
    caregiverPhone: caregiverPhoneInput.value.trim(),
    caregiverEmail: caregiverEmailInput.value.trim(),
    preferredContact: preferredContactInput.value,
    emergencyName: emergencyNameInput.value.trim(),
    emergencyRelation: emergencyRelationInput.value.trim(),
    emergencyPhone: emergencyPhoneInput.value.trim(),
    insurancePlan: insurancePlanInput.value.trim(),
    insuranceMemberId: insuranceMemberIdInput.value.trim(),
    insuranceCopay: insuranceCopayInput.value.trim(),
    insuranceDeductible: insuranceDeductibleInput.value.trim(),
    insurancePhone: insurancePhoneInput.value.trim(),
    insuranceEmail: insuranceEmailInput.value.trim(),
    insuranceAddress: insuranceAddressInput.value.trim(),
    insuranceCardImage: insuranceCardImageDataUrl,
    doctorName: doctorNameInput.value.trim(),
    doctorSpecialty: doctorSpecialtyInput.value.trim(),
    doctorPhone: doctorPhoneInput.value.trim(),
    clinicLocation: clinicLocationInput.value.trim(),
    prescribedLocation: prescribedLocationInput.value.trim(),
    pharmacyName: pharmacyNameInput.value.trim(),
    pharmacyPhone: pharmacyPhoneInput.value.trim(),
    pharmacyLocation: pharmacyLocationInput.value.trim(),
    appointmentDate: appointmentDateInput.value,
    appointmentTime: appointmentTimeInput.value,
    appointmentDepartment: appointmentDepartmentInput.value.trim(),
    appointmentType: appointmentTypeInput.value,
    bloodPressure: bloodPressureInput.value.trim(),
    heartRate: heartRateInput.value.trim(),
    oxygenLevel: oxygenLevelInput.value.trim(),
    temperature: temperatureInput.value.trim(),
    feverSymptom: feverSymptomInput.value,
    painSymptom: painSymptomInput.value,
    coughSymptom: coughSymptomInput.value,
    breathingSymptom: breathingSymptomInput.value,
    fatigueSymptom: fatigueSymptomInput.value,
    labReportImage: labReportImageDataUrl,
    xrayImage: xrayImageDataUrl,
    xrayReportImage: xrayReportImageDataUrl,
    dischargeText: dischargeText.value.trim(),
    prescriptionImage: prescriptionImageDataUrl,
  };
}

async function analyzeDischargePlan() {
  const context = getPatientContext();

  if (!hasAnySourceDocument(context)) {
    setStatusPill("", "Need text or image");
    apiStatus.textContent = "Add a medical document to begin";
    resetOutputs("Add discharge text or upload a supported medical document to generate a care plan.");
    return;
  }

  setStatusPill("", "Generating with OpenAI");
  apiStatus.textContent = "Contacting server";
  setBusyState(true);

  try {
    const response = await fetch("/api/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context),
    });

    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Unable to generate care plan.");
    }

    renderCarePlan(payload.carePlan);
    apiStatus.textContent = `Model: ${payload.model}`;
    showToast("Care plan generated", "success");
  } catch (error) {
    setStatusPill("urgent", "Generation failed");
    apiStatus.textContent = "Check API key or server logs";
    resetOutputs(error.message || "Something went wrong while generating the care plan.");
    showToast("Generation failed", "warning");
  } finally {
    setBusyState(false);
  }
}

async function askPatientQuestion() {
  const context = getPatientContext();
  const question = patientQuestionInput.value.trim();

  if (!question) {
    qaStatus.textContent = "Need a question";
    qaAnswer.innerHTML = '<p class="muted">Type a question for the assistant.</p>';
    return;
  }

  if (!hasAnySourceDocument(context)) {
    qaStatus.textContent = "Need source documents";
    qaAnswer.innerHTML =
      '<p class="muted">Add discharge text or upload a supported medical document before asking a question.</p>';
    return;
  }

  qaStatus.textContent = "Asking OpenAI";
  buttons.askQuestion.disabled = true;

  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...context,
        question,
      }),
    });
    const payload = await response.json();

    if (!response.ok) {
      throw new Error(payload.error || "Unable to answer the question.");
    }

    qaStatus.textContent = "Answer ready";
    qaAnswer.innerHTML = answerMarkup(payload.answer.answer, payload.answer.evidence);
  } catch (error) {
    qaStatus.textContent = "Question failed";
    qaAnswer.innerHTML = `<p class="muted">${escapeHtml(
      error.message || "Something went wrong while answering the question."
    )}</p>`;
  } finally {
    buttons.askQuestion.disabled = false;
  }
}

async function runBestDemo() {
  loadSample("pneumonia");
  apiStatus.textContent = "Best demo loaded. Generating care plan";
  await analyzeDischargePlan();
}

function loadSample(sampleKey = sampleCaseSelect.value || "pneumonia") {
  const sample = sampleCases[sampleKey] || sampleCases.pneumonia;
  const insuranceDefaults = insuranceSupportDefaults[sample.insurancePlan] || {};

  sampleCaseSelect.value = sampleKey;
  patientNameInput.value = sample.patientName;
  languageSelect.value = sample.language;
  patientAgeInput.value = sample.patientAge;
  conditionsInput.value = sample.conditions;
  allergiesInput.value = sample.allergies;
  hasFoodAllergyInput.value = sample.hasFoodAllergy || "";
  foodAllergiesInput.value = sample.foodAllergies || "";
  patientPhoneInput.value = sample.patientPhone;
  patientEmailInput.value = sample.patientEmail;
  caregiverPhoneInput.value = sample.caregiverPhone;
  caregiverEmailInput.value = sample.caregiverEmail;
  preferredContactInput.value = sample.preferredContact;
  emergencyNameInput.value = sample.emergencyName;
  emergencyRelationInput.value = sample.emergencyRelation;
  emergencyPhoneInput.value = sample.emergencyPhone;
  insurancePlanInput.value = sample.insurancePlan;
  insuranceMemberIdInput.value = sample.insuranceMemberId;
  insuranceCopayInput.value = sample.insuranceCopay;
  insuranceDeductibleInput.value = sample.insuranceDeductible;
  insurancePhoneInput.value = sample.insurancePhone || insuranceDefaults.phone || "";
  insuranceEmailInput.value = sample.insuranceEmail || insuranceDefaults.email || "";
  insuranceAddressInput.value = sample.insuranceAddress || insuranceDefaults.address || "";
  insuranceImageStatus.textContent = "No insurance card image selected";
  prescriptionImageName = "";
  insuranceCardImageName = "";
  labReportImageName = "";
  xrayImageName = "";
  xrayReportImageName = "";
  doctorNameInput.value = sample.doctorName;
  doctorSpecialtyInput.value = sample.doctorSpecialty;
  doctorPhoneInput.value = sample.doctorPhone;
  clinicLocationInput.value = sample.clinicLocation;
  prescribedLocationInput.value = sample.prescribedLocation;
  pharmacyNameInput.value = sample.pharmacyName;
  pharmacyPhoneInput.value = sample.pharmacyPhone;
  pharmacyLocationInput.value = sample.pharmacyLocation;
  appointmentDateInput.value = sample.appointmentDate;
  appointmentTimeInput.value = sample.appointmentTime;
  appointmentDepartmentInput.value = sample.appointmentDepartment;
  appointmentTypeInput.value = sample.appointmentType;
  bloodPressureInput.value = sample.bloodPressure;
  heartRateInput.value = sample.heartRate;
  oxygenLevelInput.value = sample.oxygenLevel;
  temperatureInput.value = sample.temperature;
  feverSymptomInput.value = sample.feverSymptom;
  painSymptomInput.value = sample.painSymptom;
  coughSymptomInput.value = sample.coughSymptom;
  breathingSymptomInput.value = sample.breathingSymptom;
  fatigueSymptomInput.value = sample.fatigueSymptom;
  labImageStatus.textContent = "No lab report image selected";
  xrayImageStatus.textContent = "No X-ray image selected";
  xrayReportStatus.textContent = "No X-ray report selected";
  dischargeText.value = sample.dischargeText;
  prescriptionImageInput.value = "";
  prescriptionImageDataUrl = "";
  insuranceCardImageInput.value = "";
  insuranceCardImageDataUrl = "";
  labReportImageInput.value = "";
  labReportImageDataUrl = "";
  xrayImageInput.value = "";
  xrayImageDataUrl = "";
  xrayReportImageInput.value = "";
  xrayReportImageDataUrl = "";
  imageStatus.textContent = "No prescription image selected";
  apiStatus.textContent = "Sample loaded";
  populateQuestionTemplates();
  resetOutputs("Sample loaded. Generate the care plan to call the OpenAI API.");
  showToast(`${sampleCaseSelect.options[sampleCaseSelect.selectedIndex].text} loaded`, "success");
}

function clearAll() {
  patientNameInput.value = "";
  languageSelect.value = "English";
  patientAgeInput.value = "";
  conditionsInput.value = "";
  allergiesInput.value = "";
  hasFoodAllergyInput.value = "";
  foodAllergiesInput.value = "";
  patientPhoneInput.value = "";
  patientEmailInput.value = "";
  caregiverPhoneInput.value = "";
  caregiverEmailInput.value = "";
  preferredContactInput.value = "";
  emergencyNameInput.value = "";
  emergencyRelationInput.value = "";
  emergencyPhoneInput.value = "";
  insurancePlanInput.value = "";
  insuranceMemberIdInput.value = "";
  insuranceCopayInput.value = "";
  insuranceDeductibleInput.value = "";
  insurancePhoneInput.value = "";
  insuranceEmailInput.value = "";
  insuranceAddressInput.value = "";
  insuranceCardImageInput.value = "";
  insuranceCardImageDataUrl = "";
  insuranceCardImageName = "";
  insuranceImageStatus.textContent = "No insurance card image selected";
  doctorNameInput.value = "";
  doctorSpecialtyInput.value = "";
  doctorPhoneInput.value = "";
  clinicLocationInput.value = "";
  prescribedLocationInput.value = "";
  pharmacyNameInput.value = "";
  pharmacyPhoneInput.value = "";
  pharmacyLocationInput.value = "";
  appointmentDateInput.value = "";
  appointmentTimeInput.value = "";
  appointmentDepartmentInput.value = "";
  appointmentTypeInput.value = "";
  bloodPressureInput.value = "";
  heartRateInput.value = "";
  oxygenLevelInput.value = "";
  temperatureInput.value = "";
  feverSymptomInput.value = "";
  painSymptomInput.value = "";
  coughSymptomInput.value = "";
  breathingSymptomInput.value = "";
  fatigueSymptomInput.value = "";
  labReportImageInput.value = "";
  labReportImageDataUrl = "";
  labReportImageName = "";
  labImageStatus.textContent = "No lab report image selected";
  xrayImageInput.value = "";
  xrayImageDataUrl = "";
  xrayImageName = "";
  xrayImageStatus.textContent = "No X-ray image selected";
  xrayReportImageInput.value = "";
  xrayReportImageDataUrl = "";
  xrayReportImageName = "";
  xrayReportStatus.textContent = "No X-ray report selected";
  dischargeText.value = "";
  prescriptionImageInput.value = "";
  prescriptionImageDataUrl = "";
  prescriptionImageName = "";
  questionTemplateSelect.value = "";
  patientQuestionInput.value = "";
  currentCarePlan = null;
  apiStatus.textContent = "Server not called yet";
  imageStatus.textContent = "No prescription image selected";
  populateQuestionTemplates();
  resetOutputs();
}

function applyQuestionTemplate() {
  const selectedQuestion = questionTemplateSelect.value;
  if (!selectedQuestion) {
    return;
  }

  patientQuestionInput.value = selectedQuestion;
  qaStatus.textContent = "Question template ready";
  showToast("Suggested question added", "success");
}

function printCarePlan() {
  window.print();
}

async function copySummary() {
  const summaryText = buildCarePlanText(currentCarePlan);

  if (!summaryText) {
    apiStatus.textContent = "Generate a plan before copying the summary";
    return;
  }

  try {
    await navigator.clipboard.writeText(summaryText);
    apiStatus.textContent = "Summary copied";
    showToast("Summary copied", "success");
  } catch {
    apiStatus.textContent = "Copy failed";
    showToast("Copy failed", "warning");
  }
}

function downloadSummary() {
  const summaryText = buildCarePlanText(currentCarePlan);

  if (!summaryText) {
    apiStatus.textContent = "Generate a plan before exporting PDF";
    return;
  }

  const exportWindow = window.open("", "_blank", "width=960,height=760");

  if (!exportWindow) {
    apiStatus.textContent = "Allow pop-ups to export PDF";
    return;
  }

  const title = `${patientNameInput.value.trim() || "Patient"} Care Plan`;
  const safeTitle = escapeHtml(title);
  const safeBody = escapeHtml(summaryText).replace(/\n/g, "<br>");

  exportWindow.document.write(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${safeTitle}</title>
      <style>
        body { font-family: Arial, sans-serif; color: #1d2621; margin: 32px; line-height: 1.5; }
        h1 { margin: 0 0 8px; font-size: 28px; }
        .note { margin-bottom: 20px; color: #56625a; }
        .sheet { border: 1px solid #d9dfdb; border-radius: 16px; padding: 24px; white-space: normal; }
      </style>
    </head>
    <body>
      <h1>${safeTitle}</h1>
      <p class="note">Use your browser's Save as PDF option to keep a copy of this care plan.</p>
      <div class="sheet">${safeBody}</div>
    </body>
  </html>`);
  exportWindow.document.close();
  exportWindow.focus();
  exportWindow.print();
  apiStatus.textContent = "PDF export opened";
  showToast("PDF export opened", "success");
}

function buildSpeechText() {
  if (!currentCarePlan) {
    return "";
  }

  const sections = [
    ["Summary", currentCarePlan.summary || []],
    ["Medicine schedule", currentCarePlan.medications || []],
    ["Follow-up checklist", currentCarePlan.followUps || []],
    ["Warning signs", currentCarePlan.warningSigns || []],
    ["Lifestyle instructions", currentCarePlan.lifestyle || []],
    ["Caregiver note", currentCarePlan.caregiverNote ? [currentCarePlan.caregiverNote] : []],
    ["Safety alerts", currentCarePlan.safetyAlerts || []],
    ["Coverage guidance", currentCarePlan.coverageGuidance || []],
    ["Reminder plan", currentCarePlan.reminderPlan || []],
  ];

  return sections
    .filter(([, items]) => items.length)
    .map(([title, items]) => `${title}. ${items.join(". ")}`)
    .join(". ");
}

function speakCarePlan() {
  const speechText = buildSpeechText();

  if (!speechText) {
    apiStatus.textContent = "Generate a plan before using Read Aloud";
    return;
  }

  if (!("speechSynthesis" in window)) {
    apiStatus.textContent = "Voice playback is not supported in this browser";
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(speechText);
  utterance.rate = 0.95;
  utterance.pitch = 1;
  utterance.lang =
    languageSelect.value === "Spanish"
      ? "es-ES"
      : languageSelect.value === "Hindi"
        ? "hi-IN"
        : "en-US";
  utterance.onstart = () => {
    apiStatus.textContent = "Reading the care plan aloud";
    showToast("Reading plan aloud", "info");
  };
  utterance.onend = () => {
    apiStatus.textContent = "Voice playback finished";
  };
  utterance.onerror = () => {
    apiStatus.textContent = "Voice playback failed";
  };

  window.speechSynthesis.speak(utterance);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Could not read the selected image."));
    reader.readAsDataURL(file);
  });
}

async function handlePrescriptionImageChange(event) {
  const [file] = event.target.files || [];

  if (!file) {
    prescriptionImageDataUrl = "";
    prescriptionImageName = "";
    imageStatus.textContent = "No prescription image selected";
    refreshDocumentCenter();
    return;
  }

  imageStatus.textContent = `Preparing ${file.name}`;

  try {
    prescriptionImageDataUrl = await readFileAsDataUrl(file);
    prescriptionImageName = file.name;
    imageStatus.textContent = `Prescription image ready: ${file.name}`;
    refreshDocumentCenter();
    showToast("Prescription uploaded", "success");
  } catch (error) {
    prescriptionImageDataUrl = "";
    prescriptionImageName = "";
    prescriptionImageInput.value = "";
    imageStatus.textContent = error.message;
  }
}

async function handleInsuranceCardImageChange(event) {
  const [file] = event.target.files || [];

  if (!file) {
    insuranceCardImageDataUrl = "";
    insuranceCardImageName = "";
    insuranceImageStatus.textContent = "No insurance card image selected";
    refreshDocumentCenter();
    return;
  }

  insuranceImageStatus.textContent = `Preparing ${file.name}`;

  try {
    insuranceCardImageDataUrl = await readFileAsDataUrl(file);
    insuranceCardImageName = file.name;
    insuranceImageStatus.textContent = `Insurance card ready: ${file.name}`;
    refreshDocumentCenter();
    showToast("Insurance card uploaded", "success");
  } catch (error) {
    insuranceCardImageDataUrl = "";
    insuranceCardImageName = "";
    insuranceCardImageInput.value = "";
    insuranceImageStatus.textContent = error.message;
  }
}

async function handleLabReportImageChange(event) {
  const [file] = event.target.files || [];

  if (!file) {
    labReportImageDataUrl = "";
    labReportImageName = "";
    labImageStatus.textContent = "No lab report image selected";
    refreshDocumentCenter();
    return;
  }

  labImageStatus.textContent = `Preparing ${file.name}`;

  try {
    labReportImageDataUrl = await readFileAsDataUrl(file);
    labReportImageName = file.name;
    labImageStatus.textContent = `Lab report ready: ${file.name}`;
    refreshDocumentCenter();
    showToast("Lab report uploaded", "success");
  } catch (error) {
    labReportImageDataUrl = "";
    labReportImageName = "";
    labReportImageInput.value = "";
    labImageStatus.textContent = error.message;
  }
}

async function handleXrayImageChange(event) {
  const [file] = event.target.files || [];

  if (!file) {
    xrayImageDataUrl = "";
    xrayImageName = "";
    xrayImageStatus.textContent = "No X-ray image selected";
    refreshDocumentCenter();
    return;
  }

  xrayImageStatus.textContent = `Preparing ${file.name}`;

  try {
    xrayImageDataUrl = await readFileAsDataUrl(file);
    xrayImageName = file.name;
    xrayImageStatus.textContent = `X-ray image ready: ${file.name}`;
    refreshDocumentCenter();
    showToast("X-ray image uploaded", "success");
  } catch (error) {
    xrayImageDataUrl = "";
    xrayImageName = "";
    xrayImageInput.value = "";
    xrayImageStatus.textContent = error.message;
  }
}

async function handleXrayReportImageChange(event) {
  const [file] = event.target.files || [];

  if (!file) {
    xrayReportImageDataUrl = "";
    xrayReportImageName = "";
    xrayReportStatus.textContent = "No X-ray report selected";
    refreshDocumentCenter();
    return;
  }

  xrayReportStatus.textContent = `Preparing ${file.name}`;

  try {
    xrayReportImageDataUrl = await readFileAsDataUrl(file);
    xrayReportImageName = file.name;
    xrayReportStatus.textContent = `X-ray report ready: ${file.name}`;
    refreshDocumentCenter();
    showToast("X-ray report uploaded", "success");
  } catch (error) {
    xrayReportImageDataUrl = "";
    xrayReportImageName = "";
    xrayReportImageInput.value = "";
    xrayReportStatus.textContent = error.message;
  }
}

buttons.loadSample.addEventListener("click", loadSample);
buttons.runDemo.addEventListener("click", runBestDemo);
buttons.loadExample.addEventListener("click", loadSample);
sampleCaseSelect.addEventListener("change", () => loadSample(sampleCaseSelect.value));
buttons.analyzeTop.addEventListener("click", analyzeDischargePlan);
buttons.analyzeMain.addEventListener("click", analyzeDischargePlan);
buttons.clearAll.addEventListener("click", clearAll);
buttons.askQuestion.addEventListener("click", askPatientQuestion);
printPlanButton.addEventListener("click", printCarePlan);
printPlanTopButton.addEventListener("click", printCarePlan);
speakPlanButton.addEventListener("click", speakCarePlan);
speakPlanTopButton.addEventListener("click", speakCarePlan);
copySummaryButton.addEventListener("click", copySummary);
copySummaryTopButton.addEventListener("click", copySummary);
downloadSummaryButton.addEventListener("click", downloadSummary);
downloadSummaryTopButton.addEventListener("click", downloadSummary);
prescriptionImageInput.addEventListener("change", handlePrescriptionImageChange);
insuranceCardImageInput.addEventListener("change", handleInsuranceCardImageChange);
labReportImageInput.addEventListener("change", handleLabReportImageChange);
xrayImageInput.addEventListener("change", handleXrayImageChange);
xrayReportImageInput.addEventListener("change", handleXrayReportImageChange);
dischargeText.addEventListener("input", refreshDocumentCenter);
questionTemplateSelect.addEventListener("change", applyQuestionTemplate);
doctorSpecialtyInput.addEventListener("input", populateQuestionTemplates);

clearAll();
