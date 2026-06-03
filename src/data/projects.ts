export type ProjectStatus = "In Progress" | "Active" | "Learning" | "Completed";

export interface Project {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  statusColor: string;
  desc: string;
  tags: string[];
  highlight: string;
  github: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    icon: "⚡",
    title: "Six-Phase IRFOC Drive",
    subtitle: "Energy-Efficient Motor Control on TMS320F28379D",
    status: "In Progress",
    statusColor: "var(--amber)",
    desc: "IRFOC with Loss Model Controller for a six-phase induction motor. Dual three-phase Clarke/Park transforms, rotor flux estimation, and flux optimisation for minimum-loss operation. DSP implementation on TI TMS320F28379D.",
    tags: ["MATLAB/Simulink", "DSP", "IRFOC", "LMC", "Motor Drives", "C"],
    highlight: "IEEE PEDES 2026 Paper Submitted",
    github: "https://github.com/mrdimara/ngspice",
  },
  {
    id: 2,
    icon: "📡",
    title: "Gate Driver Characterisation",
    subtitle: "NOVA Research Gate Driver Analysis",
    status: "Active",
    statusColor: "var(--blue)",
    desc: "Deep characterisation of a research-grade gate driver at EMPES Lab, IIT Bombay. Miller plateau analysis, turn-on/off waveforms, ringing behaviour, dead-time optimisation, and ideal vs. practical switching comparison with oscilloscope data.",
    tags: ["Gate Drivers", "NGSpice", "MOSFET", "Oscilloscope", "Switching Analysis"],
    highlight: "EMPES Lab, IIT Bombay",
    github: null,
  },
  {
    id: 3,
    icon: "🔬",
    title: "Q3D Parasitic Extraction",
    subtitle: "PCB Loop Inductance & EMI Analysis",
    status: "Learning",
    statusColor: "var(--purple)",
    desc: "Gate-loop and power-loop inductance extraction via Ansys Q3D Extractor. Full Gerber-to-Q3D workflow, DC-link busbar analysis, RLGC parameter extraction, and design improvements for EMI reduction in power converter layouts.",
    tags: ["Ansys Q3D", "KiCad", "PCB", "EMI", "Parasitic Analysis"],
    highlight: "PCB Parasitic Reduction",
    github: null,
  },
  {
    id: 4,
    icon: "🔭",
    title: "Delta-Sigma ADC",
    subtitle: "~19.7 ENOB · 3rd-Order CT-DSM · OSR 128",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "3rd-order continuous-time Delta-Sigma modulator with 16-level quantiser achieving ~19.7 ENOB. Noise shaping, thermal/flicker noise analysis, PRBS chopping, and MASH/SMASH architecture evaluation. Submitted for ISRO VLSI Challenge.",
    tags: ["CT-DSM", "VLSI", "Noise Shaping", "Mixed-Signal", "Verilog"],
    highlight: "6th Rank — Inter-IIT Tech Meet 14.0",
    github: null,
  },
  {
    id: 5,
    icon: "🏎️",
    title: "Formula Bharat EV",
    subtitle: "HV Safety Electronics & BMS Lead",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "Led high-voltage safety electronics and Battery Management System for Formula Bharat 2025 electric vehicle. Designed LV systems, safety interlocks, and contributed to engineering design review as Vice Captain of Mechismu Racing Electric.",
    tags: ["BMS", "HV Safety", "EV", "PCB", "LV Systems"],
    highlight: "12th Engineering Design · 24th Overall",
    github: null,
  },
];
