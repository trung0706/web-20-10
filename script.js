
// Tạo sao và cánh hoa bay theo phong cách video tham khảo.
(function createAtmosphere() {
  const sky = document.getElementById("nightSky");
  if (sky && !sky.children.length) {
    const count = window.innerWidth < 650 ? 65 : 125;
    for (let i = 0; i < count; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.setProperty("--duration", `${1.4 + Math.random() * 4}s`);
      star.style.setProperty("--delay", `${Math.random() * -5}s`);
      if (Math.random() > .82) {
        star.style.width = "3px";
        star.style.height = "3px";
      }
      sky.appendChild(star);
    }
  }
  const petals = document.getElementById("floatingPetals");
  if (petals && !petals.children.length) {
    const symbols = ["✿", "❀", "✧", "🌸", "♡"];
    const count = window.innerWidth < 650 ? 12 : 24;
    for (let i = 0; i < count; i++) {
      const petal = document.createElement("span");
      petal.className = "floating-petal";
      petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.fontSize = `${12 + Math.random() * 18}px`;
      petal.style.setProperty("--rise", `${12 + Math.random() * 14}s`);
      petal.style.setProperty("--wait", `${Math.random() * -24}s`);
      petal.style.setProperty("--side", `${Math.random() * 180 - 90}px`);
      petals.appendChild(petal);
    }
  }
})();

// =============================
// 0. CÁNH HOA BAY NHẸ TRÊN BẦU TRỜI
// =============================
const floatingPetals = document.getElementById("floatingPetals");
if (floatingPetals) {
  const petalSymbols = ["✿", "❀", "🌸", "✧"];
  const petalCount = window.matchMedia("(max-width: 600px)").matches ? 12 : 22;
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("span");
    petal.className = "floating-petal";
    petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.fontSize = `${12 + Math.random() * 17}px`;
    petal.style.setProperty("--rise", `${12 + Math.random() * 13}s`);
    petal.style.setProperty("--wait", `${Math.random() * -24}s`);
    petal.style.setProperty("--side", `${Math.random() * 180 - 90}px`);
    floatingPetals.appendChild(petal);
  }
}

// =============================
// 1. TẠO BẦU TRỜI SAO
// =============================
const nightSky = document.getElementById("nightSky");
const starCount = window.matchMedia("(max-width: 600px)").matches ? 90 : 180;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("span");
  star.className = "star";
  const size = Math.random() * 2.2 + 0.7;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.setProperty("--duration", `${2 + Math.random() * 4}s`);
  star.style.setProperty("--delay", `${Math.random() * -5}s`);
  nightSky.appendChild(star);
}

// =============================
// 2. NÚT MỞ QUÀ VÀ CUỘN TRANG
// =============================
document.getElementById("openGift").addEventListener("click", () => {
  document.getElementById("gift").scrollIntoView({ behavior: "smooth" });
  showToast("Món quà nhỏ dành tặng những bông hoa của lớp mình 🌷");
});

document.getElementById("backToTop").addEventListener("click", () => {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});

// =============================
// 3. LỜI CHÚC TRONG CÁC PHONG BÌ
// Sửa nội dung bên dưới tùy ý.
// =============================
const letters = [
  {
    title: "Gửi cô gái luôn mỉm cười 🌸",
    message: "Chúc bạn có một ngày 20/10 thật vui và thật nhiều điều bất ngờ dễ thương. Mong bạn luôn giữ được nụ cười, sự hồn nhiên và năng lượng tích cực của mình. Hãy nhớ rằng bạn là một phần rất đáng quý của tập thể lớp!"
  },
  {
    title: "Gửi bạn đang cần động lực ✨",
    message: "Nếu hôm nay có chút mệt mỏi thì hãy nghỉ ngơi một chút nhé. Bạn không cần lúc nào cũng phải hoàn hảo. Cứ tiến từng bước nhỏ, tin vào bản thân và đừng quên rằng những cố gắng của bạn đều có ý nghĩa. Chúc bạn luôn mạnh mẽ và bình an."
  },
  {
    title: "Một lời chúc dành cho bạn 💗",
    message: "Chúc bạn luôn xinh tươi theo cách riêng, học được điều mình yêu thích, gặp những người chân thành và có thật nhiều kỷ niệm đẹp của tuổi học trò. Chúc các bạn nữ lớp mình một ngày 20/10 ngập tràn tiếng cười!"
  }
];

