<template>
  <form @submit.prevent="cadastro" class="container pt-5">
    <h2 class="text-center mb-5">Registre-se</h2>
    <div class="form-group">
      <label for="username" class="form-label">Usuário</label>
      <input type="text" id="username" class="form-control" required autofocus v-model="nome">
    </div>
    <div class="form-group">
      <label for="inputPassword" class="form-label">Senha</label>
      <input type="password" id="inputPassword" class="form-control" required v-model="senha">
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-lg btn-secondary btn-block w-50"
              type="submit"
      >
        Cadastre-se
      </button>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <a href="#" style="font-size: 18px" @click="redirect()">Já tenho conta</a>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Cadastro",
  methods: {
    redirect() {
      this.$router.push('/')
    },
    cadastro() {
      axios.post('http://localhost:8080/spring-app/usuario',
          {
            nome: this.nome,
            senha: this.senha
          })
          .then(res => {
            console.log(res)
            this.$router.push('/')
          })
          .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>