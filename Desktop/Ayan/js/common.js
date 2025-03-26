document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container");

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  // Function to handle scroll
  function handleScroll() {
    containers.forEach((container) => {
      if (isInViewport(container)) {
        const leftRect = container.querySelector(".rectangle.left");
        const rightRect = container.querySelector(".rectangle.right");

        leftRect.classList.add("active");
        rightRect.classList.add("active");
      }
    });
  }

  // Add left/right classes to rectangles
  containers.forEach((container) => {
    const rectangles = container.querySelectorAll(".rectangle");
    rectangles[0].classList.add("left");
    rectangles[1].classList.add("right");
  });

  // Initial check
  handleScroll();

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);
});
