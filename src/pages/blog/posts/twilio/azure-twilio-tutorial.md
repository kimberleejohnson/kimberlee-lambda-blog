---
title: 💅💁🏼‍♀️ Trying to make FETCH (errr, a POST request) happen 
date: "2019-10-03"
---

_Originally posted on [Dev.to](https://dev.to/twilio/trying-to-make-fetch-errr-a-post-request-happen-12ad). This post will walk you through how to use Azure functions and Twilio to send and receive text messages and calls, in this case a quote from a favorite character. I used Cady Heron, but you could pick any of your favorites._ 

I’m not sure where I would fall on [Janis Ian’s map of the North Shore High cafeteria](https://www.youtube.com/watch?v=UwNq4T_Td6E), but it wouldn’t have been with the AP Computer Science kids.

![](https://media.giphy.com/media/xT9KVJZFvCYEWGKHGU/giphy.gif)

When playing with new APIs and technologies, I love to create apps and demos that incorporate things I love in pop culture (take, for example my [Twilizzo demo](https://twitter.com/kimeejohnson/status/1167175406073438208) or my [Dollygram demo](https://twitter.com/kimeejohnson/status/1179889420142436354). After I met [Chloe Condon](https://twitter.com/ChloeCondon) at [Girl Geek Dinner](https://girlgeek.io/) at the [Microsoft Reactor](https://developer.microsoft.com/en-us/reactor/) last month and saw her [Fake Boyfriend Demo](https://dev.to/azure/an-ambivert-s-guide-to-azure-functions-27b8), I was not only inspired to use [Azure Functions](https://docs.microsoft.com/en-us/learn/modules/create-serverless-logic-with-azure-functions/?WT.mc_id=devto-meangirlskim-chcondon) + [Twilio](www.twilio.com/referral/yUG1N7), but also made it my mission to collaborate on some fun quirky apps with her.

![](https://media.giphy.com/media/3otPoKDu9UcxaBmwk8/giphy.gif)

###### ☝ Dramatic reenactment of [Chloe](https://twitter.com/ChloeCondon) supporting me as I write this post 💕


### To follow this tutorial, you’ll need a few things: 
#### ☁️ An Azure account
[Azure Functions](https://docs.microsoft.com/en-us/learn/modules/create-serverless-logic-with-azure-functions/?WT.mc_id=devto-meangirlskim-chcondon) make it possible to get projects up and running very quickly, without worrying about spinning up a server. We’ll be [triggering our function with an HTTP request](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook/?WT.mc_id=devto-meangirlskim-chcondon), but there are many other ways to execute. If you’ve never worked with Azure before, [this Microsoft Learn tutorial on creating your first function could be helpful](https://docs.microsoft.com/en-us/learn/modules/create-serverless-logic-with-azure-functions/?WT.mc_id=devto-meangirlskim-chcondon
) (it certainly helped me!), and you can [dive into the docs too](https://docs.microsoft.com/en-us/azure/azure-functions/?WT.mc_id=devto-meangirlskim-chcondon).

#### ☎️ A Twilio account and phone number
If you’ve ever called a Lyft and then had to call your Lyft driver, [Twilio](www.twilio.com/referral/yUG1N7) makes that possible. Developers use [Twilio](www.twilio.com/referral/yUG1N7) to programmatically send and receive calls and texts, plus a whole bunch of other things like [April's How I'm Feeling app](https://www.vogueandcode.com/blog/tutorials/how-im-feeling). I could truly spend all day in their docs and tutorials (seriously- there's even a hidden [Rick Roll](https://twitter.com/ChloeCondon/status/1110690984814243840) in there), and if you wind up loving the docs as much as I do, check out [Hacktoberfest](https://twitter.com/kimeejohnson/status/1179272826097950720).

Create a [Twilio account](www.twilio.com/referral/yUG1N7), and add a trial phone number that can receive texts *and* calls. If you want to get real specific, you can search for an area code where your character would’ve lived, like, in my case, three miles from [North Shore, IL](https://meangirls.fandom.com/wiki/North_Shore_High_School). 

This might’ve been obvious, but you’ll also need your cell phone handy for texting/testing your app. 🤳

![](https://giphygifs.s3.amazonaws.com/media/fNlVtMPzJMh0c/giphy.gif)

With all that, we should be ready! 

![](https://giphygifs.s3.amazonaws.com/media/fb2H7RxKPMHvy/giphy.gif)

#### Create an Azure resource 

After you’ve created your [free Azure account](https://azure.microsoft.com/?WT.mc_id=devto-meangirlskim-chcondon), login to the Azure portal. From there, you’re going to click the *Create Resource* icon on the left, then *Function App* on the right. 

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/vw0muu17eovahxn75tpu.png)

Now you’ll want to fill in some details about your function: 

1️⃣ Come up with a name for your app, anything you like.
2️⃣ Pick a subscription (Free Trial, if like me you’re a student). 
3️⃣ Create a new resource group. 
4️⃣ Pick Windows as your OS for this demo. 
5️⃣ ‘Consumption’ hosting plan is your best bet. 
6️⃣ Pick a location based on where you are. For me in San Francisco, that means West US. 
7️⃣ I’ll be using Node.js for the runstack for this tutorial. 
8️⃣ Pick ‘Create New Storage.’ 

With those options all set, press Create to deploy your application. You should get a notification that deployment is successful in a minute or two.

![](https://media.giphy.com/media/l2YWwAjBwZdjxIXBe/giphy.gif)

You go, Glen Coco! Click the notification button on the bell in the top right, then *Go to resource* to check out your new app and add a function to it. 

#### Add an Azure function to your resource 
Once you’re at your resource, click the *+* button next to *Functions* in the left-side menu. 

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/b7yhz0ogws47ip2twuxp.png)

To get going quickly, we’re going to go ahead and pick *In-portal* for our development.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/q9xvb7zvfh039piv9975.png)

Press continue after you click that option, then select Webhook + API for our function. 

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/dmjhlc7uusyausnyv87c.png)

We’re picking this option because when our [Twilio](www.twilio.com/referral/yUG1N7) number receives a text message, we want it to send a POST request to our Azure function that tells it to run.

With those clicks, you’ll have a basic Hello, World app in your index.js. Click *</> Get Function URL at the top of the code*, *Copy URL*, and add **&name=your-name** to the end of the URL before pasting in your browser and pressing enter. The browser tab should say, “Hello, name” (*in honor of Mean Girls Day, feel free to make it "Jambo, name"*). 🙋‍♀️

![](https://giphygifs.s3.amazonaws.com/media/8vuARFixlnPvW/giphy.gif)

Once you’ve verified that’s working, it’s time to add Twilio! 


#### Installing the Twilio library and messaging in Azure 
We need to install Twilio’s helper library to convert the JavaScript in our function to Twilio’s Markup Language (TwiML). 

To do that, we first need to add a package.json to our function. Click the *View Files* option to the right-most side of your screen (you might need to scroll alllllll the way to the right in that bottom grey bar). After that, click, the *Add* option, and name the file *package.json*. 

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/tm614hqoy27pd6nw0zod.png)

Add the following code to your *package.json*: 

`gist:kimberleejohnson/b03f70d0c38f833d58f98687f3d7feff#package.json`

Click the large *Save* button, and head back to index.js. Open up your console, at the bottom of the screen, and type in `npm install twilio`. This adds the library that we need and creates a package-lock.json, as the red message in your console is probably telling you (don’t worry about that). 

Once our library is installed, we can get to writing the actual Twilio code. Here’s mine, feel free to copy directly before making your own, but be sure to check out the comments if you’re unsure what’s happening: 

`gist:kimberleejohnson/6c51955f9895c4b9109a6ded7fc1dcc4#index.js`

*Save* your code, and click *</> Get Function URL*. Now, we’re ready to head back to Twilio and set up our phone number. 

#### Linking our Twilio phone number to our Azure function
Head back to that phone number you added. Scroll down to where it says *Messaging*, select Webhook, and paste your Azure Function URL in. 

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/3it2cy5ura50lcnenlfr.png)

Click *Save*. You’re ready to test -- shoot your number a text. 

![](https://media.giphy.com/media/qi2P1Sadk5VK0/giphy.gif)

Woohoo! If your text is working, let’s add a call. 

#### Receiving Twilio calls with Azure 
This will work much the same way as our first function, but we’re going to need to record what we want our caller to hear. I used [this tool](https://online-voice-recorder.com/) to record and then [this tool](https://audio-joiner.com) mashup Cady and Kevin (you can see the full demo [here](https://twitter.com/kimeejohnson/status/1179785393471811590)). 

![](https://giphygifs.s3.amazonaws.com/media/345M4BWe4GCWI/giphy.gif)

Once you’re happy with your recording, you’ll want to upload it to [Twilio Assets](https://www.twilio.com/docs/runtime/assets). Head to the left-hand menu, click *Runtime* then *Assets*. Once you’re in your *Assets*, click the red **+** button to upload your audio file. 

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/1s0o4x4ovpjheffksbl3.png)

🚨 **Important** 🚨 you don’t want to share the link to your Asset publicly, which is why I’ve blocked mine out. 

Copy the link to your asset, and carry it back to Azure. Create another Azure function. Click the *+* button by *Functions* again back in Azure, select the same settings (in-portal and Webhook + API), add another package.json and our Twilio helper library.

Our code to take a call is very similar to our code to respond to a text. Here’s the code I used, but with a placeholder Twilio Asset link, which you should replace with your own. Again, take a minute or two to read through the comments:

`gist:kimberleejohnson/445c478f91ac9fb2461287215d6c1fda#index.js`

When that’s added, click Save, *</> Get Function URL*, head back to your Twilio number and paste that link as the HTTP POST request when a call is received. Save within Twilio, and you’re ready to test, make that call! 


You did it! This is really only the beginning of things you can do with Azure and [Twilio](www.twilio.com/referral/yUG1N7). Obviously it’s not October 3rd every day, so if you're reading this after/before 10/3, the number has been updated to respond with a random Mean Girls quote, and I’ll also set up an Azure reminder using the [Timer Trigger for Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer/?WT.mc_id=devto-meangirlskim-chcondon) to remind me to change the numbers back next year. There’s literally...no limit to what you can do. 

![](https://media.giphy.com/media/GZc9TILZ8pax2/giphy.gif)
