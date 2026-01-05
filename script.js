const form = document.getElementById("entryForm");
const list = document.getElementById("entryList");

let entries = JSON.parse(localStorage.getItem("entries")) || [];

function saveEntries() {
  localStorage.setItem("entries", JSON.stringify(entries));
}

function renderEntries() {
  list.innerHTML = "";

  entries.forEach((entry, index) => {
    const li = document.createElement("li");
    li.classList.add("entry");

    li.innerHTML = `
      <strong>${entry.title}</strong><br>
      <p class="entry-desc">${entry.description}</p>
      <small>${entry.date}</small><br>
      <button>Remover</button>
    `;

    li.querySelector("button").addEventListener("click", () => {
      removeEntry(index, li);
    });

    list.appendChild(li);
  });
}


function removeEntry(index, element) {
  element.classList.add("removing");

  setTimeout(() => {
    entries.splice(index, 1);
    saveEntries();
    renderEntries();
  }, 300);
}


form.addEventListener("submit", e => {
  e.preventDefault();

  const entry = {
    title: title.value,
    description: description.value,
    date: date.value
  };

  entries.push(entry);
  saveEntries();
  renderEntries();
  form.reset();
});

renderEntries();

/* PWA */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
  .then(() => console.log("Service worker registrado"))
  .catch(err => console.error("Erro ao registar o service worker: ", err))
}

/* Instalação */
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.hidden = false;
});

installBtn.addEventListener("click", () => {
  deferredPrompt.prompt();
  deferredPrompt = null;
  installBtn.hidden = true;
});
