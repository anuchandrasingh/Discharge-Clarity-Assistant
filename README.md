# Discharge Clarity Assistant

Discharge Clarity Assistant is a hackathon-ready MVP for healthcare AI. It converts dense hospital discharge instructions into a simple, patient-friendly care plan using the OpenAI Responses API.

## What it does

- Summarizes discharge information in plain language
- Reads prescription images and extracts medicine details when legible
- Extracts medication instructions into a readable schedule
- Highlights follow-up tasks
- Flags warning signs that should prompt medical attention
- Creates a caregiver handoff note
- Surfaces safety alerts, missing details, and a recovery timeline
- Answers patient questions from the uploaded documents
- Reads the care plan aloud for accessibility and demo polish

## Why this works for a hackathon

- Clear healthcare impact
- Easy demo with pasted discharge text
- Patient-centered use of AI
- Real-world problem with a simple story for judges

## Run locally

1. Copy `.env.example` to `.env`.
2. Add your `OPENAI_API_KEY`.
3. Start the app:

```bash
npm start
```

4. Open `http://127.0.0.1:3000`.

## Suggested next upgrades

- Translation and text-to-speech
- SMS reminder flows
- EHR or FHIR integration for hospital pilots
- Download or print care plan

## Demo Flow

1. Load the sample case.
2. Point out patient profile, prescription upload, and insurance fields.
3. Generate the care plan.
4. Show the safety alerts, timeline, and coverage guidance.
5. Ask a patient question.
6. Click `Read Aloud` to demonstrate accessibility.
7. Click `Print Plan` to show take-home output.

## Short Pitch

Discharge Clarity Assistant helps patients understand what to do after leaving the hospital. It reads discharge notes, prescriptions, and insurance details, then creates a clear recovery plan with safety alerts, follow-up guidance, coverage watchouts, and patient-friendly answers.
