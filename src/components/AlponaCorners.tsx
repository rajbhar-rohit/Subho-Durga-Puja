// Server component. Gold alpona (rice-paste floor art) line motifs,
// traced once and reused in all four corners via <use>.
export function AlponaCorners() {
  return (
    <>
      <svg className="alpona tl" viewBox="0 0 150 150" fill="none">
        <use href="#alpona-motif" />
      </svg>
      <svg className="alpona tr" viewBox="0 0 150 150" fill="none">
        <use href="#alpona-motif" />
      </svg>
      <svg className="alpona bl" viewBox="0 0 150 150" fill="none">
        <use href="#alpona-motif" />
      </svg>
      <svg className="alpona br" viewBox="0 0 150 150" fill="none">
        <use href="#alpona-motif" />
      </svg>

      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <g id="alpona-motif" stroke="#d4af37" strokeWidth={2}>
            <path d="M15,15 C15,55 55,75 75,75" fill="none" />
            <path d="M15,15 C55,15 75,55 75,75" fill="none" />
            <circle cx="15" cy="15" r="6" fill="#d4af37" stroke="none" />
            <path d="M30,15 Q40,40 15,50" fill="none" />
            <path d="M15,30 Q40,40 50,15" fill="none" />
            <circle cx="75" cy="75" r="3.5" fill="#d4af37" stroke="none" />
            <circle cx="55" cy="20" r="2.5" fill="#d4af37" stroke="none" />
            <circle cx="20" cy="55" r="2.5" fill="#d4af37" stroke="none" />
          </g>
        </defs>
      </svg>
    </>
  );
}
