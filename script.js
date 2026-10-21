const messages = [
  "Te amo por ser tú, sin tener que cambiar para gustarme.",
  "Te amo por la forma tan bonita en la que haces que mis días sean mejores.",
  "Te amo por tu manera de pensar, por tu corazón y por todo lo que llevas dentro.",
  "Admiro muchísimo la persona que eres y todo lo que eres capaz de lograr.",
  "Nunca olvides que puedes con mucho más de lo que a veces crees.",
  "Cuando algo se ponga difícil, recuerda todo lo que ya has logrado superar.",
  "No tienes que ser perfecta para que yo te ame. Te amo por ser completamente tú.",
  "Amo tu forma de hacerme sonreír incluso cuando no estoy teniendo mi mejor día.",
  "Amo tus detalles, tus ocurrencias, tus palabras y hasta esas pequeñas cosas que quizá tú no notas.",
  "Quiero que nunca dudes de lo valiosa que eres. Mereces sentirte orgullosa de ti misma.",
  "Si alguna vez sientes que no puedes más, recuerda que no tienes que enfrentar todo sola.",
  "Voy a estar a tu lado para apoyarte, escucharte y celebrar cada uno de tus logros.",
  "Te amo por tu mente, tu corazón, tu forma de ser y por la persona que sigues construyendo cada día.",
  "Quiero verte cumplir tus sueños y estar ahí para decirte: ‘sabía que podías hacerlo’.",
  // Estrella especial (centro)
  "Te quiero llenar de abrazos y besos todos los días y seguir agarrando fuerte tu mano en cualquier lugar mientras sonríes. Te quiero para crecer y soñar juntos en todo momento. Te amo aquí, allí y donde haga falta, porque amar es una decisión. Todos los días te quiero apoyar cuando lo necesites, ayudarte cuando no puedas más, y sacarte una sonrisa en ese día que más hace falta. Te quiero para compartir contigo toda mi vida. Y que nunca nos falten las ganas de seguir construyendo, de seguir, de continuar siendo el mejor equipo. Te quiero ver cumplir tus sueños, y ser tu admiradora #1."
];

// Posiciones para celular
const positions = [
  { top: 16, left: 16 },
  { top: 20, left: 70 },
  { top: 30, left: 26 },
  { top: 26, left: 54 },
  { top: 40, left: 12 },
  { top: 44, left: 76 },
  { top: 52, left: 32 },
  { top: 49, left: 62 },
  { top: 61, left: 18 },
  { top: 65, left: 70 },
  { top: 72, left: 40 },
  { top: 36, left: 84 },
  { top: 76, left: 24 },
  { top: 78, left: 58 },
  { top: 46, left: 47 }  // Estrella especial
];

// Fecha de inicio: 22 de febrero de 2025
const startDate = new Date(2025, 1, 22);

const starsContainer = document.getElementById('starsContainer');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
const modalStar = document.getElementById('modalStar');
const closeBtn = document.getElementById('closeBtn');
const bgStars = document.getElementById('bgStars');

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Estrellas de fondo
function createBackgroundStars() {
  for (let i = 0; i < 90; i++) {
    const star = document.createElement('div');
    star.classList.add('bg-star');
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 5 + 's';
    star.style.opacity = 0.15 + Math.random() * 0.5;
    const size = 1 + Math.random() * 2;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    bgStars.appendChild(star);
  }
}

// Estrellas interactivas
function createStars() {
  messages.forEach((msg, index) => {
    const star = document.createElement('div');
    star.classList.add('star');
    star.textContent = index === 14 ? '🌟' : '⭐';

    if (index === 14) {
      star.classList.add('special');
    }

    const pos = positions[index];
    star.style.top = pos.top + '%';
    star.style.left = pos.left + '%';

    star.style.animationDelay = `${index * 0.11}s, ${index * 0.3}s`;

    const floatDuration = 5 + (index % 5) * 0.7;
    star.style.setProperty('--float-duration', floatDuration + 's');

    star.addEventListener('click', () => openModal(msg, index === 14));
    starsContainer.appendChild(star);

    setTimeout(() => {
      star.classList.add('appear');
    }, 50);
  });
}

function openModal(text, isSpecial = false) {
  modalText.textContent = text;
  modalStar.textContent = isSpecial ? '🌟' : '⭐';
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

// Contador en vivo
function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  if (diff < 0) {
    daysEl.textContent = '0';
    hoursEl.textContent = '0';
    minutesEl.textContent = '0';
    secondsEl.textContent = '0';
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

// Cerrar modal
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Inicializar
createBackgroundStars();
createStars();
updateCounter();
setInterval(updateCounter, 1000);