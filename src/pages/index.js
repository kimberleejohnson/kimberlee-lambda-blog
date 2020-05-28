import React from "react"
import Carousel from "nuka-carousel"
import Layout from "../components/layout"
import { TwitterTweetEmbed } from "react-twitter-embed"

import kimberleelandsend from "../images/kimberlee_lands_end.jpg"
import kimberlee_raceday from "../images/kimberlee_raceday.png"
import kimberlee_ukulele from "../images/kimberlee_ukulele.png"

const iconGroupStyle = {
  marginTop: "3%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "spaceBetween"
}

const iconStyle = {
  padding: "10%"
}

const carouselStyle = {
  textAlign: "center"
}

export default () => (
  <Layout>
    <h3>Hi there! I'm a full stack software engineer.</h3>

    <p>
      Most recently, I solved 120+ user-reported bugs per month as the only
      Support Engineer at <a href="https://www.survata.com/">Survata</a>, a
      YC-backed startup.
    </p>

    <p>
      I taught myself to program, starting with JavaScript, after 3.5 years
      collaborating with developers on their interviews, talks, and blog posts
      at <a href="https://stripe.com">Stripe</a>.
    </p>

    <p>
      {" "}
      I learn through building things, like a Node.js and Twilio{" "}
      <a href="https://twitter.com/kimeejohnson/status/1243586904794128384">
        app
      </a>{" "}
      to help restaurants during COVID-19;{" "}
      <a href="https://www.sauti-databank.com/">data visualizations</a> for a
      nonprofit using Nivo (D3js) and MySQL; and Dolly Parton-inspired{" "}
      <a href="https://twitter.com/kimeejohnson/status/1179889420142436354">
        demos
      </a>{" "}
      in React.
    </p>

    <Carousel style={carouselStyle} autoplay={true} autoplayInterval={1700}>
      <img src={kimberleelandsend} alt="Kimberlee Johnson's headshot" />

      <TwitterTweetEmbed tweetId={"1243586904794128384"} />

      <img src={kimberlee_ukulele} alt="Kimberlee holds ukulele " />

      <TwitterTweetEmbed tweetId={"1179966596711731201"} />

      <img
        src={kimberlee_raceday}
        alt="Kimberlee and friend jumping with San Francisco in background"
      />

      <TwitterTweetEmbed tweetId={"1187180278982139904"} />
    </Carousel>

    <div class="icons-div" style={iconGroupStyle}>
      <a href="https://github.com/kimberleejohnson">
        <img
          class="icon-img"
          src="https://img.icons8.com/ios-filled/24/000000/github.png"
          style={iconStyle}
        />
      </a>

      <a href="https://twitter.com/kimeejohnson">
        <img
          class="icon-img"
          src="https://img.icons8.com/metro/26/000000/twitter.png"
          style={iconStyle}
        />
      </a>

      <a href="https://www.linkedin.com/in/kimberleejohnson/">
        <img
          class="icon-img"
          src="https://img.icons8.com/metro/26/000000/linkedin.png"
          style={iconStyle}
        />
      </a>

      <a href="https://dev.to/kimberleejohnson">
        <img
          class="icon-img"
          src="https://img.icons8.com/metro/26/000000/document.png"
          style={iconStyle}
        />
      </a>
    </div>
  </Layout>
)
