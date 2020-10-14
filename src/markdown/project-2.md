---
title: "Device Bot"
project-id: 2
project: true
summary: false
featuredImage: ../images/slackbot.png
language: "JavaScript, Node JS"
url: undefined
date: "November 2019"
---

When I started as a Test Analyst at Adapptor, I was continually looking for our mobile test devices, finding them all over the office and hidden under things on developers desks. I spent a bit of time thinking of a solution to this problem, I needed to find a way to check devices in and out of storage, assign the device to a specific employee, but keep it accessible and easy to use. No one wants to add another tool to their list. 

I eventually decided to develop a bot to work on our communication platform - Slack. At this point, I was very new to development and the language I was most comfortable with, R, wasn't going to help me here. I found a [library](https://github.com/mishk0/slack-bot-api) and decided to drive into the world of JavaScript. 

This bot has been a long term project of mine. Initially it started out with pretty basic functionality - you could request to see all devices we had, specify an operating system ask about a particular device using it's ID number. You could also ask to check out a device, and the bot would change the location of that device to your slack username, and then check it back in which would change the location back to storage. 
Overtime, I've refactored the code as I've learnt more about writing functions and using JS methods. Users can now update the notes and OS version of a device, and add a new device to the list. 

Biggest challenge with developing this bot (other than learning JavaScript)? Using regex for recognising user requests! I'd hope to find time in the near future to re-develop this bot using natural language processing. 

I deployed my bot to an EC2 instance on AWS using docker.
