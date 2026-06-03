export type ProjectStatus =
  | "In Progress"
  | "Active"
  | "Learning"
  | "Completed"
  | "Research";

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
  external?: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    icon: "⚡",
    title: "Six-Phase IRFOC Drive",
    subtitle: "Six-Phase IM · LMC · TI TMS320F28379D",
    status: "In Progress",
    statusColor: "var(--amber)",
    desc: "Indirect Rotor Field Oriented Control with Loss Model Controller for a six-phase induction motor (dual three-phase sets, 30° displacement). Dual Clarke/Park transforms, rotor flux estimation, SVPWM, and flux optimisation for minimum copper and iron losses. Simulink validated on WLTP/UDDS; real-time implementation on C2000 DSP with 10–20 kHz control loop.",
    tags: [
      "IRFOC",
      "LMC",
      "Six-Phase IM",
      "MATLAB/Simulink",
      "TMS320F28379D",
      "SVPWM",
    ],
    highlight: "IEEE PEDES 2026 — Paper Submitted",
    github: null,
  },
  {
    id: 2,
    icon: "📡",
    title: "Gate Driver Characterisation",
    subtitle: "EMPES Lab · IIT Bombay · NOVA Driver",
    status: "Active",
    statusColor: "var(--blue)",
    desc: "Internship research at EMPES Lab (May–Jul 2026) under Prof. Pavan Hari & Prof. D. Venkatramanan. Characterisation of a research-grade NOVA gate driver: Miller plateau timing, turn-on/off losses (E_on, E_off), dv/dt and di/dt, ringing from gate-loop inductance, dead-time vs shoot-through, and NGSpice ideal-vs-practical comparison with Keysight DSOX1204 waveforms.",
    tags: [
      "Gate Drivers",
      "NGSpice",
      "Oscilloscope",
      "Miller Plateau",
      "PyVISA",
      "KiCad",
    ],
    highlight: "IIT Bombay Internship · EMPES Lab",
    github: null,
  },
  {
    id: 3,
    icon: "🔭",
    title: "Delta-Sigma ADC",
    subtitle: "~19.7 ENOB · 3rd-Order CT-DSM · OSR 128",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "ISRO VLSI problem statement at Inter-IIT Tech Meet 14.0: architecture study of CT, DT, MASH, SMASH, and hybrid ΔΣ modulators. Final design — 3rd-order continuous-time DSM with 16-level quantizer, OSR 128, thermal and flicker noise budgets, fixed and PRBS chopping. MATLAB NTF/STF design; mixed-signal noise framework aligned with ISRO workflows.",
    tags: [
      "CT-DSM",
      "Noise Shaping",
      "Mixed-Signal",
      "MATLAB",
      "Verilog",
      "Decimation",
    ],
    highlight: "6th Rank — 22 IITs · ISRO VLSI Challenge",
    github: "https://github.com/mrdimara/Sigma_Delta_ADC",
  },
  {
    id: 4,
    icon: "🏎️",
    title: "Formula Bharat EV",
    subtitle: "Vice Captain · HV Safety & BMS Lead",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "Led high-voltage safety electronics and Battery Management System for Mechismu Racing Electric (Formula Bharat 2025). TSAL, BSPD, RTDS, HVIL, precharge/discharge, cell monitoring, SoC estimation, CAN integration, and KiCad PCBs for safety subsystems. Engineering Design Review: SLD, FMEA, and FSAE electrical compliance documentation.",
    tags: ["BMS", "HV Safety", "FSAE", "KiCad", "CAN", "LV Systems"],
    highlight: "12th Engineering Design · 24th Overall",
    github: null,
    external: "https://mechismu.nvcti.in/",
  },
  {
    id: 5,
    icon: "⚙️",
    title: "NGSpice Power Electronics Suite",
    subtitle: "Open-Source Converter & Motor Drive Simulations",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "Version-controlled NGSpice v46 (XSPICE) simulation suite: buck/boost state-space vs transient, SPWM/SVPWM inverters, MPPT with PV subcircuit, peak current mode with slope compensation, and V/f control for three-phase IM. GNU Octave co-simulation (sim.m, FOC.m, parks.m) with documented run_ngspice.sh workflow and IISc NPTEL power-conversion course deliverables.",
    tags: [
      "NGSpice",
      "GNU Octave",
      "Buck/Boost",
      "MPPT",
      "SPWM/SVPWM",
      "XSPICE",
    ],
    highlight: "IISc NPTEL · Power Conversion (108108166)",
    github: "https://github.com/mrdimara/ngspice",
  },
  {
    id: 6,
    icon: "🔬",
    title: "Q3D Parasitic Extraction",
    subtitle: "KiCad → Ansys Q3D → NGSpice Validation",
    status: "Learning",
    statusColor: "var(--purple)",
    desc: "PCB parasitic extraction workflow for power converters: Gerber/STEP from KiCad into Ansys Q3D Extractor, gate-loop and power-loop inductance targets (<10 nH / <20 nH), DC-link busbar RLGC, frequency sweep, and equivalent-circuit import into NGSpice for EMI and ringing analysis (ΔV = L_loop · di/dt).",
    tags: [
      "Ansys Q3D",
      "KiCad",
      "RLGC",
      "EMI",
      "Signal Integrity",
      "NGSpice",
    ],
    highlight: "Gate-Loop & Power-Loop Inductance",
    github: null,
  },
  {
    id: 7,
    icon: "💻",
    title: "RISC-V 5-Stage Pipelined CPU",
    subtitle: "RV32I · Verilog · Hazard Handling",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "Five-stage pipelined RISC-V processor (IF → ID → EX → MEM → WB) in Verilog from NPTEL coursework (Prof. Sengupta): data forwarding, control hazard flush, stage-wise testbenches, and iverilog/ModelSim simulation. Demonstrates digital design foundation for planned FPGA motor-control work.",
    tags: ["Verilog", "RISC-V", "Pipelining", "RTL", "Hazard Forwarding"],
    highlight: "NPTEL Verilog · Digital Systems",
    github: null,
  },
  {
    id: 8,
    icon: "🚗",
    title: "EV Powertrain Simulation",
    subtitle: "Six-Phase IPMSM · WLTP & UDDS · LMC",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "MATLAB/Simulink full EV powertrain: battery → inverter → six-phase IPMSM → drivetrain → wheels. IRFOC with loss minimisation, Nissan Leaf 2019 reference parameters, efficiency maps and energy consumption over WLTP and UDDS drive cycles. Complements induction-motor IRFOC research with vehicle-level validation.",
    tags: [
      "Simulink",
      "Powertrain Blockset",
      "FOC",
      "Drive Cycles",
      "Efficiency Maps",
    ],
    highlight: "Vehicle-Level Validation · Research Support",
    github: "https://github.com/mrdimara/Simscape_Battery",
  },
  {
    id: 9,
    icon: "📟",
    title: "ESP32 Custom PCB",
    subtitle: "KiCad · Embedded Hardware Design",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "Custom ESP32 PCB designed in KiCad: schematic capture, multi-layer routing, DRC, and Gerber export for embedded control applications. Builds foundation for real-time sensing and communication interfaces used across motor-drive and EV projects.",
    tags: ["KiCad", "ESP32", "PCB Layout", "Embedded"],
    highlight: "Schematic-to-Gerber Workflow",
    github: null,
  },
  {
    id: 10,
    icon: "🔋",
    title: "Simscape Battery Modelling",
    subtitle: "MATLAB · EV Energy Storage",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "MATLAB/Simscape battery and pack modelling for EV powertrain studies — parameterised cell behaviour, pack integration, and co-simulation with motor-drive and vehicle dynamics blocks used in traction energy analysis.",
    tags: ["Simscape", "MATLAB", "Battery Pack", "EV"],
    highlight: "Supports Powertrain Simulation",
    github: "https://github.com/mrdimara/Simscape_Battery",
  },
];
