<script setup lang="ts">

</script>

<template>
  <div class="page-container">
    <div class="main-container">
      <div class="header">
        <h1>Login</h1>
      </div>
      <div class="inputs">
        <div>
          <span>Username</span>
          <input type="text" />
        </div>
        <div>
          <span>Password</span>
          <input type="password" />
        </div>
      </div>
      <div class="footer">
        <span>Forget Password</span>
        <button>Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.inputs {
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    margin: 0 0 0.5rem;
    input {
      background-color: #252525;
      border: solid 0.1rem;
      height: 2rem;
      color: #9976c7;
    }
    span {
      margin-bottom: 0.4rem;
      font-weight: bold;
    }
  }
}
.page-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 30vw;
  height: 50vh;
  border-radius: 0.5rem;
  box-shadow: #9976c7 0 5px 10px;;
  background-color: #252525;
}

.footer {
  display: block;
  width: 100%;
  height: 20%;
  margin-top: auto;
  text-align: right;
  button {
    margin-left: 1rem;
    background-color: #252525;
    color: #9976c7;
    border: solid;
    border-radius: 0.2rem;
    padding: 0.5rem;
    width: 30%;
    cursor: pointer;

  }
  span {
    cursor: pointer;
    font-weight: bolder;
  }
}

</style>