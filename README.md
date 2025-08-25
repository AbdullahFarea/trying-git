# WhatsApp Business Platform Sample

This project provides a simple Node.js backend demonstrating how to integrate the WhatsApp Business Cloud API. It includes basic endpoints for user management, contact handling, template storage and sending WhatsApp messages.

**Note:** This is only a starting point. Additional validation, security hardening and a proper frontend are required for production use.

## Setup

1. Install dependencies

```bash
npm install
```

2. Copy the `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

Edit `.env` and provide your MongoDB connection string and WhatsApp API credentials.

3. Start the server

```bash
node backend/server.js
```

The API will be available on `http://localhost:3000` by default.

## Endpoints

- `POST /api/auth/register` – create a user account
- `POST /api/auth/login` – log in
- `GET /api/contacts` – list contacts for the logged-in user
- `POST /api/contacts` – create a contact
- `GET /api/templates` – list message templates
- `POST /api/templates` – create a template
- `POST /api/messages/send` – send a WhatsApp message using a saved template
- `GET /api/messages` – view message history

## Environment variables

See `.env.example` for the variables that need to be configured:

- `PORT` – port to run the server on
- `SECRET` – session secret
- `MONGODB_URI` – MongoDB connection string
- `WHATSAPP_TOKEN` – WhatsApp Business API token
- `WHATSAPP_PHONE_ID` – phone number ID from Facebook

## Disclaimer

WhatsApp templates must be pre-approved in your Facebook Business account. Be sure to comply with WhatsApp's policies when sending messages.
