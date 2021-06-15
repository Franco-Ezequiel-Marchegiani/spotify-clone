/* Al clickear el botón de ingresar, primero se dirije a este link
Luego, re dirije (redirect) al localhost:3000
1- Cliekar botón Login
2- Redirecciona a Spotify
3- Redirecciona al home page una vez logueado */
export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri = "http://localhost:3000/";
const clientId = "26a0f5f51c4a462fac7243c3eaa73cf3";

/* El scope permite funcionalidad en las canciones, es decir, 
agregar a megustas, eliminar de una lista, poder visualizar
canciones, listas, etc. 
-Música escucnahdo ahora mismo
-Música recientemente escuchada*/
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        // #accessToken=key
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}
/* Y acá exportamos y vinculamos todos los permisos y validación al botón de "login" */
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;