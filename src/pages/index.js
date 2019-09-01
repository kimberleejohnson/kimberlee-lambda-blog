import React from "react"
import Layout from "../components/layout"
import kimberleelandsend from "../images/kimberleelandsend.jpg"

export default () => (
  <Layout>  
    <h3>Hi there! I'm a fullstack software engineer looking for my next adventure.</h3>
    
    <p> Have a look at some of the things I've built, blogged, and done for work.</p>

    <p> When I'm not programming, I run a lot, try to read even more, and am ever-perfecting my mandolin and ukulele skills.</p> 
    
    <img
        src={kimberleelandsend}
        alt="Kimberlee Johnson's headshot"
      />

    <p>
      <a href="https://github.com/kimberleejohnson"> Github </a> | 
      <a href="https://www.linkedin.com/in/kimberleejohnson/"> LinkedIn </a> |
      <a href="https://twitter.com/kimeejohnson"> | Twitter </a> 
    </p>
  </Layout>
    )
    
    
    
