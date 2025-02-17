//waves
let wave1 = document.querySelector('#wave1');
let wave2 = document.querySelector('#wave2');
let wave3 = document.querySelector('#wave3');
let wave4 = document.querySelector('#wave4');

window.addEventListener('scroll', function(){
    let positionScroll = this.window.scrollY

    wave1.style.backgroundPositionX = (400 + positionScroll * 4) + 'px';
    wave2.style.backgroundPositionX = (300 + positionScroll * -4) + 'px';
    wave3.style.backgroundPositionX = (200 + positionScroll * 4) + 'px';
    wave4.style.backgroundPositionX = (100 + positionScroll * 4) + 'px';

})



//menu
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu'); // Obtém o menu lateral
    if (sideMenu.style.right === '-300px' || sideMenu.style.right === '') {
        sideMenu.style.right = '0'; // Mostra o menu
    } else {
        sideMenu.style.right = '-300px'; // Esconde o menu
    }
}

  // Adiciona os eventos de clique nos botões

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Impede o comportamento padrão do link

      // Obtém o destino do link
      const target = document.querySelector(this.getAttribute('href'));

      // Calcula a posição do destino ajustada para o header fixo
      const offset = 80;
      const position = target.offsetTop - offset;

      // Faz o scroll suave até o destino
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    });
  });



//section free fall
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".free-fall");
  const fallingElements = document.querySelectorAll(".container-free-fall > div");

  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  fallingElements.forEach((element, index) => {
                      setTimeout(() => {
                          element.classList.add("fall");
                      }, 500 + index * 500);
                  });
                  observer.unobserve(section); // Remove o observador após ativar
              }
          });
      },
      { threshold: 0.3 } // Ativa quando 30% da section estiver visível
  );

  observer.observe(section);
});

 // Seleciona todos os itens de formula
 document.addEventListener("DOMContentLoaded", () => {
  const formulaItems = document.querySelectorAll(".formula-item");

  const observerformulas = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          }
      });
  });

  formulaItems.forEach((item) => observerformulas.observe(item));
});

