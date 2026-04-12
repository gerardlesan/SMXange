document.getElementById("testButton")?.addEventListener("click", getServerMsg);

//Ll
async function getServerMsg(){
    const serverResponse = await fetch("/api/getUser" , {
        method: "POST",
        body:"11"
    });
    const msg: string = await serverResponse.json();
    document.getElementById("msgSpot")!.innerText = msg;
};