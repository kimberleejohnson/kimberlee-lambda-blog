import React, { useState, useCallback } from "react" // useEffect, 
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Call from "../components/video-chat/components/Call/call"
import CallButton from "../components/video-chat/components/callButton"
import dailyAPI from "../components/video-chat/dailyAPI"
import CallObjectContext from "../components/video-chat/callObjectContext"
// import {
//   roomUrlFromPageUrl,
//   pageUrlFromRoomUrl,
// } from "../components/video-chat/urlUtils"
// import { logDailyEvent } from "../components/video-chat/logUtils"
import DailyIframe from "@daily-co/daily-js"

// import startCall from "../helpers/startCall"

const STATE_IDLE = "STATE_IDLE"
// const STATE_CREATING = "STATE_CREATING"
const STATE_JOINING = "STATE_JOINING"
const STATE_JOINED = "STATE_JOINED"
// const STATE_LEAVING = "STATE_LEAVING"
const STATE_ERROR = "STATE_ERROR"

export default function VideoChat() {
  const [appState, setAppState] = useState(STATE_IDLE)
  const [roomUrl, setRoomUrl] = useState(null)
  const [callObject, setCallObject] = useState(null)

  const createCall = useCallback(() => {
    return dailyAPI
      .createRoom()
      .then(room => room.url)
      .catch(error => {
        // Update component state to an "error" state
      })
  }, [])

  const joinCall = useCallback(url => {
    const newCallObject = DailyIframe.createCallObject()
    setRoomUrl(url)
    setCallObject(newCallObject)
    setAppState(STATE_JOINING)
    newCallObject.join({ url })
  }, [])

  const showCall = [STATE_JOINING, STATE_JOINED, STATE_ERROR].includes(appState)

  return (
    <Layout>
      <Helmet>
        <script src="https://unpkg.com/@daily-co/daily-js" />
        <script src="https://kimberlee.daily.co/hello" />
      </Helmet>
      <div>
        {showCall ? (
          <CallObjectContext.Provider value={callObject}>
            <Call roomUrl={roomUrl} />
          </CallObjectContext.Provider>
        ) : (
          <CallButton
            onClick={() => {
              createCall().then(url => joinCall(url))
            }}
          />
        )}
      </div>
    </Layout>
  )
}
