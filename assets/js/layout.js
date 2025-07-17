// layout.js

document.addEventListener("DOMContentLoaded", function () {
  // Toggle sidebar (if you have one)
  const sidebarToggle = document.querySelector("#sidebar-toggle");
  const sidebar = document.querySelector("#sidebar");
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Toggle submit dropdown
  const submitButton = document.querySelector("#submit-button");
  const submitMenu = document.querySelector("#submit-dropdown");
  if (submitButton && submitMenu) {
    submitButton.addEventListener("click", (e) => {
      e.stopPropagation();
      submitMenu.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      submitMenu.classList.remove("show");
    });
  }

  // Simulate users online and server time (fake demo)
  const usersOnline = document.querySelector("#users-online");
  const serverTime = document.querySelector("#server-time");

  if (usersOnline) {
    const randomUsers = Math.floor(Math.random() * 100) + 1;
    usersOnline.textContent = `${randomUsers} Users Online`;
  }

  if (serverTime) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const suffix = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${((hours + 11) % 12 + 1)}:${minutes} ${suffix}`;
    serverTime.textContent = formattedTime;
  }
});

