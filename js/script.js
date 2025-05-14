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