export interface Publication {
  id: number;
  venue: string;
  title: string;
  status: string;
  statusColor: string;
  authors?: string;
  note?: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    venue: "IEEE PEDES 2026",
    title: "Energy Efficient Operation of Six-Phase Induction Motor Drive with Indirect Rotor Field-Oriented Control",
    status: "Submitted",
    statusColor: "var(--amber)",
    authors: "Maninder Singh, Aditya Krishna · Mentor: Prof. Sukanta Das",
    note: "Dual Clarke/Park transforms, SVPWM, flux optimisation, loss model control, real-time C2000 DSP implementation (10–20 kHz loop).",
  },
  {
    id: 2,
    venue: "IIT Bombay EMPES Lab",
    title: "High-Fidelity Simulation and Parasitic Extraction for IGBT Gate-Drive Circuits in TO-247 Packages",
    status: "In Progress",
    statusColor: "var(--blue)",
    authors: "Maninder Singh · Mentor: Prof. Pavan Hari (May–Jul 2026)",
    note: "Ansys Q3D Extractor, Ansys Twin Builder, PCB trace & lead-frame parasitic modelling, switching validation.",
  },
];

export const competitions = [
  {
    result: "6th among 22 IITs",
    event: "Inter-IIT Tech Meet 14.0 — ISRO VLSI Challenge",
    detail: "3rd-order CT ΔΣ ADC · ENOB 16.21 · SNR 98.4 dB · Core ~1.02 mm² · OSR 128 · 16-level quantizer",
  },
  {
    result: "12th Engineering Design · 24th Overall",
    event: "Formula Bharat 2025",
    detail: "Mechismu Racing Electric · LV/HV safety, BMS, charging, CAN communication, safety compliance (TSAL/BSPD/HVIL)",
  },
];
