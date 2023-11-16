<script setup>
import { useCounterStore } from "/src/stores/CounterStore.js";

const counter = useCounterStore();
</script>

<template>
  <!--Botão para acessar a tela de cadastro mas neste caso ficou imcompleto
  <div>
    <router-link to="/CadastroComponent"><h1>Acesse a tela de cadastro</h1></router-link>
    <button @click="navigateToAbout">Clique aqui para acessar a tela de cadastro</button>
  </div>-->

  <!-- Form para se cadastrar sem validação-->
  <div class="primeira">
    <form class="form">
      <h1>Cadastra-se aqui</h1>

      <label>
        <span>Coloque seu email</span>
        <input type="email" name="email" /><input />
      </label>

      <label>
        <span>Coloque sua senha</span>
        <input type="password" name="password" /><input />
      </label>

      <button class="submit" type="button">Cadastrar-se</button>
    </form>
  </div>

  <!--Form para acessar mas sem validação-->
  <div class="segunda">
    <form class="form">
      <h1>Tela de login</h1>

      <label>
        <span>Coloque seu email</span>
        <input type="email" name="email" /><input />
      </label>

      <label>
        <span>Coloque sua senha</span>
        <input type="password" name="password" /><input />
      </label>

      <button class="submit" type="button">Cadastrar-se</button>
    </form>
  </div>
  <h2>Bem vindo ao sistema de login - abaixo incremente valores</h2>
  {{ counter.showCount }}

  <button @click="counter.increment">Aumentar</button>

  <button @click="counter.decrement">Diminuir</button>
</template>

<style scoped>
.primeira {
  display: inline-block;
  background: #fff;
  box-shadow: 0 19px 38px black, 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 25px;
  widows: 40%;
}

.segunda {
  display: inline-block;
  background: #fff;
  box-shadow: 0 19px 38px black, 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 25px;
  margin-left: 30px;
}

input,
button {
  border: none;
  outline: none;
  background: none;
}

h1 {
  color: black;
  padding-top: 10px;
  font-size: 30px;
}

.form {
  padding: 50px 30px;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}

label {
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}
button {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04aa6d;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

button:hover {
  background-color: #3e8e41;
}

button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

label span {
  font-size: 14px;
  font-weight: 600;
  color: #505f75;
  text-transform: uppercase;
}
</style>