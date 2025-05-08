export default defineEventHandler(async (event) => {
  // Depuración: mostrar el valor de la API KEY
  console.log('DEEPSEEK_API_KEY:', process.env.DEEPSEEK_API_KEY);
  if (!process.env.DEEPSEEK_API_KEY) {
    return {
      error: 'La variable de entorno DEEPSEEK_API_KEY no está definida. Revisa tu archivo .env y reinicia el servidor.'
    };
  }
  const body = await readBody(event);
  const response = await $fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
    },
    body
  });
  return response;
}); 