
interface ImportMetaEnv {readonly VITE_APP_TITLE: string
    readonly VITE_KEYCLOAK_URL: string
    readonly VITE_KEYCLOAK_REALM: string
    readonly VITE_KEYCLOAK_CLIENTID: string
    readonly VITE_UI_URL: string
    readonly VITE_API_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}