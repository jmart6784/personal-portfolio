export const homeScripts = () => {
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

  // content reveal on scroll
  let allContent = document.querySelectorAll(".content");

  allContent.forEach((content) => {
    content.style.opacity = "0";
    content.style.transition = "2s";

    if (window.scrollY >= content.getBoundingClientRect().top) {
      requestAnimationFrame(() =>
        setTimeout(() => {
          content.style.opacity = "1";
        })
      );
    } else {
      requestAnimationFrame(() =>
        setTimeout(() => {
          content.style.opacity = "0";
        })
      );
    }
  });

  allContent.forEach((content) => {
    content.style.opacity = "0";
    content.style.transition = "2s";

    document.addEventListener("scroll", () => {
      if (window.scrollY >= content.getBoundingClientRect().top) {
        requestAnimationFrame(() =>
          setTimeout(() => {
            content.style.opacity = "1";
          })
        );
      } else {
        requestAnimationFrame(() =>
          setTimeout(() => {
            content.style.opacity = "0";
          })
        );
      }
    });
  });

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

      currentWord = currentWord === wordArray.length - 1 ? 0 : currentWord + 1;
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
    setInterval(changeWord, 4000);

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
    setInterval(() => {
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

    setInterval(typer, 250);
  }
};

export const unmountHomeScripts = () => {
  console.log("Unmount");
};

// export default { homeScripts, unmountHomeScripts };
