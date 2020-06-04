---
title: 🦃🤖 Build a bot for second helpings over the holidays
date: "2019-11-28"
---

I'm not going home for the holidays for the first time in half a decade. Nonetheless, the past few weeks have still involved a lot of familiar agonizing from friends, colleagues, and internet strangers, things like:  

* "What do I say when someone asks me why I'm still single...again?" 
* "How do I handle my uncle when he's being offensive?" 
* "No, but really, how will I make it through the holidays?" 

For many of us, it'll be a "Hard Candy Christmas" indeed. 

`youtube:https://www.youtube.com/embed/GOzi-gD7-ts`

After one of my recent daily doses of Dolly's holiday classic, I remembered that my friend [Chloe Condon](https://twitter.com/ChloeCondon) built a [chatbot](https://dev.to/azure/wine-not-build-a-bot-32fk) that answers questions specifically about wine. I decided to program one to respond to holiday-related SOS SMS, for when those chestnuts are _really_ roasting on that open fire. 

This post will walk you through how to use Azure tools to build an AI-powered chatbot, and how to connect that bot to Twilio. Before we get started, you'll want to set up an [Azure](https://portal.azure.com/?WT.mc_id=kimmanners-blog-chcondon) and a [Twilio](www.twilio.com/referral/yUG1N7) account, if you don't already have them. 

When you have those things, we're ready to gobble wobble. 

