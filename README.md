# Nodemailer Email API

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env` and fill in your SMTP credentials.

## Running the Server

```bash
node index.js
```

## API Endpoints

### POST /send-contact-email
Send a contact form email.

**Body:**
```
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message"
}
```

### POST /send-career-mail
Send a career application email.

**Body:**
```
{
  "name": "Your Name",
  "email": "your@email.com",
  "position": "Position Name",
  "message": "Your message"
}
``` 