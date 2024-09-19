<script setup lang="ts">

</script>

<template>
  <div class="main-container">
    <div class="chat-container">
      <div class="conversation-container">
        <div class="user-bubble">
          <span>Usuário</span>
          <p>Olá, tudo bem?</p>
        </div>
        <div class="ia-bubble">
          <span>Usuário</span>
          <p>Olá, tudo bem?</p>
        </div>
      </div>
      <div class="message-input-container">
        <textarea></textarea>
        <button>Enviar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.main-container {
  width: 100vw;
  height: 100vh;
  padding-left: 20rem;
  padding-top: 10rem;
}

.chat-container {
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 60vh;
  border-style: solid;
  border-radius: 0.2rem;
}

.message-input-container{
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  padding: 1rem;
  button {
    margin-left: 0.5rem;
  }
  textarea {
    width: 80%;

  }
}

.conversation-container {
  overflow-y: auto;
}

.user-bubble {
  background-color: var(--purple-light);
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 50%;
  margin: 0.5rem 0.5rem 0.5rem auto;
}
.ia-bubble {
  background-color: var(--purple-light);
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 50%;
  margin: 0.5rem auto 0.5rem 0.5rem;
}


</style>