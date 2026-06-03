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
    status: "Research",
    statusColor: "var(--amber)",
    desc: "Indirect Rotor Field Oriented Control with Loss Model Controller for a six-phase induction motor (dual three-phase sets, 30° displacement). Dual Clarke/Park transforms, rotor flux estimation, SVPWM, and flux optimisation for minimum copper and iron losses. Simulink validated on WLTP/UDDS; real-time implementation on C2000 DSP with 10–20 kHz control loop.",
    tags: [
        "Indirect Rotor Field-Oriented Control (IRFOC)",
        "Linear Model Control (LMC)",
        "Six-Phase Induction Motor",
        "Space Vector PWM (SVPWM)",
        "MATLAB/Simulink",
        "TMS320F28379D",
        "Multi-Phase Drive Systems",
        "Vector Control",
        "Power Electronics",
        "Electric Drives"
    ],
    highlight: "IEEE PEDES 2026 — Paper Submitted",
    github: null,
  },
  {
    id: 2,
    icon: "📡",
    title: "Simulation Study on Parasitic Effects in an IGBT Gate Drive Circuit",
    subtitle: "EMPES Lab · IIT Bombay · TO-247 Package",
    status: "Active",
    statusColor: "var(--blue)",
    desc: "Research internship at EMPES Lab (May–Jul 2026) under Prof. Pavan Hari. This study delivers a high-fidelity simulation workflow to quantify stray inductances and parasitic effects using Ansys Q3D Extractor and Ansys Twin Builder. The research focuses on a TO-247 IGBT gate-drive circuit, modelling PCB trace and lead-frame parasitics for switching validation.",
    tags: [
      "Gate-Driver Modelling",
      "Ansys Q3D Extractor",
      "Ansys Twin Builder",
      "Parasitic Extraction",
      "MOSFET/IGBT Switching",
      "SPICE Modelling",
      "KiCad",
    ],
    highlight: "IIT Bombay · EMPES Lab , Department of Energy Science and Engineering",
    github: null,
  },
  {
    id: 3,
    icon: "🔭",
    title: "Delta-Sigma ADC",
    subtitle: "≈16.2 ENOB · 3rd-Order CT-DSM · OSR 128 · 180 nm SCL",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "Complete ASIC-oriented design of a high-precision Delta–Sigma (ΔΣ) ADC for space-grade sensing (0.5–2 kHz). Modeled in MATLAB/Simulink: a 3rd-order continuous-time modulator with a 16-level quantizer and OSR=128, paired with a CIC–FIR–Halfband decimation chain whose FIR coefficients were tuned using Particle Swarm Optimization (PSO). Full mixed-signal verification, noise (thermal & flicker) analysis, and chopping strategies were evaluated, followed by an RTL-to-layout flow targeting 180 nm SCL CMOS. The implemented design achieved an ENOB of 16.21 bits, SNR ≈ 98.4 dB, and a compact core area of ~1.02 mm² — demonstrating an ASIC-ready, low-power, high-resolution solution.",
    tags: [
      "CT-DSM",
      "ENOB 16.21",
      "SNR 98.4 dB",
      "MATLAB/Simulink",
      "PSO-Optimized Decimation",
      "CIC–FIR–Halfband",
      "RTL-to-Layout",
      "180 nm SCL",
      "Mixed-Signal Verification",
      "Chopping",
    ],
    highlight: "ENOB 16.21 · SNR 98.4 dB · Core ~1.02 mm² · ASIC-ready",
    github: "https://github.com/mrdimara/Sigma_Delta_ADC",
  },
  {
    id: 4,
    icon: "🏎️",
    title: "Formula Student Electric Vehicle",
    subtitle: "Vice Captain · LV Electronics Head",
    status: "Active",
    statusColor: "var(--green)",
    desc: "Led low-voltage electronics and LV–HV safety systems for Mechismu Racing Electric (Formula Bharat 2025). Responsibilities included battery-pack architecture and BMS integration, TSAL/BSPD/HVIL safety chains, precharge and discharge circuitry, cell-monitoring and SoC estimation, charging subsystem design, CAN-based vehicle communication, and PCB design, testing and validation for safety-critical modules. Conducted RTDS/system-level verification and prepared SLDs, FMEA, ESF, and FSAE compliance documentation for engineering design review.",
    tags: [
      "Battery Pack Design",
      "BMS",
      "HV/LV Safety",
      "FSAE",
      "PCB Design & Validation",
      "Charging Circuits",
      "Motor Controller",
      "System Integration",
    ],
    highlight: "12th Engineering Design · 24th Overall · Formula Bharat 2025",
    github: null,
    external: "https://mechismu.nvcti.in/",
  },
  {
    id: 5,
    icon: "⚙️",
    title: "NGSpice Power Electronics Suite",
    subtitle: "Converters & Motor-Drive Simulation Suite",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "Maintained an NGSpice v46 (XSPICE) simulation suite for power-conversion and motor-drive research. Features parameterised state-space and transient models for buck/boost converters, SPWM/SVPWM inverter topologies, an MPPT PV subcircuit, peak-current-mode controllers with slope compensation, and V/f control for three-phase induction motors. Provides GNU Octave co-simulation scripts (sim.m, FOC.m, parks.m), automated `run_ngspice.sh` workflows, parameter sweep testbenches, and validated cases theoretically.",
    tags: [
      "NGSpice v46",
      "XSPICE",
      "Octave Co-simulation",
      "Converters",
      "Inverter (SPWM/SVPWM)",
      "MPPT",
      "Peak Current Mode",
      "Slope Compensation",
      "V/f Control",
      "Motor Drive",
    ],
    highlight: "Spice Modelling · Power Conversion · Converters · Inverters · PV Systems · Open-source",
    github: "https://github.com/mrdimara/ngspice",
  },
  {
    id: 6,
    icon: "🔬",
    title: "NE555 Gate Driver for Power MOSFET",
    subtitle: "555 Timer · IRF640 · R/L/RL Validation",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "Delivered a discrete NE555-based MOSFET gate-driver system with KiCad schematic capture, NGSpice modelling, and fabrication-ready outputs. The project includes IRF640 gate-drive timing, RC pulse shaping for 5–20 kHz PWM, gate-charge management, and PC-board-aware gate-loop layout. Simulation and practical validation are supported by NGSpice raw result pipelines, Python & Octave post-processing scripts, R/L/RL load datasets, and documented practical measurement workflows.",
    tags: [
      "NE555",
      "IRF640",
      "Gate Driver",
      "KiCad",
      "NGSpice",
      "R/L/RL Validation",
      "Pulse Shaping",
      "EMI Mitigation",
      "Python & Octave Post-processing",
      
    ],
    highlight: "NE555 Gate Driver · NGSpice & Practical Validation · IRF640 · PCB-ready",
    github: null,
  },
  {
    id: 7,
    icon: "💻",
    title: "5-Stage Pipelined RISC CPU",
    subtitle: "MIPS32 / Verilog · Pipeline Registers",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "Built a five-stage pipelined RISC processor in Verilog. The design connects ALU, register file, instruction/data memory, control unit, and pipeline registers (IF/ID, ID/EX, EX/MEM, MEM/WB), and verifies instruction execution with iverilog/testbench simulation. Highlights include stage-wise RTL integration, branch/hazard-aware control flow, and two-phase clock verification for MIPS32-style instruction sequencing.",
    tags: ["Verilog", "MIPS32", "Pipelining", "Control Unit", "Testbench", "Hazard Handling", "NPTEL"],
    highlight: " 5-Stage Pipeline · RTL Simulation",
    github: null,
  },
  {
    id: 8,
    icon: "⚡",
    title: "Closed-Loop V/f Control for Induction Motor",
    subtitle: "V/f Scalar Control · Simulink · MATLAB",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "Closed-loop V/f (voltage–frequency) scalar control implemented in Simulink for an induction motor. Multi-run simulations (20–50 Hz) were automated with `run_script.m`, results post-processed by `plotting_results.m`, and steady-state modulation index (m) vs frequency extracted for no-load and 250 W load cases. Deliverables include the Simulink model `v_f_control_IM.slx`, simulation result pipelines, plotting/export scripts, and a project report.",
    tags: [
      "Simulink",
      "MATLAB",
      "V/f Control",
      "Induction Motor",
      "Scalar Control",
      "Simulation",
      "Modulation Index",
      "Control Systems",
    ],
    highlight: "Multi-run Simulink validation · m vs f extraction · 250 W load",
    github: null,
    external: "/Users/manindersingh/Downloads/MATLAB/Closed_Loop_V_F_Control_IM/Project Report.pdf",
  },

  /*
  {
    id: 9,
    icon: "⚙️",
    title: "PMSM Field-Oriented Control (FOC)",
    subtitle: "FOC Simulink Model · PMSM folder",
    status: "Completed",
    statusColor: "var(--green)",
    desc: "Field-Oriented Control (FOC) implementation for a PMSM provided as a Simulink model. This entry uses only the `PMSM` subfolder: primary files include `FOC_PMSM.slx` (and compatibility/backup variants), a zipped model archive, autosave, and `slprj` build artifacts. The Simulink model contains dq-frame transforms and closed-loop current/speed control subsystems (as implemented in the model) for simulation and analysis.",
    tags: [
      "PMSM",
      "Field-Oriented Control",
      "Simulink",
      "MATLAB",
      "dq-transforms",
      "Current & Speed Control",
    ],
    highlight: "FOC Simulink model (`FOC_PMSM.slx`) · PMSM control simulation · Model Predictive Control",
    github: null,
    external: "/Users/manindersingh/Downloads/Intern Sukanta Halder/PMSM",
  },
  */

];
