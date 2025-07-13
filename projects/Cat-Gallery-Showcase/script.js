function toggleLike(button) {
  button.classList.toggle('liked');
  button.textContent = button.classList.contains('liked') ? '💖 Liked' : '❤️ Like';
}

function throwConfetti(button) {
  const colors = ['#FFC107', '#E91E63', '#03A9F4', '#4CAF50', '#FF5722', '#9C27B0'];
  const rect = button.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + window.scrollY;

  for (let i = 0; i < 30; i++) {
    const confetto = document.createElement('div');
    const size = Math.floor(Math.random() * 6) + 6;

    const dx = (Math.random() - 0.5) * 200; // horizontal spread
    const dy = Math.random() * -300 - 100; // vertical (upward) burst

    confetto.className = 'confetto';
    confetto.style.width = `${size}px`;
    confetto.style.height = `${size}px`;
    confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetto.style.position = 'absolute';
    confetto.style.left = `${originX}px`;
    confetto.style.top = `${originY}px`;
    confetto.style.borderRadius = '50%';
    confetto.style.opacity = '1';
    confetto.style.pointerEvents = 'none';
    confetto.style.zIndex = 1000;

    // Animate using transform for smoother GPU-accelerated movement
    confetto.style.transition = `transform 2s ease-out, opacity 2s ease-out`;
    document.body.appendChild(confetto);

    // Trigger reflow so the animation starts
    requestAnimationFrame(() => {
      confetto.style.transform = `translate(${dx}px, ${-dy}px) rotate(${Math.random() * 720}deg)`;
      confetto.style.opacity = '0';
    });

    // Cleanup after animation
    setTimeout(() => {
      confetto.remove();
    }, 2000);
  }
}
