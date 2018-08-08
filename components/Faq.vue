<template>
  <transition name="fade" mode="out-in">
    <div
      class="faq mb-4"
    >
      <article
        class="font-mono text-grey-darkest border-b-2 border-dotted border-grey leading-normal py-6"
        v-html="text"
      ></article>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["text"]
}
</script>