const modal = document.getElementById("letterModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");

document.querySelectorAll(".envelope").forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.letter);
    modalTitle.textContent = letters[index].title;
    modalMessage.textContent = letters[index].message;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// =============================
// 4. ẢNH KỶ NIỆM
// CÁCH THAY ẢNH:
// - Tạo thư mục tên images nằm cạnh index.html.
// - Chép ảnh vào đó, ví dụ lop-minh.jpg, ban-be.jpg, ky-niem.jpg.
// - Đổi image: null thành image: "images/lop-minh.jpg" ở dưới.
// =============================
const photoData = [
  { image: null, caption: "Thanh xuân của chúng mình", hint: "Ảnh tập thể lớp" },
  { image: null, caption: "Những người bạn tuyệt vời", hint: "Ảnh bạn bè" },
  { image: null, caption: "Một ngày thật đáng nhớ", hint: "Ảnh kỷ niệm" }
];

document.querySelectorAll(".photo-card").forEach((button) => {
  button.addEventListener("click", () => {
    const item = photoData[Number(button.dataset.photo)];
    if (!item.image) {
      showToast(`Để thêm ảnh, sửa photoData trong script.js: ${item.hint.toLowerCase()} 📷`);
      return;
    }
    const viewer = document.createElement("div");
    viewer.className = "modal photo-viewer";
    viewer.innerHTML = `
      <div class="modal-backdrop"></div>
      <article class="letter-paper photo-viewer-paper">
        <button class="modal-close" type="button" aria-label="Đóng ảnh">×</button>
        <img class="viewer-image" alt="">
        <p class="viewer-caption"></p>
      </article>`;
    viewer.querySelector("img").src = item.image;
    viewer.querySelector("img").alt = item.caption;
    viewer.querySelector(".viewer-caption").textContent = item.caption;
    document.body.appendChild(viewer);
    document.body.style.overflow = "hidden";
    const closeViewer = () => {
      viewer.remove();
      document.body.style.overflow = "";
    };
    viewer.querySelector(".modal-backdrop").addEventListener("click", closeViewer);
    viewer.querySelector(".modal-close").addEventListener("click", closeViewer);
    document.addEventListener("keydown", function esc(event) {
      if (event.key === "Escape" && document.body.contains(viewer)) {
        closeViewer();
        document.removeEventListener("keydown", esc);
      }
    });
  });
});

// =============================
// 5. NHẠC NỀN
// Đặt file nhạc có quyền sử dụng tên music.mp3 vào thư mục.
// Sau đó mở index.html, bỏ comment ở dòng source audio:
// <source src="music.mp3" type="audio/mpeg">
// =============================
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
let musicEnabled = false;

musicToggle.addEventListener("click", async () => {
  // Nếu chưa thêm tệp nhạc, báo cách thêm thay vì làm nút bị lỗi.
  if (!bgMusic.querySelector("source")) {
    showToast("Thêm file music.mp3 và mở comment source trong index.html để bật nhạc 🎵");
    return;
  }

  try {
    if (!musicEnabled) {
      await bgMusic.play();
      musicEnabled = true;
      musicLabel.textContent = "Tắt nhạc";
      musicToggle.classList.add("playing");
      musicToggle.setAttribute("aria-pressed", "true");
    } else {
      bgMusic.pause();
      musicEnabled = false;
      musicLabel.textContent = "Bật nhạc";
      musicToggle.classList.remove("playing");
      musicToggle.setAttribute("aria-pressed", "false");
    }
  } catch (error) {
    showToast("Trình duyệt chưa phát được nhạc. Kiểm tra file music.mp3 nhé.");
  }
});

// =============================
// 6. THÔNG BÁO NHỎ
// =============================
let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}
