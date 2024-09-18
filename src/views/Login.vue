<script>
import {ref} from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const submitFormHandler = () => {
  const userName = ref('');
  const password = ref('');
  const router = useRouter();
  const store = useStore();

  const submitValue = () => {
    if (!userName.value.length || !password.value.length) {
      return console.log("OPS");
    }
    store.commit('mutationUserToken', {
      userName: userName.value,
      password: password.value
    })
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
  justify-content: center;
  height: 40vh;
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
  margin: 10rem auto auto auto;
  width: 30vw;
  height: 30vh;
  border-radius: 0.5rem;
  box-shadow: #9976c7 0 1px 5px;;
  background-color: #252525;
  @media (max-width: 900px) {
    width: 80vw;
    height: 40vh;
  }
}

.footer {
  display: flex;
  justify-content: end;
  width: 100%;
  height: 3rem;
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