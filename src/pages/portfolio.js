import React from "react"
import Layout from "../components/layout"
import sautiScreenshot from "../images/portfolio-images/sauti_screenshot.png"; 

export default () => (
    <Layout>  
    <h1>Portfolio</h1>
    <div>
        <h3>Sauti Databank</h3>
        <img
            src={sautiScreenshot}
            alt="Screenshot of bar charts on sauti-databank.com"
        
        /> 
        <p>A data visualization project for Sauti.org, a nonprofit that provides a platform for East African border traders to look up realtime market data. We converted data collected from SMS queries into a readable, then visual format. </p>
        <p><b>Stack</b>: Nivo (D3js), React, Sass, Node.js, MySQL.</p>
        <p><b>Role</b>: Created backend routes, frontend components, and documentation on month-long, five-developer team. Also contributed to data model and ETL process. </p>
        <p>
          <a href="https://github.com/sauti-databank"> Code </a> | 
          <a href="https://drive.google.com/file/d/1nVPaBB6P-KiCa9X1PwQmWm8UsQ5UzyVz/view?usp=sharing"> Case Study </a> 
        </p>
    </div>
    </Layout>
      )