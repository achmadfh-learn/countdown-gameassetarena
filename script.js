// Tentukan tanggal tujuan (ubah sesuai kebutuhan)
const targetDate = new Date("2025-11-01T23:59:59").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "<h2>Waktu Pengumuman Telah Tiba!</h2>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}, 1000);
