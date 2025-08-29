<template>
  <div
    class="song px-6 w-full h-12 border-b transition duration-200 hover:bg-m-darkest border-m-border flex items-center gap-6 relative"
    @mouseenter="enterHandler"
    @mouseleave="outHandler"
  >
    <div class="flex-1 flex items-center gap-4">
      <div class="w-9 text-[11px] opacity-50 tabular-nums">{{ num }}</div>
      <div class="flex-1 line-clamp-1">{{ title }}</div>
    </div>
    <div class="flex-1 line-clamp-1">{{ artist }}</div>
    <div class="flex-1 line-clamp-1">{{ album }}</div>
    <div class="flex-1">{{ genre }}</div>
    <NuxtLink
      :to="link"
      target="_blank"
      class="w-10 flex items-center gap-2 group"
    >
      <span class="block transition duration-200 group-hover:translate-x-0 translate-x-2 opacity-0 group-hover:opacity-100">Play</span>
      <div class="triangle group-hover:opacity-100 opacity-25 transition duration-200"></div>
    </NuxtLink>

    <transition name="fade">
      <NuxtImg
        v-if="isCoverShown && coverShown === idx"
        :id="`cover-${idx}`"
        :src="cover"
        width="200"
        height="200"
        loading="lazy"
        class="will-change-transform z-50 absolute top-1/2 -translate-y-1/2 pointer-events-none"
        :style="isCoverShown ? `left: ${coverX}px; transform:rotate(${rotation}deg);` : ''"
      />
    </transition>
  </div>
</template>

<script setup>
defineProps([
  'idx', 'num', 'title', 'artist', 'album', 'genre', 'link', 'cover', 'coverShown', 'coverX', 'coverY', 'rotation', 'isCoverShown'
])

const emit = defineEmits(['mouseenter', 'mouseleave'])

function enterHandler() {
  emit('mouseenter')
}

function outHandler() {
  emit('mouseleave')
}
</script>