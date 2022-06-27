<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import Login from "./views/Login";
import Consultas from "./views/Consultas";

export default {
  name: 'app',
  components: {Consultas, Login},
  computed: {
    ...mapState([
      'usuario'
    ])
  },
  methods: {
    ...mapMutations([
      'logout'
    ])
  }
}
</script>

<template>
  <div id="app" class="container-fluid">
    <div class="row vh-100" v-if="!usuario">
      <div class="col-8 p-5">
        <template>
          <div class="text-center">
            <h1>Bem vindo - spring boot application</h1>
          </div>
        </template>
      </div>
      <div class="col-4 bg-info">
        <router-view/>
      </div>
    </div>
    <div class="row" v-if="usuario">
      <div class="col-12 h-50">
        <h1>Spring boot application - efetue consultas</h1>
        <consultas/>
      </div>
    </div>
  </div>
</template>