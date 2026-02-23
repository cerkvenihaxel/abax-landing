'use client'

import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import Link from "next/link"

interface BentoGridProps {
  children: ReactNode
  className?: string
}

interface BentoCardProps {
  name: string
  className?: string
  background?: ReactNode
  Icon?: React.ComponentType<{ className?: string }>
  description?: string
  href?: string
  cta?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}>
      {children}
    </div>
  )
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu transition-all duration-300 hover:[box-shadow:0_0_0_1px_rgba(0,0,0,.06),0_2px_4px_rgba(0,0,0,.08),0_16px_32px_rgba(0,0,0,.08)]",
        className,
      )}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 -m-2">
          {Icon && <Icon className="h-12 w-12 origin-left transform-gpu text-baltic-blue transition-all duration-300 ease-in-out group-hover:scale-75 mb-2" />}
          <h3 className="text-xl font-semibold text-neutral-700">
            {name}
          </h3>
          <p className="max-w-lg text-neutral-600">{description}</p>
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        {cta && href && (
          <Link href={href} className="pointer-events-auto rounded-lg bg-baltic-blue px-4 py-2 text-sm font-semibold text-white hover:bg-baltic-blue-2">
            {cta}
          </Link>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
    </div>
  )
}
