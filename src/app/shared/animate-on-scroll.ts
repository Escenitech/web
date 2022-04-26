export function animate() {
    var sections = document.querySelectorAll<HTMLElement>(".section");
    var background = document.querySelectorAll<HTMLElement>(".with-background");
    var hidden = document.querySelectorAll<HTMLElement>(".hidden");

    var elementVisible = 150;

    // for (var i = 0; i < sections.length; i++) {
    //   var elementTop = sections[i].getBoundingClientRect().top;
    //   if (elementTop < windowHeight - elementVisible) {
    //     sections[i].classList.add("animate");
    //   }
    // }

    let count = 0;

    for (let hidChild of hidden) {
      var windowHeight = window.innerHeight;
      var elementTop = hidChild.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - elementVisible
          && !hidChild.classList.contains('animate')) {
          
          setTimeout(() => {
            hidChild.classList.add('animate');
            hidChild.style.animationDelay = (1000 * count).toString();
          }, 500 * count);

          count += 1;
      }
    }

    for (var i = 0; i < background.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = background[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        background[i].classList.add("zoom-in");
      }
    }
}