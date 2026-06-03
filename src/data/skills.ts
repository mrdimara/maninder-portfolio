export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Motor Drives & Control Systems",
    items: [
      "Indirect Rotor Field-Oriented Control (IRFOC)",
      "Six-Phase Induction Motor Drives",
      "Loss Model Controller (LMC)",
      "Rotor Flux Estimation",
      "Clarke & Park Transformations",
      "Space Vector PWM (SVPWM)",
      "V/f Control",
      "PI Controller Design",
    ],
  },

  {
    title: "Power Electronics & Electric Vehicles",
    items: [
      "IGBT/MOSFET Gate Drivers",
      "DC-DC Converters",
      "Three-Phase Voltage Source Inverters",
      "MPPT Algorithms (P&O)",
      "Peak Current Mode Control",
      "Switching Loss Analysis",
      "Battery Management Systems (BMS)",
      "HV/LV Safety Electronics",
    ],
  },

  {
    title: "Embedded Systems & Digital Design",
    items: [
      "TI TMS320F28379D DSP",
      "Embedded C/C++",
      "Verilog HDL",
      "RTL Design & Verification",
      "Real-Time Control Systems",
      "Pipelined Processor Design",
      "CAN Communication",
      "Code Composer Studio",
    ],
  },

  {
    title: "Mixed-Signal & Data Converters",
    items: [
      "Continuous-Time Delta-Sigma ADCs",
      "Noise Shaping",
      "Thermal Noise Analysis",
      "Flicker Noise Modelling",
      "Fixed & PRBS Chopping",
      "Oversampling Techniques",
      "Mixed-Signal Modelling",
      "Behavioral Simulation",
    ],
  },

  {
    title: "Simulation, Modelling & EDA",
    items: [
      "MATLAB/Simulink",
      "NGSpice (XSPICE)",
      "GNU Octave",
      "LTspice",
      "Ansys Q3D Extractor",
      "Ansys Twin Builder",
      "KiCad PCB Design",
      "Power Electronics Simulation",
    ],
  },
];