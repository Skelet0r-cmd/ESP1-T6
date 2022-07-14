<template>
<nav id="nav" class="navbar navbar-expand-lg bg-light" style="background-color: white;">
  <div class="container-fluid">
    <a class="navbar-brand">
        <img id="icon" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/87044f58-c765-43c5-bc51-8613e3ac7ab1/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png" alt="">
    </a>
  </div>
</nav>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        
        <PokemonPicture />
        <PokemonOptions />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button id="boton" @click="newGame" type="button" class="btn btn-dark">Jugar de nuevo</button>
        </template>

    </div>
    
</template>


<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';

import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';


const { pokemon,showAnswer, message, mixPokemonArray, newGame } = usePokemons();
    
mixPokemonArray();

</script>

<style scoped>
.boton {
    color:purple;
}
#icon {
    width: 250px;
}
.navbar-brand {
    position: absolute;
    left: 40%;
    padding-bottom: 50px;
  }
  .navbar-expand-lg{
    background-color:white;
  }
</style>

