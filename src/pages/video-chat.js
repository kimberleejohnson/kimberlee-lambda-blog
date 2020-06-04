import React, {useEffect, useState, useCallback} from "react" 
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import CallButton from "../components/video-chat-components/callButton"
import startCall from "../helpers/startCall"

export default () => (
  <Layout>
    <Helmet>
      <script src="https://unpkg.com/@daily-co/daily-js" />
      <script src="https://kimberlee.daily.co/hello" />
    </Helmet>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <CallButton />
    </div>

    <div id="participantList" />

    <div id="callFrameDiv" style={{ width: "50vw", height: "50vh" }} />
  </Layout>
)
