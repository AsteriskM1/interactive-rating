# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Totally, didn't forget to write this thing.
Anyway, again in this one used the same approach I did with my previous one. Installed **TailwindCSS** and structured my contents.
But, this time I used **BrowserRouter** to Route between the Feedback and Thanks page.
I can't for the life of me figure out how to the rating scale isn't on focus or clickable.
Wait, figured out how to make it be on focus state, just had to change the div to button in Rating component.
Hallelujah! I did it. I figured out how to change the state. Well, I used ChatGPT so it's not exactly "I". But, now I know how do *pass props from child to a parent component*.

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- React Hooks
- BrowserRouter
- Vite
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/docs/installation) - Utility-first CSS framework

### What I learned

I learned once again to how div inside div affects others. Also learned how to use *callback funtions* to pass props from a child to a parent component. 
Learned that focus in **TailwindCSS** should be button. Learned about **BrowserRouters**. Also, found out that I don't have to change the font style in individual properties, I can just do in the *root* of the *index.css*. And also using the body properties in index.css to center the element.

### Continued development
 
I definitely want to work with Routes again to create multi-page website. Also understand React Hooks and callback functions more.


### Useful resources

- [ChatGPT](https://chat.openai.com/chat) - This helped me with the callback function to change the rating scale based on what is clicked.

## Author

- Website - [Arthur](https://3dportfolio-m1.netlify.app/)
- GitHub - [AsteriskM1](https://github.com/AsteriskM1)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/AsteriskM1)
