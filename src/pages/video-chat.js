import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import startCall from "../helpers/startCall"

export default () => (
  <div>
    <Helmet>
      <script src="https://unpkg.com/@daily-co/daily-js" />
      <script src="https://kimberlee.daily.co/hello" />
    </Helmet>
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button onClick={startCall} style={{ marginBottom: "5vh" }}>
          Click to video chat.
        </button>
      </div>

      <div id="participantList" />

      <div id="callFrameDiv" style={{ width: "50vw", height: "50vh" }} />
    </Layout>
  </div>
)
