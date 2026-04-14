//Funció de mostra per ensenyar com podria el codi de client cridar a el servidor a través de una ruta de API
const form = document.getElementById("login")!;

async function sendData() {
  // Associate the FormData object with the form element
  const formData = new FormData(form);

  const response = await fetch("/api/login", {
    method: "POST",
    body: formData,
  });
    
    const msg = await response.json();
    document.getElementById("msgSpot")!.innerText = msg;
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});