//Funció de mostra per ensenyar com podria el codi de client cridar a el servidor a través de una ruta de API
//Aixo es una prova
const form = document.getElementById("login") as HTMLFormElement;

async function sendData() {
  // Associate the FormData object with the form element
  const formData = new FormData(form);
  const loginData = Object.fromEntries(formData.entries());


  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(loginData),
  });

  const msg = response.ok ? "Login Aconseguit" : `Login no conseguit ${response.statusText}`;
  document.getElementById("msgSpot")!.innerText = msg;
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});