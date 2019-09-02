import React from "react"
import Layout from "../components/layout"

// Portfolio screenshots
import sautiScreenshot from "../images/portfolio-images/sauti_screenshot.png"; 
import rideForLifeScreenshot from "../images/portfolio-images/rideForLife_screenshot.png"; 

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

    <div>
        <h3>Ride for Life</h3>
        <img
            src={rideForLifeScreenshot}
            alt="Mobile view of the Ride For Life marketing page, featuring a woman holding a baby and a sign in button."
        
        /> 
        <p>A marketing page for Ride for Life, an app that allows pregnant mothers in Uganda to take safe, affordable boda-boda rides to medical appointments. I used media queries to design and build this mobile-first site. </p>
        <p><b>Stack</b>: HTML, CSS, LESS, JavaScript.</p>
        <p>
          <a href="https://github.com/build-rideForLife/build_rideForLife_marketingA"> Code </a> | 
          <a href="https://rideforlifeapp.netlify.com"> Live site </a> 
        </p>
    </div>

    </Layout>
      )