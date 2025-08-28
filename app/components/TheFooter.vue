<template>
  <footer class="fixed w-full bottom-0 flex items-center justify-between h-12 px-4 text-xs border-t bg-m-darker border-m-border text-m-light">
    <div class="absolute left-0 pointer-events-none w-full h-24 from-m-darker bg-gradient-to-t top-[-97px]"></div>

    <div class="flex items-center justify-between w-full">
      <span class="flex-1 w-full lg:w-1/5">{{ year }} &hearts; Indonesia / ID</span>
      <span class="flex-1 hidden text-center md:block">{{ selectedQuote
      }}</span>
      <div class="flex items-center justify-end flex-1 w-full lg:w-1/5">
        <NuxtLink
          to="https://rizalrenaldi.com"
          target="_blank"
          class="block font-bold"
        >
          <svg
            class="w-10"
            viewBox="0 0 168 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0767 18.2727V31.8087C19.102 31.0144 12.0392 33.0036 12.0392 40.8866V58.8842H0V19.067H12.0375V26.1557C13.6438 20.8207 19.0205 18.2727 24.0767 18.2727Z"
              fill="currentColor"
            />
            <path
              d="M28.4828 19.067H40.5203V58.8842H28.4828V19.067Z"
              fill="currentColor"
            />
            <path
              d="M77.8738 58.8842H45.7692V50.9204L60.9378 30.2166H46.5715V19.067H77.0698V27.0308L61.9012 47.7345H77.8738V58.8842Z"
              fill="currentColor"
            />
            <path
              d="M123.813 19.067V58.8842H111.776V55.1413C109.126 58.1672 105.195 60 99.8161 60C89.3035 60 80.6345 50.8413 80.6345 38.9765C80.6345 27.1099 89.3035 17.9529 99.8161 17.9529C105.195 17.9529 109.126 19.784 111.776 22.8116V19.067H123.813ZM111.776 38.9765C111.776 33.0036 107.761 29.2607 102.225 29.2607C96.6868 29.2607 92.6737 33.0036 92.6737 38.9765C92.6737 44.9476 96.6868 48.6905 102.225 48.6905C107.761 48.6905 111.776 44.9476 111.776 38.9765Z"
              fill="currentColor"
            />
            <path
              d="M157.499 20.8379C163.299 20.8379 168 16.1732 168 10.4189C168 4.66472 163.299 0 157.499 0C151.7 0 146.999 4.66472 146.999 10.4189C146.999 16.1732 151.7 20.8379 157.499 20.8379Z"
              fill="currentColor"
            />
            <path
              d="M129.699 0.753214H141.736V58.8843H129.699V0.753214Z"
              fill="currentColor"
            />
          </svg>

        </NuxtLink>
      </div>
      <!-- <span>With &hearts; from Indonesia / ID</span> -->
    </div>
    <!-- </div> -->
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
const quotes = [
  'Sometimes music is all you need.',
  'Where words fail, music speaks.',
  'My music will tell you more about me than I ever will.',
  'Music is the strongest form of magic.',
  'Without music, life would be a mistake.',
  'Good music does not have an expiration date.'
];

const lyrics = [
  'And if a double-decker bus crashes into us, to die by your side is such a heavenly way to die.',
  'You can choose a ready guide in some celestial voice. If you choose not to decide, you still have made a choice. You can choose from phantom fears and kindness that can kill. I will choose a path that\'s clear, I will choose freewill.',
  'Libraries gave us power, then work came and made us free. What price now for a shallow piece dignity.',
  'Blackbird singing in the dead of night. Take these broken wings and learn to fly.',
  'We want our film to be beautiful, not realistic.',
  'Make a new cult every day to suit your affairs.',
  'Being rebel is fine, but you go all the way to being brutal.',
  'Work it, make it, do it, makes us: harder, better, faster, stronger.',
  'Hello darkness my old friend, I\'ve come to talk with you again.',
  'I was happy in the haze of a druken hour, but heaven knows I\'m miserable now.',
  'Falling for the creep the body leech here he comes. Vicious hypnosis, a clenched fist saying it\'s wrong.',
  'So the choice I have made may seem strange to you. But who asked you, anyway? It\'s my life to wreck my own way.',
  'I believe I know you yet I don\'t truly know myself. I pray you won\'t feel as alone as I have felt.'
];

const selectedQuote = ref("")
const selectedLyric = ref("")

function randomize(data) {
  return data[Math.floor(Math.random() * data.length)]
}

function randomizeLyric() {
  selectedLyric.value = randomize(lyrics);
}


onMounted(() => {
  randomizeLyric()
  selectedQuote.value = randomize(quotes);
})

</script>