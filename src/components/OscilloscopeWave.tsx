export default function OscilloscopeWave() {
  const width = 700;
  const height = 160;
  const amplitude = 80;
  const centerY = height / 2;
  const wavelength = 140;
  const points: string[] = [];

  for (let x = 0; x <= width; x += 4) {
    const y =
      centerY + amplitude * Math.sin((2 * Math.PI * x) / wavelength);
    points.push(`${x},${y}`);
  }

  const pathD = `M ${points.join(" L ")}`;

  return (
    <svg
      className="pointer-events-none absolute bottom-10 -right-5 opacity-[0.05]"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden
    >
      <path
        d={pathD}
        stroke="var(--amber)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeDasharray="12 8"
        className="wave"
      />
    </svg>
  );
}
