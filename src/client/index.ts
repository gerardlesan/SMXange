document.getElementById("testButton")?.addEventListener("click", getServerMsg);

//Funció de mostra per ensenyar com podria el codi de client cridar a el servidor a través de una ruta de API
async function getServerMsg(){
    const serverResponse = await fetch("/api/getUser" , {
        method: "POST",
        body:"6"
    });
    const msg: string = await serverResponse.json();
    document.getElementById("msgSpot")!.innerText = msg;
};