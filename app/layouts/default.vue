<template>
  <div class="antialiased font-sans">
    <div class="lg:hidden bg-m-darker text-m-light h-dvh flex flex-col items-center justify-start pt-28 fixed top-0 left-0 z-50 w-full">
      <span class="block text-4xl font-bold mb-2">Music.</span>
      <span class="block mb-2 max-w-sm text-center mx-auto px-6">I'm sorry, but mobile is currently not supported. While you're here, you can tap one of these four circles to see if you know the song!</span>
      <div class="size-72 flex items-center justify-center">
        <Sounds class="scale-[2.5]" />

      </div>
    </div>
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup>

</script>