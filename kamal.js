// Photo fallback: if photo.jpg is missing, show initials instead.
(function () {
  const img = document.getElementById("profile-photo");
  const fallback = document.querySelector(".photo-fallback");

  img.addEventListener(
    "error",
    function () {
      img.classList.add("hidden");
      fallback.classList.add("show");
    },
    { once: true },
  );
})();

// Footer year, kept current automatically.
document.getElementById("year").textContent = new Date().getFullYear();
