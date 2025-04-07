const noBtn = document.getElementById("noBtn");

function handleMove(clientX, clientY) {
  const rect = noBtn.getBoundingClientRect();
  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;

  const distance = Math.hypot(clientX - btnX, clientY - btnY);

  if (distance < 100) {
    const newX = Math.random() * (window.innerWidth - rect.width);
    const newY = Math.random() * (window.innerHeight - rect.height);
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  }
}

document.addEventListener("mousemove", (e) => {
  handleMove(e.clientX, e.clientY);
});

document.addEventListener("touchmove", (e) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  }
}, { passive: true });

const yesBtn = document.getElementById("yesBtn");
const yesMessage = document.createElement("div");
yesMessage.id = "yesMessage";

yesBtn.addEventListener("click", () => {
  yesMessage.innerHTML = "luv u beb 💖";
  
  document.body.appendChild(yesMessage);

  yesBtn.style.backgroundColor = "#8bc34a";
  yesBtn.textContent = "You said Yes! 😘";
});

yesBtn.addEventListener("click", () => {
  setTimeout(() => {
    window.open("https://www.youtube.com/watch?v=OUgZqVunYNw", "_blank");
  }, 3000);
});
