# Investigación Adicional: Gestión de Variables de Entorno con Dotenv

## 1. ¿Qué es Dotenv?

`dotenv` es un módulo de NPM sin dependencias que se encarga de cargar variables de entorno desde un archivo secreto llamado `.env` directamente en el objeto global `process.env` de Node.js.

Su función principal en el desarrollo es separar la configuración del entorno (como las credenciales de bases de datos, puertos o claves secretas) de la lógica del código fuente. Esto evita que los desarrolladores suban contraseñas reales a repositorios públicos como GitHub, previniendo graves fallas de seguridad.

## 2. Instalación del Paquete

Para añadir este paquete a un proyecto de Node.js, se ejecuta el siguiente comando en la terminal:
npm install dotenv

## 3. Configuración e Inicialización (ESModules)

Bajo el uso exclusivo de **ESModules** (`"type": "module"` en el `package.json`), el orden de carga es crítico. La forma más limpia y automatizada de configurar e inicializar `dotenv` es importando su submódulo de configuración de manera directa en la primera línea absoluta del archivo de entrada de la aplicación (`app.js`) y del archivo de base de datos (`database.js`):

import 'dotenv/config';

Esta única línea se encarga de leer el archivo físico `.env`, procesar sus líneas e inyectarlas inmediatamente en la memoria antes de que se ejecuten los modelos o controladores.

## 4. Estructura del Archivo .env vs .env.example

En la raíz del proyecto se definen dos estructuras:

- **.env (Secreto y Local):** Archivo que contiene los accesos reales al motor de MySQL. Se incluye obligatoriamente en el archivo `.gitignore` para que Git nunca lo suba a GitHub.
- **.env.example (Público y Plantilla):** Archivo de referencia sin credenciales reales que se sube al repositorio para que otros desarrolladores conozcan las variables necesarias.

## 5. Acceso a las Variables y Ejemplo Aplicado al Proyecto

Para acceder a los valores inyectados desde el código de JavaScript, se utiliza la propiedad global `process.env.NOMBRE_DE_LA_VARIABLE`.

### Ejemplo de uso en `src/config/database.js`:

```javascript
import { Sequelize } from "sequelize";
import 'dotenv/config';

 En lugar de usar strings fijos, Sequelize consume los datos del .env
export const sequelize = new Sequelize(
  process.env.DB_NAME,       Nombre de la Base de Datos
  process.env.DB_USER,       Usuario (ej: root)
  process.env.DB_PASSWORD,  Contraseña de MySQL
  {
    host: process.env.DB_HOST,  Servidor (ej: localhost)
    dialect: 'mysql',
    logging: false
  }
);
```
