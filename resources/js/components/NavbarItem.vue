<template>
  <li class="nav-item">
    <router-link :class="{active:$route.name == to.name}" class="nav-link" :to="to">{{print}}</router-link>
  </li>
</template>

<script>
export default {
  props: ['to','print']
}
</script>