<template>
  <div id="app">
    <div >
      <Home></Home>
    </div>
    <router-view />
  </div>
</template>

<script>
import Home from '@/views/Home.vue';
export default {
  name: 'app'
}
</script>

<style lang="scss">

</style>
