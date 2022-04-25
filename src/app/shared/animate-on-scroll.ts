export function animate() {
    var sections = document.querySelectorAll(".section");
    var background = document.querySelectorAll(".with-background");

    var windowHeight = window.innerHeight;
    var elementVisible = 100;

    for (var i = 0; i < sections.length; i++) {
      var elementTop = sections[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        sections[i].classList.add("animate");
      }
    }

    for (var i = 0; i < background.length; i++) {
      var elementTop = background[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        background[i].classList.add("zoom-in");
      }
    }
}