<template>
  <div class="chatia-container">
    <div class="chatia-header">
      <h1>¿Con qué puedo ayudarte?</h1>
    </div>
    <div class="chatia-messages">
      <div v-for="(msg, idx) in messages" :key="idx" :class="['chatia-message', msg.role]">
        <span>{{ msg.content }}</span>
      </div>
    </div>
    <form class="chatia-input-bar" @submit.prevent="sendMessage">
      <button type="button" class="chatia-btn attach" title="Adjuntar" :disabled="chatLimitReached"><i class="ri-attachment-2"></i></button>
      <input
        v-model="userInput"
        class="chatia-input"
        :placeholder="chatLimitReached ? 'Límite de consultas alcanzado' : placeholder"
        :disabled="chatLimitReached"
        @keydown.enter.exact.prevent="sendMessage"
      />
      <button type="button" class="chatia-btn search" title="Buscar" :disabled="chatLimitReached"><i class="ri-search-line"></i></button>
      <button type="button" class="chatia-btn reason" title="Razonar" :disabled="chatLimitReached"><i class="ri-lightbulb-line"></i></button>
      <button type="button" class="chatia-btn voice" title="Voz" :disabled="chatLimitReached"><i class="ri-mic-line"></i></button>
      <button type="submit" class="chatia-btn send" title="Enviar" style="display:none"></button>
    </form>
    <div v-if="chatLimitReached" style="color: #ff5252; margin-top: 1rem; text-align: center;">
      Has alcanzado el límite de 10 consultas.
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  initialPrompt: {
    type: String,
    default: 'Eres un asistente útil.'
  },
  placeholder: {
    type: String,
    default: 'Pregunta lo que quieras'
  }
});

const messages = ref([
  { role: 'system', content: props.initialPrompt }
]);
const userInput = ref('');
const isLoading = ref(false);

// Límite de consultas
const maxConsultas = 10;
const userConsultas = computed(() => messages.value.filter(m => m.role === 'user').length);
const chatLimitReached = computed(() => userConsultas.value >= maxConsultas);

async function sendMessage() {
  if (chatLimitReached.value) return;
  const content = userInput.value.trim();
  if (!content) return;
  messages.value.push({ role: 'user', content });
  userInput.value = '';
  isLoading.value = true;

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: messages.value.map(m => ({ role: m.role, content: m.content }))
      })
    });
    const data = await response.json();
    console.log('Respuesta API:', data);
    if (data && data.choices && data.choices[0]) {
      messages.value.push({ role: 'assistant', content: data.choices[0].message.content });
    } else if (data && data.error && data.error.message) {
      messages.value.push({ role: 'assistant', content: 'Error: ' + data.error.message });
    } else {
      messages.value.push({ role: 'assistant', content: 'No se recibió respuesta de la IA.' });
    }
  } catch (e) {
    messages.value.push({ role: 'assistant', content: 'Ocurrió un error al conectar con la IA.' });
  } finally {
    isLoading.value = false;
  }
}
</script>

<style scoped>
.chatia-container {
  background: #1a1a1a;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.chatia-header {
  margin-bottom: 2rem;
  text-align: center;
}
.chatia-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
}
.chatia-messages {
  width: 100%;
  max-width: 600px;
  flex: 1;
  overflow-y: auto;
  margin-bottom: 2rem;
  background: #232323;
  border-radius: 12px;
  padding: 1rem;
  min-height: 300px;
}
.chatia-message {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  max-width: 80%;
  word-break: break-word;
}
.chatia-message.user {
  background: #2d2dff;
  align-self: flex-end;
  margin-left: auto;
}
.chatia-message.assistant {
  background: #333;
  align-self: flex-start;
  margin-right: auto;
}
.chatia-message.system {
  background: #444;
  color: #bbb;
  text-align: center;
  margin: 0 auto 1rem auto;
  max-width: 90%;
}
.chatia-input-bar {
  display: flex;
  align-items: center;
  background: #232323;
  border-radius: 24px;
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.chatia-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  outline: none;
}
.chatia-btn {
  background: none;
  border: none;
  color: #bbb;
  font-size: 1.5rem;
  margin: 0 0.3rem;
  cursor: pointer;
  transition: color 0.2s;
}
.chatia-btn:hover {
  color: #fff;
}
</style> 