export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Motor Drives & Control",
    items: [
      "IRFOC",
      "Six-Phase FOC",
      "Loss Model Controller",
      "Clarke/Park Transform",
      "Rotor Flux Estimation",
      "SVPWM / SPWM",
      "V/f Control",
      "PI Controller Design",
    ],
  },
  {
    title: "Power Electronics",
    items: [
      "Gate Drivers",
      "Miller Plateau",
      "Buck/Boost Converters",
      "Three-Phase Inverters",
      "MPPT (P&O)",
      "Peak Current Mode",
      "Dead-Time Design",
      "Switching Loss Analysis",
    ],
  },
  {
    title: "Simulation & EDA",
    items: [
      "MATLAB/Simulink",
      "NGSpice (XSPICE)",
      "GNU Octave",
      "LTspice",
      "Ansys Q3D",
      "Ansys Maxwell",
      "KiCad",
      "Keysight DSOX1204",
    ],
  },
  {
    title: "Embedded, HDL & Mixed-Signal",
    items: [
      "TMS320F28379D",
      "C/C++",
      "Verilog",
      "FPGA (planned FOC)",
      "Python / PyVISA",
      "CT ΔΣ ADC",
      "Noise Shaping",
      "Real-Time Control",
    ],
  },
];
