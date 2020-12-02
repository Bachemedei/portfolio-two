---
title: "She Codes Admin Portal"
project: true
summary: "A group project to create a portal for She Codes admin to manage mentor onboarding and events"
project-id: 8
featuredImage: ../images/project8.png
language: "Python, Django Rest Framework, ReactJS, CSS"
url: https://shecodes-portal-react.herokuapp.com/
date: "November 2020"
---

As the final part of my course at She Codes, I worked together with 4 other members of the cohort to create an administration portal for She Codes admin. We were tasked with creating a web app to manage the onboarding process of mentors as well as view upcoming events. 
The backend was created using Django Rest Framework, and the frontend with React. 

After thinking about the task and wanting to reduce staff needing to double-handle tasks, I decided to use the Google Calendar API to integrate calendar events with our web app. The integration syncs both ways, so changes to events in the web app are visible immediately in Google, and visa versa. Events can also be created and deleted using either platform. 
Given users were already required to authenticate with Google to grand calendar access, I also integrated Google sign in. When users visit the web app, they are able to sign up and/or log in with their Google account, which automatically creates user in the backend (if necessary) and generates a client auth token. 
Implementing these features was a huge challenge for me, but it was a brilliant opportunity to learn about authentication and interating with Google API's. 

In this project, I also worked on parsing CSV files in React, creating a custom auto-complete multi-select input, calendar views, and using Git in a team. 