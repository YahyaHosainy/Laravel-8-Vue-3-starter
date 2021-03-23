<template>
  <div class="container mt-4">
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, cupiditate reiciendis! Nisi rerum delectus maiores nam et. Iure saepe nihil, eligendi soluta officiis minima voluptatum assumenda omnis velit ipsa atque.
    </p>
    <h4>change reactive title</h4>
    <input type="text" v-model="reactive.data.title" class="form-control">
  </div>
</template>

<script>
export default {
  data() {
    return {
      reactive: window.store.reactive
    }
  },
}
</script>