import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import startCall from "../helperFunctions/startCall"

export default () => (
  <div>
    <Helmet>
      <script src="https://unpkg.com/@daily-co/daily-js" />
      <script src="https://kimberlee.daily.co/hello" />
    </Helmet>
    <Layout>
      <button onClick={startCall} style={{marginBottom:'5vh'}}>Click to video chat.</button>

      <div id="participantList"></div>

      <div
        id="callFrameDiv"
        style={{width: "50vw", height: "50vh" }}
      />
    </Layout>
  </div>
)
