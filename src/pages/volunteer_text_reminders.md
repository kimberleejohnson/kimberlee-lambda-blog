---
title: ❣️ Remind volunteers when and where to be with Twilio, Airtable, and Zapier 
date: '2020-04-30'
---
_Helping COVID-19 community response teams coordinate neighbors helping neighbors. This post was originally shared on [Dev.to](https://dev.to/kimberleejohnson/remind-volunteers-when-and-where-to-be-with-twilio-airtable-and-zapier-34a3)_. 

## Automating volunteer reminder texts for COVID-19 community response teams 

If we follow Mr. Rogers’ advice to [look for the helpers](https://www.youtube.com/watch?v=-LGHtc_D328) right now, we will find them. Team Rubicon has [distributed hundreds of thousands of masks and gloves](https://twitter.com/TeamRubicon/status/1255534812212817920) to healthcare workers in Colorado. In New York City, Backpacks for the Street has [shared 1,200 COVID-19 prevention kits](https://www.goodmorningamerica.com/living/story/group-handing-backpacks-full-supplies-nycs-homeless-combat-70330087) with residents experiencing homelessness. Yesterday, TogetherSF volunteers [delivered 35,000 steaks](https://www.sfchronicle.com/bayarea/article/Bay-Area-food-banks-have-a-surprise-for-15230171.php) to Bay Area food banks.

Organizing these efforts takes a lot of communication, and it can be challenging to stay on top of it all, especially as a resource-constrained nonprofit. It would be impossible to manually text every volunteer who signs up for a shift to remind them when and where to be, but [Airtable](https://airtable.com), [Twilio](https://twilio.com/), and [Zapier](https://zapier.com/) can automate that for us. 

### Setting up an Airtable Base 

![David Rose asks Alexis Rose if it is a spreadsheet](https://media.giphy.com/media/l0ExoJBGYUelaOiME/giphy.gif)

[Airtable](https://airtable.com) is a database spreadsheet hybrid that helps with all things organization. The nonprofit I work with uses Airtable to collect volunteer sign-ups and to match them with volunteering opportunities, so I dived into their existing system to see how I could work with it. 

After looking at their setup and reading up on Airtable’s [docs](https://airtable.com/api) and [community forums](https://community.airtable.com/), I learned I would need to change a few things to get automated text reminders working. 

Have a look at the [Volunteer Coordination Base template](https://airtable.com/invite/l?inviteId=inv9JYUH1AMIDWkt1&inviteToken=142155a70ea25d910a65c301ad1288769800d97a8920f44d54d1bf63d0e051ba), and I’ll walk you through what’s special. 

The **Events** tab (or table) lists out the volunteering opportunities that come our way, including who asked for help (typically somebody in the **Needs** table), the kind of help they're asking for, and when and where we've scheduled a time to support.

The first change I made was to make the _When_ field in **Events** more granular, adding in a timestamp. It took me longer than I’d like to admit to spot the “Include a time field” toggle in Airtable, but can I really be blamed -- what is time these days? 

![Time Toggle within Airtable](https://dev-to-uploads.s3.amazonaws.com/i/mbtnunnuymb81vfs8mbx.png)

While there is a Date type for columns in Airtable, there is no separate Time type, so I needed to come up with a workaround. I knew I needed to send a text reminder _n_ hours before an event, so a column that calculated the number of hours until an event cold fit my use case. I added in an _Hours Until Event_ formula column to sort it out with `DATETIME_DIFF({When}, NOW(), 'hours')`. 

![Hours Until Event column in Airtable setup](https://dev-to-uploads.s3.amazonaws.com/i/d07nohbwqnraux6hj4dk.png)

The nonprofit I worked with already included a _Matched Volunteers_ column to list out the volunteers that would be at an event. Next up I needed to get all of those volunteers’ phone numbers into the *Events* table too. I used a Lookup column type to grab the phone numbers from _Volunteers Matched_. 

![Volunteer Phone Numbers column in Airtable](https://dev-to-uploads.s3.amazonaws.com/i/u871lee2d0471f2g3vcu.png)

This next part might spare you the time I spent debugging later (Again, what is time, anyway?). We need to convert our numbers into [E.164 format](https://www.twilio.com/docs/glossary/what-e164) so that we can text them. I created a new _Formatted Phone Numbers_ column with a formula that added the necessary +1 for this US-based nonprofit (it’s really +{CountryCode}), replaced all of the nonnumeric characters with empty strings using SUBSTITUTE, and made sure all of the volunteers’ numbers would be in a comma separated list using ARRAYJOIN: `SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(ARRAYJOIN({Volunteer Phone Numbers}, ","),"(","+1"),")",""), "-","")`

![Formatted phone number column setup](https://dev-to-uploads.s3.amazonaws.com/i/jhxqf5ast3vmvhd5k9pq.png)

With all that in place, I set up an [Airtable View](https://support.airtable.com/hc/en-us/articles/202624989-Guide-to-views) to filter for records where _Hours Until Event_ hits the point when I need to send a text, so fewer than four hours before. I also added a filter to make sure we’re only looking at events that haven’t happened yet, where their _Hours Until Event_ hasn’t dropped below zero. I called this View _Volunteer Reminder Texts_.

![Airtable View setup](https://dev-to-uploads.s3.amazonaws.com/i/13jdjwus3bxmgjxwh35z.png)

Airtable should be good to go from here! Time to leave spreadsheets behind for a minute and head over to Twilio. 

### Setting up Twilio

![Phone with blinking heart nose](https://media.giphy.com/media/ff6IT8IzC5hEQ/giphy.gif) 

Developers use [Twilio](www.twilio.com) to programmatically send and receive calls and texts, but the limit really does not exist. [Chloe Condon](https://twitter.com/ChloeCondon) and I once used it to build a [Mean Girls’ day bot](https://dev.to/twilio/trying-to-make-fetch-errr-a-post-request-happen-12ad), and [Twilio Champions](https://www.twilio.com/champions) get up to all kinds of projects.  

From my experience with Twilio, I knew it could handle texting this nonprofit’s volunteers. Here’s where to [sign up for an account](www.twilio.com/referral/avaKmb) if you don’t have one already. You will also need a Twilio phone number, which you can set up from your [Console](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console). 

### Putting it all together with Zapier 

[Zapier](https://zapier.com/) automates connecting different apps together (you can sign up [here](https://zapier.com/sign-up/)). 

Those apps include [Airtable and Twilio](https://airtable.com/integrations/twilio). I clicked “Connect these Apps” and had my [Airtable API key](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-) and [Twilio API key](https://www.twilio.com/docs/iam/keys/api-key) both handy for the setup process.

Once the accounts were linked, I specified that when a new record popped up in an Airtable View, specifically  _Volunteer Reminder Texts_, Zapier should tell Twilio to text those volunteers. Since my _Hours Until Event_ column automatically calculates, new records are added to the View automatically, meaning the texts will be automatic too. 

And, since Zapier pulls in all the data from the View, it also automatically pulls in the specific _When_ and _Where_ for each record, so your texts will be personalized for every event. 

![Zapier setup](https://dev-to-uploads.s3.amazonaws.com/i/qwyruoibqy3htww6wfaa.png)

You should see whatever you specify in Zapier show up in your test text, and, if you turn on the Zap, they’ll show up again four hours before the event too: 

![Screenshot of text](https://dev-to-uploads.s3.amazonaws.com/i/5rlg74b5a14g10k3lrdg.PNG)

## After the event

And that was it! There are lots of things I could do to improve, and I know there's loads more I can do with Twilio and Airtable. We’re considering automated feedback surveys once an event is done, for example. 

I’m excited to explore all the options. I thought these automated reminders would involve a lot more time and work, and I was surprised to find a practically no code solution. This was another lesson for me that it’s always good to start looking at systems already in place, meeting your users, in my case volunteer organizers, where they’re at, and understanding their needs before jumping into building something from scratch. I love when existing tools free up time to be a helper in other ways. 

![](https://media.giphy.com/media/33Gr5O88PgslOninGo/giphy.gif)

### Resources 
* [Volunteer Coordination Database template](https://airtable.com/invite/l?inviteId=inv9JYUH1AMIDWkt1&inviteToken=142155a70ea25d910a65c301ad1288769800d97a8920f44d54d1bf63d0e051ba)
* [Github repository](https://github.com/kimberleejohnson/volunteer-coordination/blob/master/README.md)
* If you need help with this or anything else, say hi any time at `hello@kimberlee.dev` 

_And, a note! The cover photo for this post is courtesy [fnnch and ABC News](https://abc7news.com/coronavirus-san-francisco-update-sf-art-fnnch/6096628/)_.

