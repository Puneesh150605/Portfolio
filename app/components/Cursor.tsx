"use client"

import { useState, useEffect } from "react"

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true))
        el.addEventListener("mouseout", () => setLinkHovered(false))
      })
    }

    addEventListeners()
    handleLinkHoverEvents()
    return () => removeEventListeners()
  }, [])

  const cursorClasses = `fixed pointer-events-none z-50 transition-transform duration-150 ease-out ${
    clicked ? "scale-75" : "scale-100"
  }`

  return (
    <>
      <div
        className={`${cursorClasses} w-8 h-8 bg-emerald-500 rounded-full mix-blend-difference`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${clicked ? "scale(0.7)" : "scale(1)"}`,
        }}
      ></div>
      <div
        className={`${cursorClasses} w-40 h-40 border-2 border-emerald-500 rounded-full opacity-20`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${linkHovered ? "scale(1.5)" : "scale(1)"}`,
        }}
      ></div>
    </>
  )
}

export default Cursor

