const STRIPES = [
  { color: "#334444", gap: true },
  { color: "#576A6A", gap: true },
  { color: "#728383", gap: true },
  { color: "#A5AFAF", gap: true },
  { color: "#CFD3CF", gap: false },
];

export function ColorStripe() {
  return (
    <div className="w-full">
      {STRIPES.map(({ color, gap }) => (
        <div key={color}>
          <div className="w-full h-[6px]" style={{ backgroundColor: color }} />
          {gap && <div className="w-full h-[2px] bg-white" />}
        </div>
      ))}
    </div>
  );
}
