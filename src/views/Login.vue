<script>
import {ref} from "vue";
import { useRouter } from "vue-router";

const submitFormHandler = () => {
  const userName = ref('');
  const password = ref('');
  const router = useRouter();

  const submitValue = () => {
    if (!userName.value.length || !password.value.length) {
      return console.log("OPS");
    }
    return router.push("/home")
  };

  return {
    userName,
    password,
    submitValue
  };
}

export default {
  setup() {
    return {
      ...submitFormHandler()
    }
  }
}

</script>

<template>
  <div class="page-container">
    <div class="main-container">
      <div class="header">
        <h1>SING IN</h1>
      </div>
      <div class="inputs">
        <div>
          <span>Username</span>
          <input type="text" required  v-model="userName"/>
        </div>
        <div>
          <span>Password</span>
          <input type="password" required v-model="password"/>
        </div>
      </div>
      <div class="footer">
        <button v-on:click="submitValue">Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.inputs {
  display: flex;
  flex-direction: column;
  height: 30vh;
  div {
    display: flex;
    flex-direction: column;
    margin: 0 0 0.5rem;
    input {
      border-radius: 0.2rem;
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
  box-shadow: #9976c7 0 1px 5px;;
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
    background-color: #9976c7;
    color: black;
    border: solid #9976c7 ;
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