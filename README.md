# Space Tourism

Frontend Mentor solution for the Space Tourism multipage website challenge, built with React and Vite.

## Table of Contents

- [Space Tourism](#space-tourism)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Features](#features)
  - [Built With](#built-with)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
  - [Available Scripts](#available-scripts)
  - [Notes](#notes)
  - [Author](#author)

## Overview

This project recreates a space-themed travel website with four interactive sections: Home, Destination, Crew, and Technology. The app uses shared state to switch between pages and update the displayed content without a full page reload.

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## Features

- Responsive layout for desktop and smaller screens
- Top navigation for switching between the four sections
- Interactive destination tabs for Moon, Mars, Europa, and Titan
- Crew selector with profile bubbles
- Technology selector with numbered navigation
- Data-driven content loaded from a shared JSON file

## Built With

- React 19
- Vite
- JavaScript (ES modules)
- CSS
- ESLint

## Project Structure

- `src/App.jsx` sets up the page context and current section state
- `src/components/Header.jsx` renders the logo and navigation
- `src/components/Main.jsx` renders the active page heading
- `src/components/MainContent.jsx` switches between the page content blocks
- `src/data.json` stores the destination, crew, and technology data
- `src/assets/` contains the page imagery and shared assets

## Getting Started

Clone the repository, install dependencies, and start the dev server:

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint across the project

## Notes

The current implementation uses local component state and shared context to control page selection. Background classes are also updated per section so each view can use its own visual treatment.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
