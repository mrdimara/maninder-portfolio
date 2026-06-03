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
    title:
      "Energy Efficient Operation of Six-Phase IM Drive for Indirect Rotor Field Oriented Control",
    status: "Submitted",
    statusColor: "var(--amber)",
    authors: "Maninder Singh, Aditya Krishna · Mentor: Prof. Sukanta Das",
    note: "Six-phase induction motor · IRFOC · Loss Model Controller · TMS320F28379D",
  },
];

export const competitions = [
  {
    result: "6th among 22 IITs",
    event: "Inter-IIT Tech Meet 14.0 — ISRO VLSI Challenge",
    detail: "3rd-order CT ΔΣ ADC · ~19.7 ENOB · OSR 128 · 16-level quantizer",
  },
  {
    result: "12th Engineering Design · 24th Overall",
    event: "Formula Bharat 2025",
    detail: "Mechismu Racing Electric · HV safety & BMS lead",
  },
];
