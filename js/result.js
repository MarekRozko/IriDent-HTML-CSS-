function animateNumbers() {
  const numberElements = document.querySelectorAll('.number, .number1, .number2');
  
  numberElements.forEach((element) => {
    const targetNumber = parseInt(element.getAttribute('data-max'));
    const duration = 700; // Продолжительность анимации в миллисекундах
    const frameDuration = 1000 / 60; // Продолжительность кадра в миллисекундах (60 кадров в секунду)
    const totalFrames = Math.round(duration / frameDuration); // Общее количество кадров
    const increment = targetNumber / totalFrames;
    
    let currentNumber = 0;
    let frame = 0;
    
    const updateNumber = () => {
      if (frame === totalFrames) {
        if (element.classList.contains('number')) {
          element.textContent = targetNumber + '%'; // Добавляем знак процента
        } else if (element.classList.contains('number1') || element.classList.contains('number2')) {
          element.textContent = targetNumber + '+'; // Добавляем знак плюса
        }
      } else {
        currentNumber += increment;
        if (element.classList.contains('number')) {
          element.textContent = Math.round(currentNumber) + '%'; // Добавляем знак процента
        } else if (element.classList.contains('number1') || element.classList.contains('number2')) {
          element.textContent = Math.round(currentNumber) + '+'; // Добавляем знак плюса
        }
        frame++;
        requestAnimationFrame(updateNumber);
      }
    };

    updateNumber();
  });
}

window.addEventListener('scroll', () => {
  const resultSection = document.querySelector('.result');
  const sectionTop = resultSection.offsetTop;
  const sectionHeight = resultSection.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > sectionTop - windowHeight + sectionHeight / 2) {
    animateNumbers();
  }
});
