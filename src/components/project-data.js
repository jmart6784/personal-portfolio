const projectData = [
  {
    id: 1,
    image: "clip-scroll.png",
    title: "Clip Scroll",
    description:
      "This project is currently a work in progress. It features both the YouTube and Reddit API with the purpose of gathering vertical videos and displayling them.",
    tags: "Rails, React, Javascript, SCSS",
    live: "clip-scroll.mkv",
    github: "https://github.com/jmart6784/clip-scroll",
    status: "demo",
  },
  {
    id: 2,
    image: "quiz-me.png",
    title: "Quiz Me",
    description:
      "The main purpose of this project was to practice Rails APIs with React. And to create a logical quiz application using those tools.",
    tags: "Rails, React, Javascript, SCSS",
    live: "https://quiz-me.fly.dev/",
    github: "https://github.com/jmart6784/quiz-me",
    status: "live",
  },
  {
    id: 3,
    image: "quick-chats.png",
    title: "Quick Chats",
    description:
      "The purpose of this project was to practice actioncable websockets. This app features a real time chat without a page refresh.",
    tags: "Rails, Javascript, SCSS",
    live: "https://quick-chats.fly.dev",
    github: "https://github.com/jmart6784/chat-app",
    status: "live",
  },
  {
    id: 4,
    image: "instagram.png",
    title: "Instagram clone",
    description:
      "A full-stack Instagram clone app that uses Rails as the back-end. This project is also mobile friendly.",
    tags: "Rails, Javascript, SCSS",
    live: "https://instagram-app.fly.dev/",
    github: "https://github.com/jmart6784/instagram",
    status: "live",
  },
  {
    id: 5,
    image: "odinbook.png",
    title: "Odin Book",
    description:
      "My first attempt at making a full stack application. My second attempt was an Instagram clone. I also implemented omniauth support for Facebook sign in.",
    tags: "Rails, Javascript, CSS",
    live: "https://odinbook.fly.dev/",
    github: "https://github.com/jmart6784/odin-facebook",
    status: "live",
  },
  {
    id: 6,
    image: "waldo.png",
    title: "Where's Waldo?",
    description: "Character finding game built with rails as the back-end",
    tags: "Rails, Javascript, SCSS",
    live: "https://wheres-waldo-game.fly.dev/",
    github: "https://github.com/jmart6784/waldo",
  },
  {
    id: 7,
    image: "c.png",
    title: "C# Tic Tac Toe",
    description:
      "A Tic Tac Toe game made for the purpose of trying out C#. This project was completed after watching a general introduction video on C#.",
    tags: "C#",
    live: "http://tpcg.io/_39VKCM",
    github: "https://github.com/jmart6784/csharp-tic-tac-toe",
    status: "live",
  },
  {
    id: 8,
    image: "meme-generator.png",
    title: "Meme generator",
    description:
      "A React based application that utilizes a meme API that fetches meme data in JSON format. This app also contains a download feature.",
    tags: "React, Javascript, SCSS",
    live: "https://jmart6784.github.io/meme-generator/",
    github: "https://github.com/jmart6784/meme-generator",
    status: "live",
  },
  {
    id: 9,
    image: "rails-react-recipes.png",
    title: "Rails & React recipes",
    description:
      "The purpose of this project was to practice integrating Ruby on Rails and React together.",
    tags: "Rails, React, SCSS",
    live: "https://rails-react-recipes.fly.dev/#/",
    github: "https://github.com/jmart6784/rails-react-recipes",
    status: "live",
  },
  {
    id: 10,
    image: "cart.png",
    title: "Shopping Cart",
    description: "A shopping cart React app that uses React router",
    tags: "React, SCSS",
    live: "https://jmart6784.github.io/shopping-cart/",
    github: "https://github.com/jmart6784/shopping-cart",
    status: "live",
  },
  {
    id: 11,
    image: "battleship.png",
    title: "Battleship",
    description:
      "A Battleship game that was built for the purpose of practicing with Javascript and Jest.",
    tags: "Javascript, Jest, SCSS",
    live: "https://jmart6784.github.io/battleship/",
    github: "https://github.com/jmart6784/battleship",
    status: "live",
  },
  {
    id: 12,
    image: "memorycard.png",
    title: "Memory Card",
    description: "A React app that uses functional components and hooks.",
    tags: "React, SCSS",
    live: "https://jmart6784.github.io/memory-card/",
    github: "https://github.com/jmart6784/memory-card",
    status: "live",
  },
  {
    id: 13,
    image: "odinweather.png",
    title: "Odin Weather",
    description:
      "A weather app made for the purpose of asynchronous Javascript and React programming using a third party weather API.",
    tags: "React, Javascript, SCSS",
    live: "https://jmart6784.github.io/odin-weather/",
    github: "https://github.com/jmart6784/odin-weather",
    status: "live",
  },
  {
    id: 14,
    image: "flickr.png",
    title: "Flickr Feed",
    description: "Practice using the Flickr API with Rails.",
    tags: "Rails",
    live: "https://flickr-gallery.fly.dev/",
    github: "https://github.com/jmart6784/my-flickr-feed",
    status: "live",
  },
  {
    id: 15,
    image: "kittens.png",
    title: "Odin Kittens",
    description:
      "The purpose of this project was to practice creating a JSON API with rails.",
    tags: "Rails, Javascript, SCSS",
    live: "https://kittens-api.fly.dev/",
    github: "https://github.com/jmart6784/odin-kittens",
    status: "live",
  },
  {
    id: 16,
    image: "library.png",
    title: "Odin Library",
    description:
      "A Library app to track which books you've read. The purpose was to practice Javascript objects and local storage.",
    tags: "Javascript, SCSS",
    live: "https://jmart6784.github.io/odin-library/",
    github: "https://github.com/jmart6784/odin-library",
    status: "live",
  },
  {
    id: 17,
    image: "tictactoe.png",
    title: "Tic Tac Toe",
    description:
      "Tic Tac Toe game created for the purpose of practicing Javascript modules and factory functions.",
    tags: "Javascript, SCSS",
    live: "https://jmart6784.github.io/tic-tac-toe/",
    github: "https://github.com/jmart6784/tic-tac-toe",
    status: "live",
  },
  {
    id: 18,
    image: "gridframework.png",
    title: "CSS grid Framework",
    description: "This project aims to build a simple grid framework.",
    tags: "CSS, SCSS",
    live: "https://jmart6784.github.io/grid-framework/",
    github: "https://github.com/jmart6784/grid-framework",
    status: "live",
  },
  {
    id: 19,
    image: "responsivedesign.png",
    title: "Responsive Design",
    description: "Practice with responsive design using media queries.",
    tags: "CSS",
    live: "https://jmart6784.github.io/odin-responsive-design/",
    github: "https://github.com/jmart6784/odin-responsive-design",
    status: "live",
  },
  {
    id: 20,
    image: "hangman.png",
    title: "Hangman",
    description: "A Sinatra based hangman game",
    tags: "Sinatra, CSS",
    live: "https://sinatra-hangman.fly.dev/",
    github: "https://github.com/jmart6784/sinatra-hangman",
    status: "live",
  },
  {
    id: 21,
    image: "cipher.png",
    title: "Ceaser's cipher",
    description: "Implmentation of Ceasar's cipher using Sinatra",
    tags: "Sinatra, CSS",
    live: "https://sinatra-cipher.fly.dev/",
    github: "https://github.com/jmart6784/sinatra-cipher",
    status: "live",
  },
  {
    id: 22,
    image: "calculator.png",
    title: "Odin Calculator",
    description: "A simple calculator app built to practice with Javascript",
    tags: "Javascript, SCSS",
    live: "https://jmart6784.github.io/odin-calculator/",
    github: "https://github.com/jmart6784/odin-calculator",
    status: "live",
  },
  {
    id: 23,
    image: "bootstrap.png",
    title: "Bootstrap practice",
    description: "Practice using Bootstrap by cloning the Newsweek website",
    tags: "Bootstrap",
    live: "https://jmart6784.github.io/odin-bootstrap/",
    github: "https://github.com/jmart6784/odin-bootstrap",
    status: "live",
  },
  {
    id: 24,
    image: "booker.png",
    title: "Odin Flight Booker",
    description: "A Flight booking app made using Rails",
    tags: "Rails, CSS",
    live: "https://odin-flight-booker365.herokuapp.com/",
    github: "https://github.com/jmart6784/odin-flight-booker",
    status: "live",
  },
  {
    id: 25,
    image: "todo.png",
    title: "Todo app",
    description:
      "Javascript based todo app used to practice factory functions and modules.",
    tags: "Javascript, SCSS",
    live: "https://jmart6784.github.io/odin-todo/",
    github: "https://github.com/jmart6784/odin-todo",
    status: "live",
  },
  {
    id: 26,
    image: "pomodoro.png",
    title: "Pomodoro Clock",
    description:
      "A Pomodoro clock made to practice programming with Javascript.",
    tags: "Javascript, CSS",
    live: "https://jmart6784.github.io/Pomodoro-Clock/",
    github: "https://github.com/jmart6784/Pomodoro-Clock",
    status: "live",
  },
  {
    id: 27,
    image: "etch.png",
    title: "Etch-a-sketch",
    description:
      "Etch-a-sketch app made to practice programming with Javascript.",
    tags: "Javascript, CSS",
    live: "https://jmart6784.github.io/Etch-a-sketch/",
    github: "https://github.com/jmart6784/Etch-a-sketch",
    status: "live",
  },
  {
    id: 28,
    image: "restaurant.png",
    title: "Odin Restaurant",
    description:
      "The purpose of this project was to practice with webpacker and npm, exporting and importing files.",
    tags: "Javascript, SCSS",
    live: "https://jmart6784.github.io/odin-restaurant/",
    github: "https://github.com/jmart6784/odin-restaurant",
    status: "live",
  },
  {
    id: 29,
    image: "teardown.png",
    title: "Design teardown",
    description:
      "The purpose of this project was to practice color coding The Smashing Magazine's visual weight.",
    tags: "CSS",
    live: "https://jmart6784.github.io/odin-design-teardown/",
    github: "https://github.com/jmart6784/odin-design-teardown",
    status: "live",
  },
  {
    id: 30,
    image: "apple.png",
    title: "Odin Apple",
    description:
      "The purpose of this project was to practice cloning a website.",
    tags: "CSS",
    live: "https://jmart6784.github.io/Odin-Apple/",
    github: "https://github.com/jmart6784/Odin-Apple",
    status: "live",
  },
  {
    id: 31,
    image: "odintimes.png",
    title: "Odin Times",
    description: "Practice cloning a website (The NY Times).",
    tags: "CSS",
    live: "https://jmart6784.github.io/Odin-ny-times/",
    github: "https://github.com/jmart6784/Odin-ny-times",
    status: "live",
  },
];

export default projectData;
