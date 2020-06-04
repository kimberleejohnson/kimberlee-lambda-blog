import React from "react"

export default function CallMessage(props) {
  return (
    <div className={"call-message" + (props.isError ? " error" : "")}>
      <p className="call-message-header">{props.header}</p>
      <p>{props.detail}</p>
    </div>
  )
}
