<template>
  <main class="container">
    <h2 class="text-4xl pb-4">
      Nadpis
    </h2>

    <p class="pb-8 text-xl">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, soluta eligendi ipsum facere, accusantium mollitia ad rem a totam rerum impedit distinctio beatae perspiciatis hic suscipit dolore est adipisci possimus.
    </p>

    <div class="flex flex-wrap">
      <nuxt-link
        class="text-2xl inline-block no-underline border-2 py-2 px-4 font-semibold rounded mr-4 my-4"
        v-for="(city, index) in sortedCities"
        :key="index"
        v-text="city.name"
        :to="city.path">
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import cities from "~/cities.js";

export default {
  middleware: 'svitavy',

  head() {
    return {
      title: 'Městský zápisník'
    }
  },

  data() {
    return {
      cities
    }
  },

  computed: {
    sortedCities() {
      return this.cities.sort();
    }
  }
}
</script>