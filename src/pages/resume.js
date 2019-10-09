import React from "react"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
      <script
        async
        src="https:&#x2F;&#x2F;sdk.canva.com&#x2F;v1&#x2F;embed.js"
      ></script>
    </Helmet>

    <div>
      <div
        className="canva-embed"
        data-design-id="DADlx_k289w"
        data-height-ratio="1.2941"
        style={{
          padding: "129.4118% 5px 5px 5px",
          background: "rgba(0,0,0,0.03)",
          borderRadius: 8,
        }}
      />
      <a
        href="https://www.canva.com/design/DADlx_k289w/view?utm_content=DADlx_k289w&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener"
      ></a>
    </div>
  </Layout>
)




