const globalScript = () => {
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
};

export default globalScript;
