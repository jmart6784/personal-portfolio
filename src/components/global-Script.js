const globalScript = () => {
  // content reveal on scroll
  const unFadeContent = () => {
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
  };
  unFadeContent();

  // Change nav bar styling depending where user is located
  const navChange = () => {
    let navbarDiv = document.getElementById("nav-dark-blur");
    navbarDiv.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    navbarDiv.style.transition = "1.25s";

    if (window.scrollY === 0) {
      navbarDiv.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    } else {
      navbarDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        requestAnimationFrame(() =>
          setTimeout(() => {
            navbarDiv.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
          })
        );
      } else {
        requestAnimationFrame(() =>
          setTimeout(() => {
            navbarDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
          })
        );
      }
    });
  };
  navChange();

  // nav links to scroll to a page location
  const navScroller = () => {
    const scrollTo = (selector, yOffset = 0) => {
      const element = document.querySelector(selector);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    };

    let optionsDiv = document.querySelector(".mobile-inner-div");
    optionsDiv.style.transform = "translate(-100%, -100%)";
    optionsDiv.style.transition = "1s";
    optionsDiv.style.borderRadius = "100%";

    // Hide menu options when link is clicked
    const hide = () => {
      requestAnimationFrame(() =>
        setTimeout(() => {
          optionsDiv.style.transform = "translate(-100%, -100%)";
          optionsDiv.style.borderRadius = "100%";
        })
      );
    };

    let home = document.querySelectorAll(".home-link");

    if (home.length != 0) {
      home.forEach((link) => {
        link.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          hide();
        });
      });

      let about = document.querySelectorAll(".about-link");

      about.forEach((link) => {
        link.addEventListener("click", () => {
          scrollTo("#about-me-div", -200);
          hide();
        });
      });

      let skills = document.querySelectorAll(".skills-link");

      skills.forEach((link) => {
        link.addEventListener("click", () => {
          scrollTo("#skills-container", -200);
          hide();
        });
      });

      let projects = document.querySelectorAll(".projects-link");

      projects.forEach((link) => {
        link.addEventListener("click", () => {
          scrollTo("#projects-container", -200);
          hide();
        });
      });

      let contact = document.querySelectorAll(".contact-link");

      contact.forEach((link) => {
        link.addEventListener("click", () => {
          scrollTo("#contact-container", 0);
          hide();
        });
      });
    }
  };
  navScroller();

  // Mobile nav bar animations
  const mobileNavAnimation = () => {
    let hamburger = document.getElementById("mobile-ham");
    let optionsDiv = document.querySelector(".mobile-inner-div");
    optionsDiv.style.transform = "translate(-100%, -100%)";
    optionsDiv.style.transition = "1s";
    optionsDiv.style.borderRadius = "100%";

    hamburger.addEventListener("click", () => {
      if (optionsDiv.style.transform === "translate(-100%, -100%)") {
        requestAnimationFrame(() =>
          setTimeout(() => {
            optionsDiv.style.transform = "translate(0%, 0%)";
            optionsDiv.style.borderRadius = "0%";
          })
        );
      } else {
        requestAnimationFrame(() =>
          setTimeout(() => {
            optionsDiv.style.transform = "translate(-100%, -100%)";
            optionsDiv.style.borderRadius = "100%";
          })
        );
      }
    });
  };
  mobileNavAnimation();
};

export default globalScript;
