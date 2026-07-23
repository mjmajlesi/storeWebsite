import React, { ComponentProps } from 'react'

type TVariant = "dark" | "normal" | "login" | "success" | "danger"

type TButtonProps = ComponentProps<"button"> & {
  variant?: TVariant
}

export default function Button({ children, className, variant, ...root }: TButtonProps) {
  const styleButton = "p-2 rounded-md transition-all duration-200"
  return (
    <button 
      {...root} 
      className={`${styleButton} ${className || ""}`} 
      style={{ ...changeVariant(variant) }}
    >
      {children}
    </button>
  )
}

function changeVariant(variant?: TVariant) {
  switch (variant) {
    case "normal":
      return { backgroundColor: "black", color: "white" }
    case "dark":
      return { backgroundColor: "white", color: "black" }
    case "login":
      return { backgroundColor: "#1e98d5", color: "white" }
    case "success":
      return { backgroundColor: "green", color: "white", padding: "0 4px" }
    case "danger":
      return { backgroundColor: "red", color: "white", padding: "0 5px" }
    default:
      return {}
  }
}
