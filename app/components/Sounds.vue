<template>
  <div class="aspect-square w-24 grid grid-cols-2 grid-rows-2">
    <div
      @click="playSound('soundOne')"
      class="cursor-pointer flex-1 rounded-full bg-m-blue aspect-square transition duration-200 active:scale-90 active:opacity-40 relative group hover:z-50"
    >
      <div
        class="w-full aspect-square bg-white/30 transition duration-200 will-change-transform group-hover:scale-[1.3] absolute inset-0 rounded-full"
        :class="!isPlaying ? '' : 'opacity-0'"
      ></div>
      <div class="w-full aspect-square bg-m-blue flex items-center justify-center absolute inset-0 rounded-full">
        <div
          v-if="!isPlaying"
          class="scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition duration-200 triangle-dark scale-[2] ml-1"
        ></div>
        <Equalizer v-if="isPlaying === 'soundOne'" />
      </div>
    </div>
    <div
      @click="playSound('soundTwo')"
      class="cursor-pointer flex-1 rounded-full bg-m-blue aspect-square transition duration-200 active:scale-90 active:opacity-40 relative group hover:z-50"
    >
      <div
        class="w-full aspect-square bg-white/30 transition duration-200 will-change-transform group-hover:scale-[1.3] absolute inset-0 rounded-full"
        :class="!isPlaying ? '' : 'opacity-0'"
      ></div>
      <div class="w-full aspect-square bg-m-blue flex items-center justify-center absolute inset-0 rounded-full">
        <div
          v-if="!isPlaying"
          class="scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition duration-200 triangle-dark scale-[2] ml-1"
          :class="!isPlaying ? '' : 'opacity-0'"
        ></div>
        <Equalizer v-if="isPlaying === 'soundTwo'" />
      </div>
    </div>
    <div
      @click="playSound('soundThree')"
      class="cursor-pointer flex-1 rounded-full bg-m-blue aspect-square transition duration-200 active:scale-90 active:opacity-40 relative group hover:z-50"
    >
      <div
        class="w-full aspect-square bg-white/30 transition duration-200 will-change-transform group-hover:scale-[1.3] absolute inset-0 rounded-full"
        :class="!isPlaying ? '' : 'opacity-0'"
      ></div>
      <div class="w-full aspect-square bg-m-blue flex items-center justify-center absolute inset-0 rounded-full">
        <div
          v-if="!isPlaying"
          class="scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition duration-200 triangle-dark scale-[2] ml-1"
          :class="!isPlaying ? '' : 'opacity-0'"
        ></div>
        <Equalizer v-if="isPlaying === 'soundThree'" />
      </div>
    </div>
    <div
      @click="playSound('soundFour')"
      class="cursor-pointer flex-1 rounded-full bg-m-blue aspect-square transition duration-200 active:scale-90 active:opacity-40 relative group hover:z-50"
    >
      <div
        class="w-full aspect-square bg-white/30 transition duration-200 will-change-transform group-hover:scale-[1.3] absolute inset-0 rounded-full"
        :class="!isPlaying ? '' : 'opacity-0'"
      ></div>
      <div class="w-full aspect-square bg-m-blue flex items-center justify-center absolute inset-0 rounded-full">
        <div
          v-if="!isPlaying"
          class="scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition duration-200 triangle-dark scale-[2] ml-1"
          :class="!isPlaying ? '' : 'opacity-0'"
        ></div>
        <Equalizer v-if="isPlaying === 'soundFour'" />
      </div>
    </div>

    <audio
      ref="soundOne"
      preload="auto"
      class="sound"
      src="/v.wav"
    ></audio>
    <audio
      ref="soundTwo"
      preload="auto"
      class="sound"
      src="/p.wav"
    ></audio>
    <audio
      ref="soundThree"
      preload="auto"
      class="sound"
      src="/j.wav"
    ></audio>
    <audio
      ref="soundFour"
      preload="auto"
      class="sound"
      src="/s.wav"
    ></audio>
  </div>
</template>

<script setup>
// --- Sounds ---
const soundOne = ref(null)
const soundTwo = ref(null)
const soundThree = ref(null)
const soundFour = ref(null)
const sounds = { soundOne, soundTwo, soundThree, soundFour }
const isPlaying = ref("")

function stopAllSounds() {
  Object.values(sounds).forEach(s => {
    if (s.value) {
      s.value.pause()
      s.value.currentTime = 0
    }
  })
}

function playSound(sound) {
  if (isPlaying.value === sound) {
    stopAllSounds()
    isPlaying.value = ''
  } else {
    stopAllSounds()
    isPlaying.value = sound

    const audio = sounds[sound].value
    if (audio) {
      audio.currentTime = 0 // optional: restart from beginning
      audio.play()

      // detect when finished
      audio.onended = () => {
        if (isPlaying.value === sound) {
          isPlaying.value = ''
        }
      }
    }
  }
}
</script>