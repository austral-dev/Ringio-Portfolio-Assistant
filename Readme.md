# 🇦🇷 Español | 🇺🇸 [English below](#-english)

---

# Ringio Portfolio Assistant - API

> API REST para asistencia inteligente en la gestión de portfolios de inversión, potenciada por un sistema RAG con datos del mercado en tiempo real.

## Equipo

| Nombre | GitHub |
|--------|--------|
| [Kotlar Macarena] | [[MacarenaKotlar](https://github.com/MacarenaKotlar)] |
| [Romano Sion Uziel] | [[Uziel562728](https://github.com/Uziel562728)] |
| [Szostak Matías] | [[matiasmszostak](https://github.com/matiasmszostak)] |
| [Zakuski Agustín] | [[AgustinZakuski](https://github.com/AgustinZakuski)] |

## Deploy

🔗 **Producción:** https://trabajo-integrador-tp2.onrender.com

## Stack Tecnológico

- **Runtime:** Node.js
- **Framework:** Express
- **Base de datos:** MongoDB (Mongoose)
- **Autenticación:** JWT (JSON Web Tokens)
- **Documentación:** Swagger 
- **API de mercado:** [Por definir — SerpAPI / Alpha Vantage / otra]
- **Deploy:** Render

## Estructura del Proyecto

    src/
    ├── config/          # Variables de entorno y configuración
    ├── controllers/     # Lógica de cada endpoint
    ├── middlewares/     # Autenticación JWT y otros middlewares
    ├── models/          # Esquemas de Mongoose
    ├── repositories/    # Acceso a la base de datos
    ├── routes/          # Definición de rutas
    └── services/        # Lógica de negocio
    .env.example         # Plantilla de variables de entorno
    server.js            # Entry point
    test.http            # Pruebas con REST Client (VS Code)

## Instalación y uso local

### Requisitos previos

- Node.js >= 14
- Una cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas)

### Pasos

1. Clonar el repositorio:
​```bash
git clone https://github.com/austral-dev/TRABAJO_INTEGRADOR_TP2.git
cd TRABAJO_INTEGRADOR_TP2
​```

2. Instalar dependencias:
​```bash
npm install
​```

3. Configurar variables de entorno:
​```bash
cp .env.example .env
​```
Completar el archivo `.env` con los valores correspondientes.

4. Iniciar el servidor en modo desarrollo:
​```bash
npm run dev
​```

## Variables de Entorno

​env

>PORT = 1337

>JWT_TOKEN_SECRET = your_jwt_secret_here

>JWT_EXPIRES = 1d

>MONGO_URI = your_mongodb_atlas_uri_here

>MARKET_API_KEY = your_market_api_key_here
​



## Documentación de la API

- **Local:** http://localhost:1337/api/docs
- **Producción:** https://trabajo-integrador-tp2.onrender.com/api/docs

## ¿Cómo funciona el asistente?

El sistema implementa un patrón **RAG (Retrieval-Augmented Generation)**:

1. El usuario se autentica y envía una consulta sobre su portfolio
2. El sistema obtiene datos actuales del mercado desde la API externa
3. Esos datos enriquecen el contexto de la consulta
4. El modelo genera una respuesta fundamentada en datos reales

## Pruebas

El archivo `test.http` contiene ejemplos listos para ejecutar con la extensión [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) de VS Code.

## Licencia

ISC

---

# 🇺🇸 English

# Ringio Portfolio Assistant - API

> REST API for intelligent investment portfolio management assistance, powered by a RAG system with real-time market data.

## Team

| Name | GitHub |
|------|--------|
| [Kotlar Macarena] | [[MacarenaKotlar](https://github.com/MacarenaKotlar)] |
| [Romano Sion Uziel] | [[Uziel562728](https://github.com/Uziel562728)] |
| [Szostak Matías] | [[matiasmszostak](https://github.com/matiasmszostak)] |
| [Zakuski Agustín] | [[AgustinZakuski](https://github.com/AgustinZakuski)] |

## Deploy

🔗 **Production:** https://trabajo-integrador-tp2.onrender.com

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Documentation:** Swagger
- **Market API:** [TBD — SerpAPI / Alpha Vantage / other]
- **Deploy:** Render

## Project Structure

    src/
    ├── config/          # Environment variables and configuration
    ├── controllers/     # Endpoint logic
    ├── middlewares/     # JWT authentication and other middlewares
    ├── models/          # Mongoose schemas
    ├── repositories/    # Database access layer
    ├── routes/          # Route definitions
    └── services/        # Business logic
    .env.example         # Environment variables template
    server.js            # Entry point
    test.http            # REST Client tests (VS Code)

## Local Setup

### Prerequisites

- Node.js >= 14
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account

### Steps

1. Clone the repository:
​```bash
git clone https://github.com/austral-dev/TRABAJO_INTEGRADOR_TP2.git
cd TRABAJO_INTEGRADOR_TP2
​```

2. Install dependencies:
​```bash
npm install
​```

3. Set up environment variables:
​```bash
cp .env.example .env
​```

4. Start the development server:
​```bash
npm run dev
​```

## Environment Variables

​env

>PORT = 1337

>JWT_TOKEN_SECRET = your_jwt_secret_here

>JWT_EXPIRES = 1d

>MONGO_URI = your_mongodb_atlas_uri_here

>MARKET_API_KEY = your_market_api_key_here
​



## API Documentation

- **Local:** http://localhost:1337/api/docs
- **Production:** https://trabajo-integrador-tp2.onrender.com/api/docs

## How the Assistant Works

1. The user authenticates and sends a query about their portfolio
2. The system fetches current market data from the external API
3. That data enriches the query context
4. The model generates a response grounded in real market data

## Testing

The `test.http` file contains ready-to-run examples using the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VS Code extension.

## License

ISC
