

export async function loginVerification(req: Request){

    const credentials = await req.json();

    if (!credentials.uName || !credentials.uPassword) {
        return Response.json(
            {success: false, message:"Usuari o Contrasenya faltants"}, 
            {status: 400}
        )
    } else if (credentials.uName === "Gerard" && credentials.uPassword === "123") {
        return Response.json(
            {success: true},
            {status: 200}
        )
    } else {
        return Response.json(
            {success: false, message:"Usuari o Contrasenya incorrectes"}, 
            {status: 401}
        )
    }
}