<template>
  <div class="w-full">
    <!-- ***** LOAD MORE***** -->
    <div
      v-show="showLoader"
      class="flex items-center justify-center h-10 py-10"
    >
      <span class="loader"></span>
    </div>

    <!-- ***** ALL LOADED ***** -->
    <div
      v-show="!showLoader"
      class="dline flex bg-m-darkests flex-col items-center justify-center w-full pt-20 pb-28"
    >
      <span class="block mb-1 font-semibold tracking-tight text-m-light">All songs loaded.</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  'showLoader'
])
</script>
