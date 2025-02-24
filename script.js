
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

AOS.init();

//menu
function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');
    const header = document.querySelector('.header');

    if (sideMenu.style.right === '-300px' || sideMenu.style.right === '') {
        sideMenu.style.right = '0'; // Abre o menu
        overlay.classList.add('active'); // Exibe overlay
    } else {
        sideMenu.style.right = '-300px'; // Fecha o menu
        overlay.classList.remove('active'); // Esconde overlay
    }
}



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


//Titulo do Galileu
document.addEventListener("DOMContentLoaded", function () {
    const spans = document.querySelectorAll("#galileu-title span");
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
        }, index * 100); // Animação em cascata
    });
});


//Gravidade
function iniciarQueda() {
    let altura = parseFloat(document.getElementById("gravity-input").value);
    let g = 9.8; // Aceleração da gravidade em m/s²
    let tempo = Math.sqrt((2 * altura) / g); // Tempo de queda livre

    let objeto = document.getElementById("object");
    let fallArea = document.querySelector(".fall-area");
    let alturaMaxima = fallArea.clientHeight; // Altura da área de queda
    let alturaObjeto = objeto.clientHeight; // Altura do objeto

    // **Conversão metros → pixels** (100m = alturaMaxima px)
    let escala = alturaMaxima / 100; 
    let distanciaPixels = altura * escala;

    // **Cálculo correto da posição final**
    let posicaoFinal = alturaMaxima - alturaObjeto; 

    // **Evita que o objeto ultrapasse o chão**
    if (distanciaPixels > posicaoFinal) {
        distanciaPixels = posicaoFinal;
    }

    // **Redefinir a posição inicial corretamente**
    objeto.style.display = "block";
    objeto.style.transition = "none";  
    objeto.style.top = "0px"; 

    // **Forçar um pequeno delay antes de aplicar a animação**
    setTimeout(() => {
        objeto.style.transition = `top ${tempo}s ease-in`; 
        objeto.style.top = `${posicaoFinal}px`;
    }, 50);

    // **Exibe o tempo correto após a queda**
    setTimeout(() => {
        document.getElementById("result").innerHTML = 
            `⏳ O objeto levou aproximadamente <strong>${tempo.toFixed(2)} segundos</strong> para atingir o chão.`;
    }, tempo * 1000);
}


//slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        100: { // Primeiro o menor
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: { // Depois o maior
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: { // Depois o maior
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});


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
