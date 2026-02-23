'use client'

export default function HexagonPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexagons" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
          <polygon points="28,0 56,15 56,45 28,60 0,45 0,15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
          <polygon points="28,60 56,75 56,105 28,120 0,105 0,75" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  )
}
