export function animate() {
    var sections = document.querySelectorAll(".section");
    for (var i = 0; i < sections.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = sections[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        sections[i].classList.add("animate");
      }
    }
}