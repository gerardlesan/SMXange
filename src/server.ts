import mainPage from "./index.html";
import * as dbquery from "./dbquerys.ts"


//Aixó es el core del servidor web
Bun.serve({
    port:80,
    development:true,

    //Cada Entrada dicta que tiene que hacer este servidor cuando reciva una solicitud de GET o POST en esa dirección desde el cliente
    routes: {
        //Paginas
        "/": mainPage,

        //API (La Application Programing Interface permite que el servidor interactue con el cliente, haciendo cosas como guardar o traer datos de la Base de Datos)
        
        //Para el login, el json enviado por el cliente debería contener
        "/api/getUser": async (req) => {
                const response = await req.json();
                const n = parseInt(response);
                return Response.json(await dbquery.getStudentName(n));
        },

        "/favicon.ico": Bun.file("./assets/favicon.ico"),

        //Fallback por si se llama una ruta que no encaja
        "/*": new Response("404 Not Found, Sorry", { status: 404 }),
    }
});
