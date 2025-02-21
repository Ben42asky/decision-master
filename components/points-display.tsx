"use client"

import { useEffect, useState } from "react"
import { getGameProgress } from "../lib/game-state"

export function PointsDisplay() {
  const [points, setPoints] = useState(0)

  useEffect(() => {
    const { totalPoints } = getGameProgress()
    setPoints(totalPoints)

    const interval = setInterval(() => {
      const { totalPoints } = getGameProgress()
      setPoints(totalPoints)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2 z-50">
      <p className="text-lg font-bold text-[#0d3c26]">Points: {points}</p>
    </div>
  )
}

