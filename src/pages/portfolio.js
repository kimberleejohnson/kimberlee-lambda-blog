import React from "react"
import Layout from "../components/layout"
import { TwitterTweetEmbed } from "react-twitter-embed"

// Portfolio screenshots
import sautiScreenshot from "../images/portfolio-images/sauti_screenshot.png"
import rideForLifeScreenshot from "../images/portfolio-images/rideForLife_screenshot.png"
import tweetmateScreenshot from "../images/portfolio-images/tweetmate_screenshot.png"

export default () => (
  <Layout>
    <h1>Portfolio</h1>

    <div>
      <h3>COVID-19 Open Restaurant Finder</h3>

      <TwitterTweetEmbed tweetId={"1243586904794128384"} />

      <br />
      <p>
        During the COVID-19 crisis, a friend who runs a restaurant wanted to
        reach more takeout customers during Shelter in Place, but refused to
        work with delivery apps. I scraped The San Francisco Chronicle’s
        Restaurant project, deployed it to a REST API using Node.js, and then
        connected that API to Twilio, setting up a phone number that could
        receive a zip code from a text message, look up the corresponding open
        restaurants, and respond to the sender with that list. Hundreds of
        people texted the number within 48 hours.
      </p>
      <p>
        <b>Stack</b>: Node.js, Heroku, Twilio
      </p>
      <p>
        <b>Role</b>: I built this project independently.
      </p>
      <p>
        <a href="https://github.com/kimberleejohnson/open-restaurants">
          {" "}
          Code{" "}
        </a>{" "}
        |<a href="#"> Case study </a> (coming soon){" "}
      </p>
    </div>

    <div>
      <h3>Sauti Databank</h3>
      <img
        src={sautiScreenshot}
        alt="Screenshot of bar charts on sauti-databank.com"
      />
      <p>
        A data visualization project for{" "}
        <a href="http://sautiafrica.org/">Sauti.org</a>. Sauti manages an SMS
        platform that East African border traders use to look up realtime market
        data. We converted that data, collected from SMS queries and stored in
        an array of objects, into a readable, then visual format.{" "}
      </p>
      <p>
        <b>Stack</b>: Nivo (D3js), React, Sass, Node.js, MySQL.
      </p>
      <p>
        <b>Role</b>: In addition to collaborating on a five-person developer
        team to create a new data model and ETL process for Sauti, I also: moved
        calculations from the front-end to back-end routes to decrease front-end
        load and optimize performance; wrote a Node.js script to automate data
        updates, and managed documentation so that a new team of developers
        could pick up the project where we left off.
      </p>
      <p>
        <a href="https://github.com/sauti-databank"> Code </a> |
        <a href="https://drive.google.com/file/d/1nVPaBB6P-KiCa9X1PwQmWm8UsQ5UzyVz/view?usp=sharing">
          {" "}
          Case study{" "}
        </a>{" "}
        |<a href="https://www.sauti-databank.com/">Site</a>
      </p>
    </div>

    <div>
      <h3>Ride for Life</h3>
      <img
        src={rideForLifeScreenshot}
        alt="Mobile view of the Ride For Life marketing page, featuring a woman holding a baby and a sign in button."
      />
      <p>
        A marketing page for Ride for Life, a{" "}
        <a href="https://www.safemotherssafebabies.org/">
          Safe Mothers, Safe Babies
        </a>{" "}
        app that allows pregnant mothers in Uganda to take safe, affordable
        boda-boda motorcycle taxi rides to medical appointments.{" "}
      </p>
      <p>
        <b>Stack</b>: HTML, Less CSS, JavaScript.
      </p>
      <p>
        <b>Role</b>: As the solo-developer on this project, I drew from my
        previous experience working in Uganda to design a mobile-first site, and
        brought it to life using media queries.
      </p>
      <p>
        <a href="https://github.com/build-rideForLife/build_rideForLife_marketingA">
          {" "}
          Code{" "}
        </a>{" "}
        |<a href="https://kimberlee.dev/week-five/"> Case study </a> |
        <a href="https://rideforlifeapp.netlify.com"> Site </a>
      </p>
    </div>

    <div>
      <h3>Tweetmate</h3>
      <img
        src={tweetmateScreenshot}
        alt="Clouds at sunset behind a standard app login screen."
      />
      <p>
        An app that performs a psycographic analysis of a user's tweets once
        they connect their Twitter account. The analysis includes graphs
        comparing a user's results to the average user, and also suggests a list
        of users with similar psycographic traits.{" "}
      </p>

      <p>
        <b>Role</b>: I partnered with another front-end developer to design and
        implement how the user would interact with the app, and what data would
        be displayed with each user click.{" "}
      </p>

      <p>
        <b>Stack</b>: React, Redux, styled-components.
      </p>

      <p>
        <a href="https://github.com/pat-pyschographic-analysis-of-text">
          {" "}
          Code{" "}
        </a>{" "}
        |<a href="https://tweetmate.netlify.com/"> Site </a>
      </p>
    </div>

    <div>
      <h3>Mean Girls Day Bot</h3>

      <TwitterTweetEmbed tweetId={"1179785393471811590"} />

      <br />
      <p>
        In honor of the{" "}
        <a href="https://www.buzzfeed.com/ehisosifo1/october-3-mean-girls-day-tweets">
          Mean Girls meme
        </a>
        , I built a mini-bot that responded with "It's October 3rd" on October
        3rd, and partnered with{" "}
        <a href="https://twitter.com/ChloeCondon">Chloe Condon</a> at Microsoft
        to write up a{" "}
        <a href="https://dev.to/kimberleejohnson/trying-to-make-fetch-errr-a-post-request-happen-12ad">
          blog post
        </a>{" "}
        about the app and the tools that made it possible to build and deploy
        quickly. Since it's obviously not October 3rd all year, I then{" "}
        <a href="https://twitter.com/kimeejohnson/status/1180290750862381056">
          updated the app
        </a>{" "}
        to respond with random quotes from the movie by building and deploying a
        simple Node.js REST API.
      </p>

      <p>
        <b>Role</b>: I followed Twilio's{" "}
        <a href="https://www.twilio.com/legal/tos#19-fun">terms of service</a>{" "}
        to have fun building this little demo.{" "}
      </p>

      <p>
        <b>Stack</b>: Twilio, Microsoft Azure, Node.js
      </p>

      <p>
        <a href="https://gist.github.com/kimberleejohnson/445c478f91ac9fb2461287215d6c1fda">
          {" "}
          Code{" "}
        </a>{" "}
        |
        <a href="https://dev.to/kimberleejohnson/trying-to-make-fetch-errr-a-post-request-happen-12ad">
          {" "}
          Case Study{" "}
        </a>
      </p>
    </div>
  </Layout>
)
