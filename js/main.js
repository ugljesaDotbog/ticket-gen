import Person from "./person.js";

let user = new Person();

document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("sbm");
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    setEverything();
    getEveryting();
    loadCard();
  });
});

function setEverything() {
  const nameInput = document.getElementById("fname");
  const emailInput = document.getElementById("email");
  const githubInput = document.getElementById("github");
  const fileInput = document.getElementById("file-input");

  user.setName(nameInput.value);
  user.setEmail(emailInput.value);
  user.setGithub(githubInput.value);

  // Add file event listener for image upload
  fileInput.addEventListener("change", function () {
    if (this.files.length > 0) {
      const avatarImg = document.getElementById("avatar");
      avatarImg.src = URL.createObjectURL(this.files[0]);
    }
  });

  // Set file if already selected
  if (fileInput.files.length > 0) {
    user.setFile(fileInput.files);
  }
}

function loadCard() {
  const formaa = document.getElementById("forma");
  const ticket = document.querySelector(".ticket");
  formaa.classList.add("hidden");
  ticket.classList.remove("hidden");
}

function getEveryting() {
  let nameInput = document.getElementById("name-ticket");
  let githubInput = document.getElementById("github-p");
  const imgSrc = document.getElementById("avatar");

  // Use the file URL if available
  const fileUrl = user.getFile();
  if (fileUrl) {
    imgSrc.src = fileUrl;
  }

  nameInput.textContent = user.getName();
  githubInput.innerHTML = `
      <span id="github-span">
        <img src="./assets/images/icon-github.svg" alt="GitHub Icon" />
        ${user.getGithub()}
      </span>
    `;
}
