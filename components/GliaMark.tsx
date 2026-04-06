type GliaMarkProps = {
  className?: string;
};

export default function GliaMark({ className = "h-28 w-28" }: GliaMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="58" fill="#5f2483" />
      <path
        d="M22 38C22 28.6112 29.6112 21 39 21H64C71.1797 21 77 26.8203 77 34V34C77 41.1797 71.1797 47 64 47H39C29.6112 47 22 39.3888 22 30V38Z"
        fill="#FDE9A2"
      />
      <path
        d="M38 69C38 61.8203 43.8203 56 51 56H51C58.1797 56 64 61.8203 64 69V81C64 88.1797 58.1797 94 51 94H51C43.8203 94 38 88.1797 38 81V69Z"
        fill="#FBDAD0"
      />
      <path
        d="M70 68C70 60.268 76.268 54 84 54H87C94.732 54 101 60.268 101 68V78C101 85.732 94.732 92 87 92H84C76.268 92 70 85.732 70 78V68Z"
        fill="#D4E198"
      />
      <path
        d="M36 58H52C55.3137 58 58 60.6863 58 64V64C58 67.3137 55.3137 70 52 70H36C32.6863 70 30 67.3137 30 64V64C30 60.6863 32.6863 58 36 58Z"
        fill="#5f2483"
      />
      <path
        d="M61 55C61 51.6863 63.6863 49 67 49H67C70.3137 49 73 51.6863 73 55V61C73 64.3137 70.3137 67 67 67H67C63.6863 67 61 64.3137 61 61V55Z"
        fill="white"
      />
      <circle cx="59.5" cy="59.5" r="58" stroke="rgba(255,255,255,0.25)" />
    </svg>
  );
}
