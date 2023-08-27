import Keycloak, {KeycloakPromise} from "keycloak-js";

const _kc = new Keycloak({
    "realm": import.meta.env.VITE_KEYCLOAK_REALM,
    "url": import.meta.env.VITE_KEYCLOAK_URL,
    "clientId": import.meta.env.VITE_KEYCLOAK_CLIENTID,
});

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback: () => void) => {
    _kc.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256',
    })
        .then((authenticated) => {
            if (!authenticated) {
                console.log("user is not authenticated..!");
            }
            onAuthenticatedCallback();
        })
        .catch(console.error);
};

const doLogin = () => _kc.login();

const doLogout = () => _kc.logout({redirectUri: import.meta.env.VITE_UI_URL});

const getToken = (): string | undefined => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback: () => KeycloakPromise<boolean, boolean>) =>
    _kc.updateToken(5)
        .then(successCallback)
        .catch(doLogin);

const hasRole = (roles: string[]) => roles.some((role) => _kc.hasRealmRole(role));

const createLoginUrl = () => _kc.createLoginUrl();

const getUsername = () => _kc.tokenParsed?.preferred_username;
const getLastname = () => _kc.tokenParsed?.family_name;
const getFirstname = () => _kc.tokenParsed?.given_name;
const getFullName = () => _kc.tokenParsed?.name;
const getEmail = () => _kc.tokenParsed?.email;
const loggedInUser = {
    getUsername,
    getLastname,
    getFirstname,
    getFullName,
    getEmail
}

const UserKeycloak = {
    initKeycloak,
    doLogin,
    doLogout,
    isLoggedIn,
    getToken,
    updateToken,
    getUsername,
    hasRole,
    createLoginUrl,
    loggedInUser
};

export default UserKeycloak;
