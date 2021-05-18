import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import projectData from "./project-data";
import ProjectTile from "./ProjectTile";
import skillsData from "./skills-data";
import SkillCard from "./SkillCard";
import globalScript from "./global-Script";

const Home = () => {
  const skillsJsx = skillsData.map((skill) => {
    return <SkillCard skill={skill} key={skill.id} />;
  });

  const projectsJsx = projectData.slice(0, 6).map((project) => {
    return <ProjectTile key={project.id} project={project} />;
  });

  useEffect(() => {
    // Global script needed for most pages
    globalScript();

    let flipTextInterval;
    let aboutMeBlinkerInterval;
    let aboutMeTypeInterval;

    // Mobile 100vh style fix
    const appHeight = () => {
      const doc = document.querySelector("body");
      const staticDiv = document.getElementById("static-index-container");

      if (document.body.contains(staticDiv)) {
        staticDiv.style.marginTop = `${window.innerHeight}px`;
      }

      doc.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener("resize", appHeight);
    appHeight();

    // Flip text animation on home pag
    let words = document.querySelectorAll(".word");

    if (document.body.contains(document.querySelector(".word"))) {
      let wordArray = [];
      let currentWord = 0;

      words[currentWord].style.opacity = 1;

      words.forEach((word) => {
        splitLetters(word);
      });

      // Change word and animate it with css class name
      const changeWord = () => {
        let cw = wordArray[currentWord];
        let nw =
          currentWord === words.length - 1
            ? wordArray[0]
            : wordArray[currentWord + 1];

        // animate current word
        for (let i = 0; i < cw.length; i++) {
          animateLetterOut(cw, i);
        }

        // animate next word
        for (let i = 0; i < nw.length; i++) {
          nw[i].className = "letter behind";
          nw[0].parentElement.style.opacity = 1;
          animateLetterIn(nw, i);
        }

        currentWord =
          currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
      };

      // Add class name to animate word
      const animateLetterOut = (cw, i) => {
        setTimeout(function () {
          cw[i].className = "letter out";
        }, i * 80);
      };

      // Add class name to animate word
      const animateLetterIn = (nw, i) => {
        setTimeout(() => {
          nw[i].className = "letter in";
        }, 340 + i * 80);
      };

      // split words into spans which contain letters
      function splitLetters(word) {
        let content = word.textContent;
        word.textContent = "";
        let letters = [];

        for (let i = 0; i < content.length; i++) {
          let letter = document.createElement("span");
          letter.className = "letter";

          if (content.charAt(i) === "_") {
            letter.style.opacity = "0";
          }

          letter.textContent = content.charAt(i);
          word.appendChild(letter);
          letters.push(letter);
        }

        wordArray.push(letters);
      }

      changeWord();
      flipTextInterval = setInterval(changeWord, 4000);

      // Hide flipping text when it gets scrolled past
      const hideFlip = () => {
        let flipText = document.getElementById("flip-parent-div");

        if (document.body.contains(flipText)) {
          flipText.style.opacity = "1";

          if (window.scrollY > flipText.offsetTop + flipText.offsetHeight) {
            if (flipText.style.opacity === "1") {
              flipText.style.opacity = "0";
            } else {
              flipText.style.opacity = "1";
            }
          }
        }
      };

      hideFlip();

      window.addEventListener("scroll", hideFlip);
    }

    // About me html code animation
    let amCode = document.getElementById("am-code");
    let blinker = document.getElementById("text-blinker");

    if (document.body.contains(amCode)) {
      blinker.style.opacity = "1";

      // text editor blinker animation
      aboutMeBlinkerInterval = setInterval(() => {
        if (blinker.style.opacity === "1") {
          blinker.style.opacity = "0";
        } else {
          blinker.style.opacity = "1";
        }
      }, 500);

      let ary = "<h1>Hello World!</h1>".split("");

      let counter = 0;
      let finished = false;

      const typer = () => {
        if (amCode.textContent.length > 21) {
          amCode.textContent = "";
          counter = 0;
        } else {
          if (amCode.textContent !== "<h1>Hello World!</h1>" && !finished) {
            finished = false;
            amCode.textContent += ary[counter];
            counter += 1;
          } else {
            setTimeout(() => {
              finished = true;

              if (amCode.textContent === "") {
                setTimeout(() => {
                  finished = false;
                }, 2500);
              }

              counter = 0;

              if (amCode.textContent.length !== 0) {
                amCode.textContent = amCode.textContent.substring(
                  0,
                  amCode.textContent.length - 1
                );
              }
            }, 2500);
          }
        }
      };

      aboutMeTypeInterval = setInterval(typer, 250);
    }

    return () => {
      clearInterval(flipTextInterval);
      clearInterval(aboutMeBlinkerInterval);
      clearInterval(aboutMeTypeInterval);
      window.removeEventListener("resize", () => {});
    };
  });

  return (
    <div>
      <div id="static-vid-div" className="video-container bg-static-index">
        <video
          src="../../images/vid1.mp4"
          className="static-index-video"
          playsInline
          autoPlay
          muted
          loop
        ></video>

        <div id="flip-parent-div">
          <div className="text">
            <p className="flip-p">Hello I am</p>
            <p className="flip-p">
              <span className="word">well_rounded</span>
              <span className="word">a_full_stack_developer</span>
              <span className="word">an_active_learner</span>
              <span className="word">a_problem_solver</span>
              <span className="word">passionate</span>
              <span className="word">open_minded</span>
            </p>
          </div>
        </div>
      </div>

      <div id="static-index-container">
        <div id="about-me-div" className="content">
          <div>
            <h1 className="sec-title line-through">About me</h1>

            <p className="about-me-txt">
              My name is Juan Martinez and I am full stack web developer. I
              started my web developement journey at{" "}
              <a href="https://www.theodinproject.com/" target="blank">
                The Odin Project
              </a>
              . There I learned the basics of HTML and CSS. As a result I found
              that I really enjoyed what I was doing and so I continued through
              the curriculum where I learned many new and exciting concepts.
              With that knowledge I created projects along the way to practice
              my programming knowledge and problem solving skills. I am
              currently looking for opportunities to work with other developers
              and/or companies.
            </p>
          </div>

          <div id="am-code-div">
            <h1 id="am-code" className="am-text"></h1>
            <h1 id="text-blinker" className="am-text">
              |
            </h1>
          </div>
        </div>

        <div id="skills-container" className="content">
          <h1 id="skills-title" className="sec-title line-through">
            Skills
          </h1>

          <div className="skills-tile-div">{skillsJsx}</div>

          {/* <h1 id="skills-title" className="sec-title line-through">
            What I'm learning
          </h1>

          <div className="skills-tile-div">
            <div className="card-flip">
              <div
                id="name-tile"
                className="background-image card-front"
              ></div>

              <div className="card-back">name</div>

              <p className="bottom-label">name</p>
            </div>
          </div> */}
        </div>

        <div id="projects-container">
          <h1 id="projects-title" className="sec-title line-through">
            Projects
          </h1>

          <div id="project-grid">{projectsJsx}</div>

          <Link to="/projects" className="view-all-projects">
            View More
          </Link>
        </div>

        <div id="contact-container" className="content">
          <div className="dark-blur"></div>
          <h1 className="contact-title line-through">Contact me</h1>
          <p className="contact-text">
            Interested in working together or have questions?
          </p>
          <p className="contact-text">jmartinezdev6784@gmail.com</p>
          <p className="contact-text">
            <a
              href="https://www.linkedin.com/in/juan-martinez-17a8b0205/"
              target="blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
