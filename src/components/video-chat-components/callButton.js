import React from "react"

export default function CallButton(props) {
  return (
    <button
      style={{ marginBottom: "5vh" }}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      Click to video chat.
    </button>
  )
}
