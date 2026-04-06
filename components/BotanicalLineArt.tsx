type BotanicalLineArtProps = {
  className?: string;
  variant?: "sprig" | "bloom";
  tone?: "olive" | "cream";
};

export default function BotanicalLineArt({
  className = "h-36 w-24",
  variant = "sprig",
  tone = "olive",
}: BotanicalLineArtProps) {
  const stroke =
    tone === "cream" ? "rgba(239,228,208,0.55)" : "rgba(110,124,90,0.34)";

  if (variant === "bloom") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 130 220"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M72 208C69 180 73 153 78 128C83 101 90 80 92 56"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M68 142C55 132 42 128 26 129C35 141 48 147 62 150"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M78 115C92 110 105 111 118 118C107 125 96 126 82 124"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M79 83C65 65 59 45 60 20C79 34 87 52 88 72"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M92 76C106 61 113 46 116 26C98 35 88 48 84 65"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M72 177C58 172 47 173 35 179C45 189 56 191 68 188"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 120 220"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M67 214C62 176 64 145 72 112C78 88 88 62 95 24"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M73 148C59 138 44 135 24 138C37 151 51 156 67 158"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M79 121C92 112 103 109 114 112C106 124 97 130 84 132"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M86 87C74 75 68 60 66 40C80 48 89 61 93 77"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M97 69C107 57 113 44 116 28C103 34 93 44 90 57"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M63 182C51 176 40 175 28 179C38 188 49 191 61 190"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
