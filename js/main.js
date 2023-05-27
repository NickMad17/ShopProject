let link = document.querySelector('.product__link');

link.addEventListener("click", function() {
  link.classList.add('product__link_animation');
});

// Отслеживаем окончание анимации
link.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler () {
  // Удаляем класс с анимацией
  link.classList.remove('product__link_animation');
  
}