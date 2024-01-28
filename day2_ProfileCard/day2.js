import users from "./data.js";

users.forEach((user) => {
  const body = document.querySelector("body");
  body.innerHTML += `
    <div class="card-container">
        <div class="card-avatar">
          <img src="${user.avatar}" alt="${user.name}" class="avatar" />
        </div>
        <div class="card-bottom">
          <div class="card-name">${user.name}</div>
          <div class="card-title">${user.title}</div>
          <div class="card-socialMed">
            <i class="bx bxl-facebook-circle"></i>
            <i class="bx bxl-youtube"></i>
            <i class="bx bxl-tiktok"></i>
            <i class="bx bxl-github"></i>
          </div>
          <button class="contact">Contact Me</button>
        </div>
    </div>
      `;
});
