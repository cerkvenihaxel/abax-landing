'use client'

export default function DiagonalStripes({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="diagonalStripes" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
          <rect width="20" height="40" fill="#275891" opacity="0.8"/>
          <rect x="20" width="20" height="40" fill="#5178A7" opacity="0.6"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagonalStripes)" />
    </svg>
  )
}
