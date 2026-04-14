import { db } from "./db_connection.ts"

//Definició de la estructura de usuari que rebrem
interface userStructure {
    uName: string;
    uPassword: string;
}

export async function loginVerification(jsonUserData: any) : Promise<boolean> {
    const user = JSON.parse(jsonUserData) as userStructure;

    if (user.uName === "Gerard" && user.uPassword === "123") {
        return true;
    }
    return false;
}