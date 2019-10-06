import React from "react"
import Layout from "../components/layout"
import kimberleelandsend from "../images/kimberleelandsend.jpg"

export default () => (
  <Layout>  
    <h3>Hi there! I'm a full stack software engineer looking for my next adventure.</h3>

    <p> Have a look at some of the <a href="https://kimberlee.dev/portfolio">software</a> I've written, <a href= "https://kimberlee.dev/console-blog">projects</a> I've blogged about, and other <a href="https://kimberlee.dev/resume">experiences</a> I've had.</p>

    <img
        src={kimberleelandsend}
        alt="Kimberlee Johnson's headshot"
    />

    <p> If I'm not programming, I'm probably out on a run training for a race, checking out books from the library, or practicing mandolin and ukulele.</p> 

    <p> I'd love to meet you! Feel free to say hello.</p> 
    
    <div class="icons-div">
      <a href= "https://github.com/kimberleejohnson"><img class="icon-img" src="https://img.icons8.com/metro/26/000000/github.png"></img></a>
  
      <a href="https://twitter.com/kimeejohnson"><img class="icon-img" src="https://img.icons8.com/metro/26/000000/twitter.png"></img></a>
  
      <a href="https://www.linkedin.com/in/kimberleejohnson/"><img class="icon-img" src="https://img.icons8.com/metro/26/000000/linkedin.png"></img></a>

      <a href="https://dev.to/kimberleejohnson"><img class="icon-img" src="https://img.icons8.com/metro/26/000000/document.png"></img></a>
    </div>

    


    
  </Layout>
    )
    
    
    
