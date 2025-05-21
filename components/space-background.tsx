"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    // Star properties
    const stars: Star[] = []
    const numStars = Math.floor((window.innerWidth * window.innerHeight) / 1000)
    const shootingStars: ShootingStar[] = []
    const nebulae: Nebula[] = []

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.8 + 0.2,
        pulse: Math.random() * 0.1,
        pulseFactor: Math.random() * 0.02,
      })
    }

    // Create nebulae
    const numNebulae = 3
    for (let i = 0; i < numNebulae; i++) {
      nebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 200 + 100,
        color: getRandomNebulaColor(),
        opacity: Math.random() * 0.2 + 0.05,
      })
    }

    // Animation loop
    let animationFrameId: number
    let lastShootingStarTime = 0

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw nebulae
      drawNebulae(ctx, nebulae)

      // Draw stars
      drawStars(ctx, stars, time)

      // Create shooting star occasionally
      if (time - lastShootingStarTime > 3000 && Math.random() < 0.03) {
        createShootingStar(shootingStars, canvas)
        lastShootingStarTime = time
      }

      // Update and draw shooting stars
      updateShootingStars(ctx, shootingStars, canvas)

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 bg-black"
        style={{ pointerEvents: "none" }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-full z-1 opacity-30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-purple-900/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-blue-900/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-emerald-900/10 rounded-full filter blur-[100px]"></div>
      </motion.div>
    </>
  )
}

// Helper functions and types
type Star = {
  x: number
  y: number
  radius: number
  opacity: number
  pulse: number
  pulseFactor: number
}

type ShootingStar = {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
  trail: { x: number; y: number }[]
}

type Nebula = {
  x: number
  y: number
  radius: number
  color: string
  opacity: number
}

function drawStars(ctx: CanvasRenderingContext2D, stars: Star[], time: number) {
  stars.forEach((star) => {
    ctx.beginPath()
    const pulseValue = Math.sin(time * 0.001 + star.pulse) * star.pulseFactor + 1
    ctx.arc(star.x, star.y, star.radius * pulseValue, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
    ctx.fill()
  })
}

function createShootingStar(shootingStars: ShootingStar[], canvas: HTMLCanvasElement) {
  const angle = Math.random() * Math.PI * 0.25 + Math.PI * 0.125 // Angle between PI/8 and 3PI/8
  shootingStars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * (canvas.height / 3),
    length: Math.random() * 80 + 50,
    speed: Math.random() * 15 + 10,
    angle: angle,
    opacity: 1,
    trail: [],
  })
}

function updateShootingStars(ctx: CanvasRenderingContext2D, shootingStars: ShootingStar[], canvas: HTMLCanvasElement) {
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const star = shootingStars[i]

    // Update position
    star.x += Math.cos(star.angle) * star.speed
    star.y += Math.sin(star.angle) * star.speed

    // Add to trail
    star.trail.push({ x: star.x, y: star.y })
    if (star.trail.length > 20) {
      star.trail.shift()
    }

    // Draw trail
    if (star.trail.length > 1) {
      ctx.beginPath()
      ctx.moveTo(star.trail[0].x, star.trail[0].y)

      for (let j = 1; j < star.trail.length; j++) {
        ctx.lineTo(star.trail[j].x, star.trail[j].y)
      }

      ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`
      ctx.lineWidth = 2
      ctx.stroke()
    }

    // Draw head
    ctx.beginPath()
    ctx.arc(star.x, star.y, 2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
    ctx.fill()

    // Fade out
    star.opacity -= 0.01

    // Remove if off screen or faded out
    if (star.x > canvas.width || star.y > canvas.height || star.opacity <= 0) {
      shootingStars.splice(i, 1)
    }
  }
}

function getRandomNebulaColor() {
  const colors = [
    "rgba(110, 0, 255, 0.8)", // Purple
    "rgba(0, 150, 255, 0.8)", // Blue
    "rgba(0, 255, 200, 0.8)", // Teal
    "rgba(255, 100, 200, 0.8)", // Pink
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

function drawNebulae(ctx: CanvasRenderingContext2D, nebulae: Nebula[]) {
  nebulae.forEach((nebula) => {
    const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius)
    gradient.addColorStop(0, nebula.color.replace("0.8", `${nebula.opacity * 2}`))
    gradient.addColorStop(0.5, nebula.color.replace("0.8", `${nebula.opacity}`))
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

    ctx.beginPath()
    ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2)
    ctx.fillStyle = gradient
    ctx.fill()
  })
}
