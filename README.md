# 👣 Blueprint Diagnostic Screener 🔵

- [Deployed Link](blueprint-fe.vercel.app)

## Table of Contents
- [Introduction](#introduction)
- [Planning](#planning)
- [Features](#features)
- [Future Features](#future-features)
- [Reflection](#reflection)
- [Technologies](#technologies)
- [Contributor](#contributors)

## Introduction
The front-end portion of this take-home challenge was aimed at providing an easy tool to implementa patient survey used to provide valuable information to a patient's provider, and track their progress over time. 

## Planning
[Figma Design](https://www.figma.com/file/cVVctrUwOEFuZs9Ycvm8TF/blueprint-bp?type=design&node-id=0-1&t=G3ctS8Nj4rkGjGHh-0)

In order to effectively design and implement an effective UI covering the guidelines, I relied on Figma to develop wireframes covering the basic user flow. Using Blueprint's current website to inspire the design, I gathered hex values and mimicked the rounded displays from the current UI. 

## Features / User Flow
- On the landing page, a user is given a brief introduction to the survey which will cover the basic purpose and functionality. Upon clicking 'Get Started' the user will be directed to the survey. 
- The survey will display a series of prompts, along with an assortment of 5 preset responses as gathered from the API. As the user makes the selection, the application will track and record responses. 
- As a user clicks through the survey, a progress bar will update with their current survey completion displayed. 
- When a user completes the survey, they will be directed to a page informing them they have completed the survey. They then have the option to 'Start Over' by returning home. 
- Error handling has been incorporated for both `/get` and `/post` requests to the API. 
- As part of the demo, upon completion of the survey the results of the post request from the API (the level-two assesments) will be returned and logged in the console. The API will return an assessment if any of the four categories (depression, mania, anxiety, substance abuse) receive a score greater than or equal to 2 (or 1 in the case of substance abuse). 

## Future Features
If given more time to work on the front-end of this application, my main focuses would be : 

### Security 
- Something that I consider very important for this application is security and confidentiality. Because this information is sensitive and essential to be kept private between client and provider, in the future the front-end would require a secure connection to the API that would not be tampered with. While I have limited knowledge on the subject, tools like HTTPS and SSL could be potential solutions. 
 
### Testing 
- Testing is essential to ensuring the application is behaving and displaying the expected user interface. If given more time on this application, I would have implemented testing in Cypress. Through this testing, I would have individually tested each of the 3 displayed screens to ensure the correct text, buttons and progress bar were visible. Additionally, I would have stubbed the endpoints from the API to ensure the data was returning as expected. I'm a firm believer in testing and was very tempted to implement ! 

### Accessibility
- Accessibility should be considered at the forefront of our web-building, not as an after thought. AND, it's still something I'm passionately learning more about. While the application currently does have a lighthouse score of 100%, some things I would do in the future would include manually testing the site with voice over, and ensuring those with motor and/ or visual impairments could effectively use this tool. Lighthouse is a great accessibility tool but does not account for every use case. Aria labels are included in the progress bar as I felt that would be a special consideration for screen readers, but the entire app could use an accessibility comb-over. 

## Reflection
Overall I had a fantastic time building out this UI. I had never developed a survey style application, and enjoyed the process of recording responses and moving the user throughout the prompts. 

### Technologies
- React
- Next.js
- Styled in Tailwind.css
- Deployed through Vercel

### Contributors
- [Catlyn Bowles](https://www.linkedin.com/in/catlyn-bowles/)
