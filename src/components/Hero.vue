<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-yellow-300">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-600">1 col</div>
        <div class="col-start-2 col-span-5 border border-blue-600">
          <Headline />
        </div>
        <div class="col-start-7 col-span-5 border border-blue-600">5 cols</div>
        <div class="col-start-12 col-span-1 border border-blue-600">1 col</div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "./Headline.vue";
export default {
  name: "Hero",
  components: { Headline },
};
</script>

<style scoped></style>
