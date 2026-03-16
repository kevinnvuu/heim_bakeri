window.addEventListener("scroll", function(){
    const elements = document.querySelectorAll(".reveal");
  
    elements.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
  
      if(elementTop < windowHeight - 50){
        el.classList.add("active");
      }
    });
  });