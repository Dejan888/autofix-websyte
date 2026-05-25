/* =========================
   HAMBURGER MENU
========================= */

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

/* AUTO CLOSE MENU ON LINK CLICK */

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

/* CLOSE MENU ON OUTSIDE CLICK */

document.addEventListener("click", (e) => {
  if (
    nav &&
    hamburger &&
    !nav.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

/* =========================
   SCROLL TO TOP BUTTON
========================= */

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", () => {
  const topBtn = document.getElementById("topBtn");

  if (!topBtn) return;

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

/* =========================
   SHOW PHONE BOX
========================= */

function showPhone() {
  const phoneBox = document.getElementById("phoneBox");

  if (!phoneBox) return;

  if (
    phoneBox.style.display === "none" ||
    phoneBox.style.display === ""
  ) {
    phoneBox.style.display = "block";
  } else {
    phoneBox.style.display = "none";
  }
}

/* =========================
   LIGHTBOX GALLERY
========================= */

const items = document.querySelectorAll(".item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (items && lightbox && lightboxImg) {
  items.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================
   SCROLL SPY (ACTIVE LINKS)
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* =========================
   LOADER FIX (VERY IMPORTANT)
========================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (!loader) return;

  loader.style.opacity = "0";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});
/* =========================
   COUNTER ANIMATION (STATS)
========================= */

const counters = document.querySelectorAll(".counter");

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;

      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

/* pokreni kad se učita stranica */
window.addEventListener("load", () => {
  animateCounters();
});