import React from "react"
import Layout from "../components/layout"

// Portfolio screenshots
import sautiScreenshot from "../images/portfolio-images/sauti_screenshot.png"; 
import rideForLifeScreenshot from "../images/portfolio-images/rideForLife_screenshot.png"; 
import tweetmateScreenshot from "../images/portfolio-images/tweetmate_screenshot.png"

export default () => (
    <Layout>  
    <h1>Portfolio</h1>
    <div>
        <h3>Sauti Databank</h3>
        <img
            src={sautiScreenshot}
            alt="Screenshot of bar charts on sauti-databank.com"
        
        /> 
        <p>A data visualization project for Sauti.org, a nonprofit that built an SMS platform for East African border traders to look up realtime market data. We converted data collected from SMS queries into a readable, then visual format. </p>
        <p><b>Stack</b>: Nivo (D3js), React, Sass, Node.js, MySQL.</p>
        <p><b>Role</b>: Created backend routes, frontend components, and documentation on month-long, five-developer team. Also contributed to data model and ETL process. </p>
        <p>
          <a href="https://github.com/sauti-databank"> Code </a> | 
          <a href="https://drive.google.com/file/d/1nVPaBB6P-KiCa9X1PwQmWm8UsQ5UzyVz/view?usp=sharing"> Case study </a> |
          <a href="https://www.sauti-databank.com/">Site</a> 
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
          <a href="https://rideforlifeapp.netlify.com"> Site </a> 
        </p>
    </div>

    <div>
        <h3>Tweetmate</h3>
        <img
            src={tweetmateScreenshot}
            alt="Clouds at sunset behind a standard app login screen."
        
        /> 
        <p>An app that performs a psycographic analysis of a user's tweets once they connect their Twitter account. The analysis includes graphs comparing a user's results to average and also suggests a list of users with similar psycographic traits. </p>

        <p><b>Role</b>: I partnered with another frontend developer to program how the user would interact with the app, and what data would be displayed with each user click. </p>

        <p><b>Stack</b>: React, Redux, styled-components.</p>

        <p>
          <a href="https://github.com/pat-pyschographic-analysis-of-text"> Code </a> | 
          <a href="https://tweetmate.netlify.com/"> Site </a> 
        </p>
    </div>

    </Layout>
      )