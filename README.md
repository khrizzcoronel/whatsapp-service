# SGTE — Servicio de WhatsApp

Microservicio Node.js que conecta SGTE con WhatsApp mediante Baileys. Expone una API HTTP para consultar el estado de la conexión, solicitar un código de vinculación y enviar mensajes individuales o masivos.

## Desarrollo local

```bash
npm install
npm start
```

La API escucha en `http://localhost:7075` por defecto. El backend principal usa esta URL mediante `whatsapp.service.url`.

## Configuración

Copiar `config.example.js` como `config.js` cuando se prepare una instalación nueva. Definir `WHATSAPP_NUMERO` y `WHATSAPP_API_KEY` en el entorno; `WHATSAPP_PORT` permite cambiar el puerto. La misma clave debe estar configurada en el backend principal. El archivo `config.js` y la carpeta `sesion_wasa/` son locales y no deben subirse al repositorio.

El estado se consulta con `GET /api/whatsapp/estado`. Los envíos requieren la cabecera `x-api-key`.