![Pug in a Turkey costume](https://media.giphy.com/media/148ujdR19pIXWU/giphy.gif)

## Create a Knowledge Base and QnA Service

Head over to the [QnA Maker portal](https://www.qnamaker.ai/), and _Sign in_ with your Azure credentials. Click _Create a knowledge base_ in the top-left navigation, and open it in a new tab. The Knowledge Base will hold our library of questions and answers. 

![Create a Knowledge Base in the navbar](https://thepracticaldev.s3.amazonaws.com/i/mjvfm2unadho4zakl6eg.png)

Once you're there, open another new tab via the *Create a QnA service* button. If our Knowledge Base hosts our questions, then the QnA service is what hosts our Knowledge Base, determining a whole bunch of details like its region and [billing and performance](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/qna-maker/?WT.mc_id=kimmanners-blog-chcondon). 

You'll want to give the QnA Service the following details: 

🦃 A unique name for the Service.   
🦃 Your Azure Subscription, which in this case is most likely *Free Trial*.   
🦃 *F0* is the tier you want -- F for Free!   
🦃 Create a Resource Group called *LearnRG*.  
🦃 Pick your closest region for this Service, which for me means *West US*.   
🦃 F is the tier again here.   
🦃 Repeat the same location you used above.   
🦃 Your app name should have auto-populated and have a green checkmark next to it.   
🦃 Your website location should match the region you picked for this Service.    
🛑 Disable App Insights.   
👍 Click Create!   

Take a break, grab a snack, and make sure you've put on your Thanksgiving pants so you're ready when your QnA Service is deployed in a few. 

![Gif from friends with Joey in stretchy pants](https://media.giphy.com/media/hs0If3hDc1zVhwimMP/giphy.gif)

## Connect your Knowledge Base to your QnA Service 

Head back to the [QnA Maker](https://www.qnamaker.ai/Create), and refresh the page. Scroll down to Step 2, where you'll now be able to populate all the information about the QnA Service you just deployed. 

Name your KB anything you like. I'm going with 'HolidayHelper'. 

Now we're at the fun part: putting the K(nowledge) in our KB. Instead of briefing the bot on the nuances of family dynamics over the holidays, we can just upload a .pdf .tsv, .doc, .docx, or even .xlsx with questions and answers. 

If you want to use mine, you can find those [here](https://github.com/kimberleejohnson/holiday-advice-chatbot/blob/master/Holiday%20advice.docx), or you can write one tailored to your holiday season's own unique quirks. 

![Family photo with leg lamp](https://media.giphy.com/media/3ohs7SgOFdfKraaATK/giphy.gif)

Once you've got your questions ready, scroll to Step 4 and upload them through the _Add file_ button. Next, you can pick any personality style you like for your chatbot. *Caring* is really meeting my needs right now, but pick what suits your fancy. These personalities add some auto-generated questions and answers to your Knowledge Base. 

With that, click *Create your KB*. 

![Chevy Chase lighting Christmas lights](https://media.giphy.com/media/jwYbhtTS19pGE/giphy.gif)

Now, you should be on the Edit page. You may have to do a bit of cleanup, removing typos and making sure your question and answer pairs look the way you want. Once all looks good, click *Save and Train* to record any changes, then *Test* in the upper right corner to see how your bot is doing. Ask it a couple questions, and see if the answers pop up in the chat window as you expect. 

If all looks good, you're ready to click *Publish*. 

In a few minutes, you should see a note praising your success and letting you know what your Knowledge Base's endpoints are. Now, you're ready to integrate with your bot. 


## Integrate your Knowledge Base with your bot

On the Success page, click *Create Bot*. This opens the Azure portal, where you'll fill out some info about your bot: 

🦃 Give your bot a name.   
🦃 Use the same subscription as before (probably *Free Trial*).   
🦃 Select the Resource Group you created before (probably *LearnRG*).   
🦃 Same location as the last time!  
🦃 F0 pricing tier.  
🦃 App name should auto-populate.   
🦃 I'm going with Node as my SDK language, but it shouldn't matter.  
🦃 Leave the remaining fields as they are (except for Application Insights, I'm turning that off).   

 Now, click *Create*! Grab some more stuffing; your bot should be ready in a few minutes. 

When you see the notification that your bot is live, click it, and then click *Go to resource*. On the lefthand menu, under *Bot Management*, select *Test in Web Chat*. Ask your bot the same questions as before, and make sure it's responding with the same answers. If anything looks off, you can head back to your [Knowledge Base](https://www.qnamaker.ai/Home/MyServices) and edit it. 

But, if all looks good, let's start having some fun with [Twilio](https://www.twilio.com/try-twilio?promo=xBBj30). 

## Set up Twilio to text your bot 

If you haven't used Twilio yet, it provides a suite of APIs that make it possible to communicate within apps. You can use it for anything and everything: [fake boyfriend apps](https://dev.to/azure/an-ambivert-s-guide-to-azure-functions-27b8), [Mean Girls Day](https://dev.to/kimberleejohnson/trying-to-make-fetch-errr-a-post-request-happen-12ad) or [ADHD med reminders](https://dev.to/azure/building-a-diy-adhd-medication-reminder-with-azure-functions-o70), and even learning to program with [TwilioQuest](https://www.twilio.com/quest). 

![Turboman gif](https://media.giphy.com/media/3ofT5WVzEca2YthrX2/giphy.gif)

Sign up [here](www.twilio.com/referral/yUG1N7) for an account if you don't have one. Once you have your account or are in your dashboard, create a new project. We're going to find a few things while we're here: 

* A Twilio phone number
* Our Twilio Account Sid (like a username for our app) 
* Our Twilio Auth Token (like our app's password)

In the leftmost menu of the dashboard, click the Circle with "...", and head to *Phone Numbers* under *Super Network.* Click the red "+" circle to search and add a new number, making sure to select one that can at least handle SMS (the other capabilities and location don't really matter). 

Now that we have our phone number we need to create our [TwiML app](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-channel-connect-twilio?WT.mc_id=kimmanners-blog-chcondon&view=azure-bot-service-4.0) so we can wire up our phone number for texting with our bot. 

Select that same circle icon, then click *Programmable SMS*. From that dashboard click *Tools*, then *TwiML App*. Click the red "+" circle to add a new TwiML App. Give it a name, and add the Messaging Request URL: https://sms.botframework.com/api/sms (and, yes, it's an HTTP POST Request). Hit *Save*. 

Navigate back to your new Phone Number. In its Settings, head to Messaging, Set the *Configure With* setting to TwiML App, and the TwiML App to whatever you named your app. Hit Save. 

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/mdexvdjfskjiun7ymnnf.png)

With that, we're ready to head back to our Azure Portal and wire up Twilio. From the portal, select *Channels* under *Bot Management*, and find the Twilio icon under *More channels*. Here, enter your Phone Number, then your Account Sid and Account Auth, which you can find in the Twilio Console for your project. Click *Save*, and test it out with a text. 

![Will Ferrell Buddy the Elf congrats](https://media.giphy.com/media/3otPoS81loriI9sO8o/giphy.gif)

Congrats on building a bot! The [QnA Maker](https://www.qnamaker.ai/) is such an approachable, beginner-friendly tool for setting up a handy bot for any situation, whether you need to [field questions](https://medium.com/microsoftazure/diy-faq-bot-707c6ee4d84b) on your website, seek out a virtual [sommelier](https://dev.to/azure/wine-not-build-a-bot-32fk), or remind yourself how to handle the holidays. 

If you have any questions or need a little extra help making it through this tutorial or the holiday season, I'm just a [tweet](https://twitter.com/kimeejohnson) away, or, you can text this bot at (202) 733-6081 😘🦃🤖