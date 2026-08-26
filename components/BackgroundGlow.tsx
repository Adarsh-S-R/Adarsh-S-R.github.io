export function BackgroundGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="glow-blob glow-blob--a" />
      <div className="glow-blob glow-blob--b" />
      <div className="glow-grid" />
    </div>
  );
}
