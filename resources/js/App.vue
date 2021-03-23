<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>

import Navbar from './components/Navbar'

export default {
  components:{
    Navbar
  }
}
</script>