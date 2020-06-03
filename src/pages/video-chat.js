import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import startCall from "../helperFunctions/startCall"

export default () => ( 
      <div>
        <Helmet>
          <script src="https://unpkg.com/@daily-co/daily-js" />
          <script src="https://kimberlee.daily.co/hello"/>
        </Helmet>
        <Layout>
        <body>
          <button onClick={startCall}>
            Click to video chat.</button>
        </body>
        </Layout>
      </div>
)
