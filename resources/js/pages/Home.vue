<template>
  <div class="container mt-4">
    
    <h1>Hello to laravel 8 vue 3</h1>
    <p>This starter was created by Yahya Hosainy</p>
    
    <p>
      Here is the Vuex store counter: {{$store.state.counter}},
      <button
        class="btn btn-primary btn-sm p-0 d-inline-block"
        @click="$store.commit('increment')"  
      >
        Increment
      </button>
    </p>
    
    <button class="btn btn-outline-primary" @click="$router.push('/repo')">Repo (Vue router link)</button>
  
  </div>
</template>
