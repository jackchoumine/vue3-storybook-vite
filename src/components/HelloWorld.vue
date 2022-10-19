<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="white" text-color="black" label="Standard" />
      <q-btn color="primary" label="Primary" />
      <q-btn color="secondary" label="Secondary" />
      <q-btn color="amber" glossy label="Amber" />
      <q-btn color="brown-5" label="Brown 5" />
      <q-btn color="deep-orange" glossy label="Deep Orange" />
      <q-btn color="purple" label="Purple" />
      <q-btn color="black" label="Black" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
