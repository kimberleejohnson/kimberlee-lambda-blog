import React, { useEffect, useRef } from "react"

export default function Tile(props) {
  const videoEl = useRef(null)
  const audioEl = useRef(null)

  // Update the video when the video track changes
  useEffect(() => {
    videoEl.current &&
      (videoEl.current.srcObject = new MediaStream([props.videoTrack]))
  }, [props.videoTrack])

  // Do the same for audio
  useEffect(() => {
    audioEl.current &&
      (audioEl.current.srcObject = new MediaStream([props.audioTrack]))
  }, [props.audioTrack])

  function getLoadingComponent() {
    return props.isLoading && <p className="loading">Loading...</p>
  }

  function getVideoComponent() {
    return (
      props.videoTrack && <video autoPlay muted playsInline ref={videoEl} />
    )
  }

  function getAudioComponent() {
    return (
      !props.isLocalPerson &&
      props.audioTrack && <audio autoPlay playsInline ref={audioEl} />
    )
  }

  function getClassNames() {
    let classNames = "tile"
    classNames += props.isLarge ? " large" : " small"
    props.isLocalPerson && (classNames += " local")
    return classNames
  }

  return (
    <div className={getClassNames()}>
      <div className="background" />
      {getLoadingComponent()}
      {getVideoComponent()}
      {getAudioComponent()}
    </div>
  )
}
