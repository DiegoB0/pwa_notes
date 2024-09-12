## Notas App

Una aplicación simple para tomar notas. Este proyecto se puede ejecutar localmente con HTTPS usando `http-server`.

## Requisitos

- Node.js y npm (para instalar `http-server` y `mkcert`)

## Instalación y Configuración

### Configuración de Certificados

Para servir la aplicación con HTTPS, necesitas certificados SSL. Estos certificados se pueden generar localmente usando `mkcert`.

#### En Linux

1. **Instalar `mkcert`:**
    ```bash
    sudo apt install mkcert
    sudo apt install libnss3-tools  # Necesario para mkcert en algunas distribuciones
    ```

2. **Generar Certificados:**
    ```bash
    mkcert -install
    mkcert localhost
    ```

    Esto generará dos archivos: `localhost.pem` (certificado) y `localhost-key.pem` (clave).

3. **Mover Certificados (opcional):**

    Puedes mover los certificados a un directorio central, por ejemplo `~/.certs/`:

    ```bash
    mkdir -p ~/.certs
    mv localhost.pem ~/.certs/
    mv localhost-key.pem ~/.certs/
    ```

#### En Windows

1. **Instalar `mkcert`:**
    - Descarga e instala `mkcert` desde [mkcert releases](https://github.com/FiloSottile/mkcert/releases).
    - Instala `mkcert` usando el instalador o extrae el archivo ZIP.

2. **Generar Certificados:**

    Abre una terminal y ejecuta:

    ```bash
    mkcert -install
    mkcert localhost
    ```

    Esto generará dos archivos: `localhost.pem` (certificado) y `localhost-key.pem` (clave).

3. **Mover Certificados (opcional):**

    Puedes mover los certificados a un directorio central, por ejemplo `C:\Users\TuUsuario\certs\`.

### Instalar `http-server`

1. **Instalar `http-server`:**

    Asegúrate de tener Node.js y npm instalados. Luego, instala `http-server` globalmente:

    ```bash
    npm install -g http-server
    ```

### Ejecutar el Servidor con HTTPS

#### En Linux

1. **Navegar al Directorio del Proyecto:**

    ```bash
    cd /ruta/a/tu/proyecto
    ```

2. **Iniciar el Servidor:**

    Si los certificados están en `~/.certs/`:

    ```bash
    http-server -S -C ~/.certs/localhost.pem -K ~/.certs/localhost-key.pem
    ```

#### En Windows

1. **Navegar al Directorio del Proyecto:**

    ```bash
    cd C:\ruta\a\tu\proyecto
    ```

2. **Iniciar el Servidor:**

    Si los certificados están en `C:\Users\TuUsuario\certs\`:

    ```bash
    http-server -S -C C:\Users\TuUsuario\certs\localhost.pem -K C:\Users\TuUsuario\certs\localhost-key.pem
    ```

## Acceder a la Aplicación

Abre tu navegador y navega a `https://localhost:8080` para ver tu aplicación. Es posible que tu navegador muestre una advertencia de seguridad porque el certificado es autofirmado. Acepta el riesgo y continúa para ver tu aplicación.
