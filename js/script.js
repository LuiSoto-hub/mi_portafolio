document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card-deck img');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            if (this.classList.contains('card-selected')) {
                this.classList.remove('card-selected');
            } else {
                cards.forEach(innerCard => innerCard.classList.remove('card-selected'));
                this.classList.add('card-selected');
            }
        });
    });
});



    window.addEventListener('scroll', function() {
      const menu = document.querySelector('.menu');
      if (window.scrollY > 100) {
        menu.classList.add('scrolled');
      } else {
        menu.classList.remove('scrolled');
      }
    });
    
document.addEventListener("DOMContentLoaded", () => {
  const conteDegradado = document.querySelector(".conte-degradado");
  const cards = document.querySelectorAll(".card-img");

  // Gradiente en toda la ventana
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX + window.scrollX; // Ajusta con scroll
    const y = e.clientY + window.scrollY;
    
    conteDegradado.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255, 255, 255, 0.8) 0%,
        transparent 150px
      )
    `;
  });

  // Efecto especial al pasar sobre cartas (ejemplo: gradiente más intenso)
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left + window.scrollX; // Posición relativa a la carta
      const y = e.clientY - rect.top + window.scrollY;
      
      conteDegradado.style.background = `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgb(64, 20, 81) 0%,
          transparent 80px
        )
      `;
    });

    // Resetear al salir de la carta
    card.addEventListener("mouseleave", () => {
      conteDegradado.style.background = "transparent";
    });
  });
});