import React from "react"
import Carousel from "nuka-carousel"
import Layout from "../components/layout"
import { TwitterTweetEmbed } from 'react-twitter-embed';

import kimberleelandsend from "../images/kimberleelandsend.jpg"
import kimberlee_raceday from "../images/kimberlee_raceday.png"
import kimberlee_ukulele from "../images/kimberlee_ukulele.png"

// Tweet styling 
const tweetStyle = {
  display: 'flex',
  justifyContent: 'center'
};

const iconStyle = {
  marginTop: '3%'
}

export default () => (
  <Layout>
    <h3>Hi! I'm a full stack software engineer.</h3>

    <p>
      {" "}
      I've <a href="https://www.sauti-databank.com/">visualized data</a> for a
      nonprofit with Nivo (D3js) and MySQL, built Dolly Parton-inspired{" "}
      <a href="https://twitter.com/kimeejohnson/status/1179889420142436354">
        demos
      </a>{" "}
      to learn React, and celebrated{" "}
      <a href="https://dev.to/kimberleejohnson/trying-to-make-fetch-errr-a-post-request-happen-12ad">
        Mean Girls Day
      </a>{" "}
      using Azure Functions. Flip through the carousel below to see some highlights, and find more projects and details in my{" "}
      <a href="https://kimberlee.dev/portfolio">portfolio</a>.
    </p>

    <p>
      I learned to code after 3.5 years working with developers on their
      interviews, talks, and blog posts at{" "}
      <a href="https://stripe.com">Stripe</a>.
    </p>

   
    <Carousel autoplay={true} autoplayInterval={1700}>
      <img src={kimberleelandsend} alt="Kimberlee Johnson's headshot" />

      <div style={tweetStyle}>
        <TwitterTweetEmbed
        tweetId={'1179966596711731201'}
        />
      </div>

      <img src={kimberlee_ukulele} alt="Kimberlee holds ukulele " />

      <div style={tweetStyle}>
        <TwitterTweetEmbed
        tweetId={'1179889420142436354'}
        />
      </div>

      <img src={kimberlee_raceday} alt="Kimberlee and friend jumping with San Francisco in background" />

      <div style={tweetStyle}>
        <TwitterTweetEmbed
        tweetId={'1122155953397256193'}
        />
      </div>

    </Carousel> 

      

    <div class="icons-div" style={iconStyle}>
      <a href="https://github.com/kimberleejohnson">
        <img
          class="icon-img"
          src="https://img.icons8.com/metro/26/000000/github.png"
        ></img>
      </a>

      <a href="https://twitter.com/kimeejohnson">
        <img
          class="icon-img"
          src="https://img.icons8.com/metro/26/000000/twitter.png"
        ></img>
      </a>

      <a href="https://www.linkedin.com/in/kimberleejohnson/">
        <img
          class="icon-img"
          src="https://img.icons8.com/metro/26/000000/linkedin.png"
        ></img>
      </a>

      <a href="https://dev.to/kimberleejohnson">
        <img
          class="icon-img"
          src="https://img.icons8.com/metro/26/000000/document.png"
        ></img>
      </a>
    </div>
  </Layout>
)
    
    
    
