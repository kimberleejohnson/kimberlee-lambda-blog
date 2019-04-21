---
title: Baby’s first Build Week 
date: "2019-04-20"
---

There were so many things I did not know when I went to Uganda [for the first time](https://www.worldreader.org/blog/reading-in-africa-day-one-kits-launch-at-naguru-parents-school/). Like how [MTN Mobile Money](https://www.mtn.co.ug/en/mobile-money/how-to-use/Pages/using-mobile-money.aspx) works, or how long it takes to drive from Entebbe to Kampala, or that in five years I’d be studying web development. 

Kind friends remind me that my previous, seemingly unrelated-to-software-engineering work experience will prove come in handy, and that came somewhat true during my first Lambda School [Build Week](https://twitter.com/Austen/status/1069584101815013377). During Build Week, students at different points in the curriculum come together to build an app and accompanying marketing page. 

I picked Ride for Life, a project that nonprofit [Safe Mothers Safe Babies](http://www.safemotherssafebabies.org/) (SAFE) might eventually build to connect pregnant Ugandan women with safe boda boda (motorcycle) rides to health clinics. Typically women have to walk miles to the nearest clinic, depend on unreliable buses, or hail a taxi that might then tax them unfairly. A secure uber-like service could solve this problem. 

Unfortunately, our team wasn’t able to talk to SAFE directly, but this is where my previous experience came in handy. Since I once worked at a nonprofit that ran projects in Uganda, I could imagine what SAFE might need, that unlike a traditional marketing page targeted at U.S. donors, the Ride for Life page would need to convince Ugandans to sign up for the new service. 

Starting from that premise, I had to build from a mobile-first mindset. Even in my simple pen-to-paper mockups, I quickly recognized my limits. I am not any kind of designer, as the old drawings in my sketchbook reminded me. I had to accept that and move on instead of dwelling on how nothing I draw or design will ever look as good as I hope it will. 

Once I had a good enough [mockup](https://github.com/build-rideForLife/build_rideForLife_marketingA/tree/master/design%20files), I moved on to the basic HTML structure. I did nothing super noteworthy here, aside from commenting when I planned to set particular element to show only on mobile or just on desktop. I specified that “display: none” property later in LESS, along with other styles, like the wonderfully named “bolder” font property. Working from scratch on a website with Less helped me better understand nesting. For example, I needed to set “display: flex” not only on the big “How it works” container wrapping around each of my “how snapshots,” but also on each snapshot itself so I could then align the screenshots and paragraphs each contained in a column, while the three snapshots themselves stayed in a row. Yay, flexbox! 

I had the most fun with JavaScript, telling my page how it should behave when users click different things. I used another hiding trick to build a mobile-only clickable carousel that shows how the app works: 

In HTML, I created one div container class for “carousel,” and another for “carousel-hidden.” I put all of my screenshots in the carousel-hidden class to start. 
Then in [JavaScript](https://github.com/build-rideForLife/build_rideForLife_marketingA/blob/master/Carousel/carousel.js) I used a Constructor function to create new objects out of each hidden carousel slide. Those objects will be added to or removed from the visible carousel when the user clicks, depending on where they are in the slideshow. 
Of course, I turned to my friend “display: none” again to make my “carousel hidden” class really hide my slides, until a user clicks and calls a slide up to the real “carousel” that specifies a whole bunch of display properties. 

My final product lives at this randomly generated [Netlify url](https://peaceful-poincare-7d74b7.netlify.com/) for now. It’s far from perfect, and I still have lots of places to improve, but I’m more excited to focus my efforts on starting other projects from scratch to better my understanding of web design instead of dwelling on making this site perfect. I’m particularly interested in how I might be able to help out some of the nonprofits I currently volunteer with. 

There are still so  many things I don’t know, and I love that. 

// Advice for future and prospective Lambda students 
- Take some time to review past sprint challenges before Build Week. That probably would have saved me at least one headache. 
- Our team lead gave us so much good universal advice, like training yourself to think like a computer and head to the root of a bug that a console gives you, instead of chasing human hypotheses. He also recommended that the team work toward the best version of a few features instead of rushing to complete as many as possible. That makes the argument “I could’ve done more if I had more time!” more valid. 

// How I’ll apply what I learned to this website 
-  Most of all, I have more fluency to go back and understand the Gatsby template I built from. 

// Life outside of Lambda 
- We talked about translation in my fiction class, about how, why, and if it’s worthwhile. We tried a few exercises I’d never considered before, including translating different already-translated English translations into even more modern prose and homophonic translations. It was fun to jog my brain in new ways. 
- My darling took me to see the Swedish sci fi movie [Aniara](https://www.youtube.com/watch?v=3MIlE9R00ik) as part of the SFFILM Festival. Oh boy that was dark and not for the faint of heart. 
- Am reading: [Don’t forget this song](https://www.goodreads.com/book/show/7744091-the-carter-family), a graphic novel about the Carter family because that’s not something I ever thought I’d see (a library find!). 