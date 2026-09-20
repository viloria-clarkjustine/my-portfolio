export const projectsData = [
  {
    title: "ExaLyze",
    tagline: "Mobile Smart Application for Exam Evaluation and Item Analysis",
    category: "Capstone",
    period: "2024 – 2025",
    stack: ["Flutter", "Supabase", "YOLOv11", "Roboflow"],
    highlights: [
      "Co-developed a YOLOv11 optical mark recognition (OMR) detection model achieving 97.6% mAP@50, validated through testing with 10 students and 6 professors.",
      "Built and stabilized the PDF export pipeline for answer sheets and reports, fixing QR alignment and layout issues to produce reliable print-ready output.",
      "Identified and fixed a student primary-key schema issue that was wasting database storage and risking key collisions.",
      "Redesigned the Profile & Settings experience and streamlined the sign-up/subject-selection flow to improve activation.",
    ],
    metrics: [
      { label: "OMR Detection Accuracy", value: "97.6% mAP@50" },
      { label: "User Validation Group", value: "10 Students & 6 Professors" },
      { label: "Output Pipeline", value: "Print-Ready QR & PDF Reports" },
    ],
  },
];
