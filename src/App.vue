<template>
  <div id="app">
    <Logo></Logo>
    <router-view></router-view>
    <SideMenu></SideMenu>
  </div>
</template>

<script>
import Logo from './components/Logo'
import SideMenu from './components/Sidemenu'
export default {
  name: 'app',
  components:{
    Logo,
    SideMenu
  }
}
</script>

<style>
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  margin: 0px;
  height: 100%;
}

#app {
  overflow: hidden;
  min-width: 1100px;
  min-height: 670px;
  height: 100vh;
  position: relative;
}


</style>
