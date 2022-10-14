<template>
  <div>
    <main-nav />
    <hero />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import Hero from "./components/Hero.vue";
export default { components: { MainNav, Hero } };
</script>
<style scoped></style>
