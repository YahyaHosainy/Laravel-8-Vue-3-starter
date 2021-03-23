<template>
  <div class="container mt-4">
    <h1>{{_static.AppName}}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A id necessitatibus ad dolore quo voluptatibus tempore in commodi, nobis enim, autem fuga repellat corporis aliquid hic vitae? Error, repudiandae porro.
    </p>
    <h4>{{reactive.data.title}}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reactive: window.store.reactive,
      _static: window.store.static
    }
  },
}
</script>