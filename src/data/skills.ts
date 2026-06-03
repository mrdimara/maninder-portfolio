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
      "Flux Estimation",
      "DSP Control",
    ],
  },
  {
    title: "Power Electronics",
    items: [
      "Gate Drivers",
      "Buck/Boost Converters",
      "Inverters",
      "SPWM/SVPWM",
      "MPPT",
      "Switching Analysis",
    ],
  },
  {
    title: "Simulation & EDA",
    items: [
      "MATLAB/Simulink",
      "NGSpice",
      "LTspice",
      "Ansys Q3D",
      "Ansys Maxwell",
      "KiCad",
    ],
  },
  {
    title: "Embedded & HDL",
    items: [
      "TMS320F28379D",
      "C/C++",
      "Verilog",
      "FPGA",
      "Python",
      "Real-Time Control",
    ],
  },
];
