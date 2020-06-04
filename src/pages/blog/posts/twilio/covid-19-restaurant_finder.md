---
title: 🥡 Build a Twilio app to help people support local restaurants during COVID-19 
date: '2020-05-15'
---

_This post was originally published on [Dev.to](https://dev.to/kimberleejohnson/build-a-twilio-app-to-help-people-support-local-restaurants-during-covid-19-14k5)_. 

If you have friends in the restaurant industry, have ever worked in food service, or have been reading your local news, you’re probably also worried about what *gestures around wildly* all of this means for some of our favorite places. 

While nobody knows what the future of restaurants will look like, when I saw The San Francisco Chronicle’s [list of open restaurants in the Bay Area](https://projects.sfchronicle.com/2020/restaurant-delivery/), I thought of something I could do that might help a little bit during our present, well, situation. I made The Chronicle's list accessible offline, via a Twilio phone number, to make it easier to call restaurants directly [instead of using delivery apps](https://www.eater.com/2020/5/11/21254488/from-the-editor-letter-delivery-apps-legislation). I hope this post can help you do the same for lists of open restaurants near you. 

##  How it works
A user texts a Twilio Phone Number a five-digit zip code. Our Twilio Phone Number sends an HTTP request including the zip code to a Node.js API deployed on Heroku. The API receives the zip code, looks up the relevant restaurants, and sends a formatted list of them back to the user’s phone number via a POST request. 

`youtube:https://www.youtube.com/embed/qTRB788Oi7Q`

To set it all up, you’ll want to have [Twilio](https://www.twilio.com/referral/avaKmb), [Heroku](https://signup.heroku.com/), and [Github](https://github.com/join) accounts ready. 

## How to build it 

### Find your data 
If you’re a solo developer like me, it would be a huge amount of work for you to track and manage a list of all the restaurants open for takeout and delivery near you. Thankfully, local news organizations are already doing this (and a lot of other) heavy lifting for us. I relied on [The San Francisco Chronicle](https://projects.sfchronicle.com/2020/restaurant-delivery/) for my data. Check if your favorite outlet is keeping a list, or do a bit of Googling to find what you need. 

![Puppy picks up newspaper](https://media.giphy.com/media/H54R9ULqkR5bG/giphy.gif)

If you’re lucky, your news outlet might’ve already released this data in a developer-friendly format. I recommend checking to see if they have a Github account and any related repositories. 

If they don’t, you’ll need to extract what you need. To keep things simple, I decided to look for just restaurant names, phone numbers, and zip codes. I right-clicked _View Page Source_ to check out the site’s source code. 

![View Page Source of Chronicle project](https://dev-to-uploads.s3.amazonaws.com/i/zwbs05ppfhqnt1usx9xi.png)

What to do next will vary on the site you’re using. It even looks a bit different for me today as I’m writing this than it did when I built the app. At first, I found the preload script that [linked to all of the data](https://projects.sfchronicle.com/2020/restaurant-delivery/commons-14e18e523a3456e0bfaa.js?1587594222) I needed for all the restaurants. Since I was erring on the side of getting this deployed quickly, I just copy/pasted that into a [restaurant_data.json](https://github.com/kimberleejohnson/open-restaurants/blob/master/restaurant_data.json) file. 

*Record scratch, freeze frame.* Yup, that’s me, just copy/pasting data into a file. 

![Cat scratching turntable](https://media.giphy.com/media/3WwVIueonlPZC/giphy.gif) 

This was not the most sophisticated or scalable way to build what I needed. To really optimize for searching performance later, I could've reformatted the data into an Object with the zip codes as keys and restaurants as values. I could’ve scraped the data programmatically ([Ben’s tutorial](https://dev.to/benjaminmock/the-easiest-way-to-scrape-a-website-with-javascript-in-node-js-54f1) might’ve helped). Most of all, with hundreds of restaurants potentially being added to this list over time, it would be better to setup and work with a real database instead of a JSON file. As is, there’s no easy way for me to update the list other than repeating the copy/paste process, which is not ideal and a problem I’d love to solve in the future. 

That said, my copy/paste gave me a scrappy start to get a basic API up and running.  

### Set up your API 

An API is an application programming interface. [Craig Dennis explains what they are](https://twitter.com/craigsdennis/status/1207049363937054721) better than I can, but the way I think of it is: I knew I needed a way to make this data appear somewhere other than my desktop json file (e.g. from a Twilio Phone Number), and an API could help make that happen. 

I used Node.js and Express to get an API up and running locally quickly. This is what my app.js file looks like: 

`gist:kimberleejohnson/04490809ac757146f05aba2facc24634#app.js`

Don’t worry too much about the routes-related lines or the body-parser. We’ll write our routes in a bit. 

After that, within the directory in my terminal I ran `npm i` to install dependencies, and then `npm start` to make sure my app was running. You should see a message in your terminal confirming you’re up and running (mine is line 34 in the gist). 

Once you see that message, we can start working with restaurant_data.json. 

The `data-model.js` file parses through our .json. I wanted to comb through for three things: all the restaurants, all the zip codes in the dataset (this would be useful for comparisons later), and all the restaurants within a to-be-texted zip code. 

`gist:kimberleejohnson/e35f0e11cad31ccd81e317f696f94469#data-model.js`
 
With those functions exported, I can call them in `routes.js`. The routes tell our API where to look for data, and what to do when data is found. Since we’ll be using Twilio, and I require it in line 4, I ran `npm i twilio` here. 

I created two GET requests just to confirm data existed, one for all restaurants and one with a specific restaurant zip code. Then, I wrote a POST request to create a new text message based on an input. If the input isn’t in our list of zip codes, the POST request returns an error message. 

`gist:kimberleejohnson/feaab366f3d9062b938e871225840ccf#routes.js`

I tested the routes locally. When I confirmed I could see the right restaurants returned for my zip, I [deployed to Heroku from Github](https://devcenter.heroku.com/articles/github-integration). With a successful Heroku deploy, I turned to Twilio.

### Set up a Twilio Phone Number 

![Texting in a retro phone](https://media.giphy.com/media/3oKIPCg4sXCe4Hqxna/giphy.gif) 

Developers use [Twilio](https://www.twilio.com) to programmatically send and receive calls and texts, but the limit really does not exist. [Chloe Condon](https://twitter.com/ChloeCondon) and I once used it to build a [Mean Girls’ day bot](https://dev.to/twilio/trying-to-make-fetch-errr-a-post-request-happen-12ad), and [Twilio Champions](https://www.twilio.com/champions) get up to all kinds of projects.  

[Sign up for an account](https://www.twilio.com/referral/avaKmb) if you don’t have one already. You’ll also need to pick a Twilio Phone Number, which you can set up from your [Console](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console). I recommend picking a number with an area code your users will be familiar with, so for me that was (415). 

Now it’s time to configure your number. Head to *Phone Numbers* / *Manage Numbers* / *Active Phone Numbers*, and click on the number you set up. Scroll down to *Messaging*. Select *Configure with Webhooks…*, and when a message comes in, set the Webhook to be a HTTP POST request to your Heroku endpoint. Hit *Save*. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/80yjj1jy8av9deu4q87i.png)

And with that, you should be ready to send a text! 

## What's next  

There is so much I can do to make this better. As I mentioned, I would love help making staying on top of which restaurants are open and closed more automated. If you have ideas and want to help, please [send me a DM](https://twitter.com/kimeejohnson), or file a [Github](https://github.com/kimberleejohnson/open-restaurants) issue. 

Most of all, if you wind up replicating this in your city and are running into any challenges, please let me know! I would be more than happy to help debug, and am just a Zoom pair programming session away. 

![Virtual hug loading onscreen](https://media.giphy.com/media/XpgOZHuDfIkoM/giphy.gif)