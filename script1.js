document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // 1. GESTION DU MENU HAMBURGER MOBILE
  // ==========================================
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Ferme automatiquement le menu lorsqu'on clique sur un lien
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // ==========================================
  // 2. GESTION DES CARTES DE PLATS (MODALE)
  // ==========================================
  const modalOverlay = document.getElementById("detail-modal-overlay");
  const modalCloseBtn = document.getElementById("detail-modal-close");
  const cards = document.querySelectorAll(".card");

  if (cards.length > 0 && modalOverlay) {
    cards.forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-add-cart")) return;

        const title = card.querySelector(".card-title")?.textContent || "Plat Gourmet";
        const price = card.querySelector(".card-price")?.textContent || "1 000 gdes";
        const imgSrc = card.querySelector("img")?.src || "";
        const rating = card.querySelector(".meta-item")?.textContent || "4.8";
        const badge = card.querySelector(".badge")?.textContent || "Special";

        const titleEl = document.getElementById("detail-modal-title");
        const priceEl = document.getElementById("detail-modal-price");
        const imgEl = document.getElementById("detail-modal-img");
        const ratingEl = document.getElementById("detail-modal-rating");
        const badgeEl = document.getElementById("detail-modal-badge");

        if (titleEl) titleEl.textContent = title;
        if (priceEl) priceEl.textContent = price;
        if (imgEl) imgEl.src = imgSrc;
        if (ratingEl) ratingEl.textContent = rating;
        if (badgeEl) badgeEl.textContent = badge;

        modalOverlay.classList.add("active");
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
      });
    }

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }

  // ==========================================
  // 3. SÉLECTION DES TAILLES (DANS LA MODALE)
  // ==========================================
  const sizeOptions = document.querySelectorAll(".size-opt");
  if (sizeOptions.length > 0) {
    sizeOptions.forEach(opt => {
      opt.addEventListener("click", () => {
        sizeOptions.forEach(o => o.classList.remove("active"));
        opt.classList.add("active");
      });
    });
  }

});

