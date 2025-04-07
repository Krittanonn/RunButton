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

// รองรับ mouse
document.addEventListener("mousemove", (e) => {
  handleMove(e.clientX, e.clientY);
});

// รองรับ touch
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
  // แสดงข้อความ "luv u beb" พร้อมอีโมจิหัวใจ
  yesMessage.innerHTML = "luv u beb 💖";
  
  // เพิ่มข้อความเข้าไปใน body
  document.body.appendChild(yesMessage);

  // เปลี่ยนสไตล์หรือข้อความของปุ่มถ้าต้องการ
  yesBtn.style.backgroundColor = "#8bc34a";
  yesBtn.textContent = "You said Yes! 😘";
});

yesBtn.addEventListener("click", () => {

  if (yesMessage.id == "yesMessage") {
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=OUgZqVunYNw";
    }, 3000);
  }
  
});
