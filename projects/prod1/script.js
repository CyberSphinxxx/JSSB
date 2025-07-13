
// Toggle like button state and appearance
function toggleLike(button) {
button.classList.toggle('liked');
button.textContent = button.classList.contains('liked') ? '💖 Liked' : '❤️ Like';
}

// Confetti generator when "Learn More" button is clicked
function throwConfetti(button) {
const colors = ['#FFC107', '#E91E63', '#03A9F4', '#4CAF50', '#FF5722', '#9C27B0'];

const rect = button.getBoundingClientRect();
const offsetX = rect.left + rect.width / 2;
const offsetY = rect.top + window.scrollY;

for (let i = 0; i < 25; i++) {
    const confetto = document.createElement('div');
    confetto.className = 'confetto';
    confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetto.style.left = `${offsetX + (Math.random() * 80 - 40)}px`;
    confetto.style.top = `${offsetY}px`;
    confetto.style.width = `${6 + Math.random() * 4}px`;
    confetto.style.height = confetto.style.width;
    confetto.style.position = 'absolute';
    confetto.style.borderRadius = '50%';
    confetto.style.zIndex = 9999;
    confetto.style.opacity = 1;
    confetto.style.pointerEvents = 'none';
    confetto.style.animation = `confetti-fall 2.5s ease-out forwards`;
    document.body.appendChild(confetto);

    setTimeout(() => {
    confetto.remove();
    }, 3000);
}
}
