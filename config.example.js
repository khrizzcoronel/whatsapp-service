module.exports = {
    puerto: process.env.WHATSAPP_PORT || 7075,
    sesionCarpeta: 'sesion_wasa',
    miNumero: process.env.WHATSAPP_NUMERO || '',
    sufijoWhatsApp: '@s.whatsapp.net',
    apiKey: process.env.WHATSAPP_API_KEY || '',
};
