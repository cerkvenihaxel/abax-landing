'use client'

import { cn } from "@/lib/utils"
import { useEffect, useId, useRef, useState, useCallback } from "react"

interface GridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: string | number
  numSquares?: number
  className?: string
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
}

export default function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: GridPatternProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const [squares, setSquares] = useState<Array<{ id: number; pos: [number, number] }>>([])
  const [mounted, setMounted] = useState(false)

  const generateSquares = useCallback((count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
      ] as [number, number],
    }))
  }, [])

  useEffect(() => {
    setMounted(true)
    setSquares(generateSquares(numSquares))
  }, [numSquares, generateSquares])

  const updateSquares = useCallback(() => {
    if (mounted) {
      setSquares(generateSquares(numSquares))
    }
  }, [mounted, numSquares, generateSquares])

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(updateSquares, (duration + repeatDelay) * 1000)
    return () => clearInterval(interval)
  }, [duration, repeatDelay, mounted, updateSquares])

  if (!mounted) {
    return (
      <svg
        ref={containerRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
          className,
        )}
        {...props}
      >
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path
              d={`M.5 ${height}V.5H${width}`}
              fill="none"
              strokeDasharray={strokeDasharray}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    )
  }

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [x, y], id }, index) => (
          <rect
            key={`${id}-${index}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth="0"
            className="animate-pulse"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: `${duration}s`,
            }}
          />
        ))}
      </svg>
    </svg>
  )
}
