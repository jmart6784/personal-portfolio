const projectData = [
  {
    id: 1,
    Image: "instagram.png",
    title: "Instagram clone",
    description:
      "A full-stack Instagram clone app that uses Rails as the back-end. This project is also mobile friendly.",
    tags: "Rails, Javascript, SCSS",
    live: "https://cloned-instagram-app.herokuapp.com/",
    github: "https://github.com/jmart6784/instagram",
  },
  {
    id: 2,
    Image: "odinbook.png",
    title: "Odin Book",
    description:
      "My first attempt(Instgram clone is 2nd) at making a full stack application. I also implemnted omniauth support for Facebook sign in.",
    tags: "Rails, Javascript, CSS",
    live: "https://odinbook-app.herokuapp.com",
    github: "https://github.com/jmart6784/odin-facebook",
  },
  {
    id: 3,
    Image: "waldo.png",
    title: "Where's Waldo?",
    description: "Character finding game built with rails as the back-end",
    tags: "Rails, Javascript, SCSS",
    live: "https://odin-wheres-waldo-app.herokuapp.com/",
    github: "https://github.com/jmart6784/waldo",
  },
  {
    id: 4,
    Image: "cart.png",
    title: "Shopping Cart",
    description: "A shopping cart React app that uses React router",
    tags: "React, SCSS",
    live: "https://jmart6784.github.io/shopping-cart/",
    github: "https://github.com/jmart6784/shopping-cart",
  },
  {
    id: 5,
    Image: "battleship.png",
    title: "Battleship",
    description:
      "A Battleship game that was built for the purpose of practicing with Javascript and Jest.",
    tags: "Javascript, Jest, SCSS",
    live: "https://jmart6784.github.io/battleship/",
    github: "https://github.com/jmart6784/battleship",
  },
  {
    id: 6,
    Image: "memorycard.png",
    title: "Memory Card",
    description: "A React app that uses functional components and hooks.",
    tags: "React, SCSS",
    live: "https://jmart6784.github.io/memory-card/",
    github: "https://github.com/jmart6784/memory-card",
  },
  {
    id: 7,
    Image: "odinweather.png",
    title: "Odin Weather",
    description:
      "A weather app made for the purpose of asynchronous Javascript and React programming using a third party weather API.",
    tags: "React, Javascript, SCSS",
    live: "https://jmart6784.github.io/odin-weather/",
    github: "https://github.com/jmart6784/odin-weather",
  },
  {
    id: 8,
    Image: "flickr.png",
    title: "Flickr Feed",
    description: "Practice using the Flickr API with Rails.",
    tags: "Rails",
    live: "https://odin-flickr.herokuapp.com/",
    github: "https://github.com/jmart6784/my-flickr-feed",
  },
  {
    id: 9,
    Image: "kittens.png",
    title: "Odin Kittens",
    description:
      "The purpose of this project was to practice creating a JSON API with rails.",
    tags: "Rails, Javascript, SCSS",
    live: "https://odin-kittens-api.herokuapp.com/",
    github: "https://github.com/jmart6784/odin-kittens",
  },
  {
    id: 10,
    Image: "library.png",
    title: "Odin Library",
    description:
      "A Library app to track which books you've read. The purpose was to practice Javascript objects and local storage.",
    tags: "Javascript, SCSS",
    live: "https://jmart6784.github.io/odin-library/",
    github: "https://github.com/jmart6784/odin-library",
  },
  {
    id: 11,
    Image: "tictactoe.png",
    title: "Tic Tac Toe",
    description:
      "Tic Tac Toe game created for the purpose of practicing Javascript modules and factory functions.",
    tags: "Javascript, SCSS",
    live: "https://jmart6784.github.io/tic-tac-toe/",
    github: "https://github.com/jmart6784/tic-tac-toe",
  },
  {
    id: 12,
    Image: "gridframework.png",
    title: "CSS grid Framework",
    description: "This project aims to build a simple grid framework.",
    tags: "CSS, SCSS",
    live: "https://jmart6784.github.io/grid-framework/",
    github: "https://github.com/jmart6784/grid-framework",
  },
  {
    id: 13,
    Image: "responsivedesign.png",
    title: "Responsive Design",
    description: "Practice with responsive design using media queries.",
    tags: "CSS",
    live: "https://jmart6784.github.io/odin-responsive-design/",
    github: "https://github.com/jmart6784/odin-responsive-design",
  },
  {
    id: 14,
    Image: "hangman.png",
    title: "Hangman",
    description: "A Sinatra based hangman game",
    tags: "Sinatra, CSS",
    live: "https://sinatra4567-hangman.herokuapp.com/",
    github: "https://github.com/jmart6784/sinatra-hangman",
  },
  {
    id: 15,
    Image: "cipher.png",
    title: "Ceaser's cipher",
    description: "Implmentation of Ceasar's cipher using Sinatra",
    tags: "Sinatra, CSS",
    live: "https://caesars-cipher4567.herokuapp.com/",
    github: "https://github.com/jmart6784/sinatra-cipher",
  },
  {
    id: 16,
    Image: "calculator.png",
    title: "Odin Calculator",
    description: "A simple calculator app built to practice with Javascript",
    tags: "Javascript, SCSS",
    live: "https://jmart6784.github.io/odin-calculator/",
    github: "https://github.com/jmart6784/odin-calculator",
  },
  {
    id: 17,
    Image: "bootstrap.png",
    title: "Bootstrap practice",
    description: "Practice using Bootstrap by cloning the Newsweek website",
    tags: "Bootstrap",
    live: "https://jmart6784.github.io/odin-bootstrap/",
    github: "https://github.com/jmart6784/odin-bootstrap",
  },
  {
    id: 18,
    Image: "booker.png",
    title: "Odin Flight Booker",
    description: "A Flight booking app made using Rails",
    tags: "Rails, CSS",
    live: "https://odin-flight-booker365.herokuapp.com/",
    github: "https://github.com/jmart6784/odin-flight-booker",
  },
  {
    id: 19,
    Image: "todo.png",
    title: "Todo app",
    description:
      "Javascript based todo app used to practice factory functions and modules.",
    tags: "Javascript, SCSS",
    live: "https://jmart6784.github.io/odin-todo/",
    github: "https://github.com/jmart6784/odin-todo",
  },
  {
    id: 20,
    Image: "pomodoro.png",
    title: "Pomodoro Clock",
    description:
      "A Pomodoro clock made to practice programming with Javascript.",
    tags: "Javascript, CSS",
    live: "https://jmart6784.github.io/Pomodoro-Clock/",
    github: "https://github.com/jmart6784/Pomodoro-Clock",
  },
  {
    id: 21,
    Image: "etch.png",
    title: "Etch-a-sketch",
    description:
      "Etch-a-sketch app made to practice programming with Javascript.",
    tags: "Javascript, CSS",
    live: "https://jmart6784.github.io/Etch-a-sketch/",
    github: "https://github.com/jmart6784/Etch-a-sketch",
  },
  {
    id: 22,
    Image: "restaurant.png",
    title: "Odin Restaurant",
    description:
      "The purpose of this project was to practice with webpacker and npm, exporting and importing files.",
    tags: "Javascript, SCSS",
    live: "https://jmart6784.github.io/odin-restaurant/",
    github: "https://github.com/jmart6784/odin-restaurant",
  },
  {
    id: 23,
    Image: "teardown.png",
    title: "Design teardown",
    description:
      "The purpose of this project was to practice color coding The Smashing Magazine's visual weight.",
    tags: "CSS",
    live: "https://jmart6784.github.io/odin-design-teardown/",
    github: "https://github.com/jmart6784/odin-design-teardown",
  },
  {
    id: 24,
    Image: "apple.png",
    title: "Odin Apple",
    description:
      "The purpose of this project was to practice cloning a website.",
    tags: "CSS",
    live: "https://jmart6784.github.io/Odin-Apple/",
    github: "https://github.com/jmart6784/Odin-Apple",
  },
  {
    id: 25,
    Image: "odintimes.png",
    title: "Odin Times",
    description: "Practice cloning a website (The NY Times).",
    tags: "CSS",
    live: "https://jmart6784.github.io/Odin-ny-times/",
    github: "https://github.com/jmart6784/Odin-ny-times",
  },
];

export default projectData;
