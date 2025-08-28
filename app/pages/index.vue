<template>
  <div class="min-h-screen bg-m-darker text-m-light">
    <div class="p-6 flex items-center gap-[4vw]">
      <div class="flex items-stretch gap-6">
        <div class="aspect-square w-24 grid grid-cols-2 grid-rows-2">
          <div
            @click="playSound('soundOne')"
            class="cursor-pointer flex-1 rounded-full bg-m-blue aspect-square transition duration-200 active:scale-90 active:opacity-40 relative group hover:z-50"
          >
            <div class="w-full aspect-square bg-white/30 transition duration-200 will-change-transform group-hover:scale-[1.3] absolute inset-0 rounded-full"></div>
            <div class="w-full aspect-square bg-m-blue flex items-center justify-center absolute inset-0 rounded-full">
              <div
                v-if="!isPlaying"
                class="scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition duration-200 triangle-dark scale-[2] ml-1"
              ></div>
            </div>
          </div>
          <div
            @click="playSound('soundTwo')"
            class="cursor-pointer flex-1 rounded-full bg-m-blue aspect-square transition duration-200 active:scale-90 active:opacity-40 relative group hover:z-50"
          >
            <div class="w-full aspect-square bg-white/30 transition duration-200 will-change-transform group-hover:scale-[1.3] absolute inset-0 rounded-full"></div>
            <div class="w-full aspect-square bg-m-blue flex items-center justify-center absolute inset-0 rounded-full">
              <div
                v-if="!isPlaying"
                class="scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition duration-200 triangle-dark scale-[2] ml-1"
              ></div>
            </div>
          </div>
          <div
            @click="playSound('soundThree')"
            class="cursor-pointer flex-1 rounded-full bg-m-blue aspect-square transition duration-200 active:scale-90 active:opacity-40 relative group hover:z-50"
          >
            <div class="w-full aspect-square bg-white/30 transition duration-200 will-change-transform group-hover:scale-[1.3] absolute inset-0 rounded-full"></div>
            <div class="w-full aspect-square bg-m-blue flex items-center justify-center absolute inset-0 rounded-full">
              <div
                v-if="!isPlaying"
                class="scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition duration-200 triangle-dark scale-[2] ml-1"
              ></div>
            </div>
          </div>
          <div
            @click="playSound('soundFour')"
            class="cursor-pointer flex-1 rounded-full bg-m-blue aspect-square transition duration-200 active:scale-90 active:opacity-40 relative group hover:z-50"
          >
            <div class="w-full aspect-square bg-white/30 transition duration-200 will-change-transform group-hover:scale-[1.3] absolute inset-0 rounded-full"></div>
            <div class="w-full aspect-square bg-m-blue flex items-center justify-center absolute inset-0 rounded-full">
              <div
                v-if="!isPlaying"
                class="scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-[2] transition duration-200 triangle-dark scale-[2] ml-1"
              ></div>
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
        <h1 class="text-8xl font-bold select-none leading-none">Music.</h1>
      </div>

      <div class="flex-1 flex justify-end">
        <div class="flex gap-6 justify-end">
          <div class="w-1/2">
            <div class="text-sm font-semibold mb-1">CD Collection Database</div>
            <p class="text-xs leading-relaxed">My personal CD collection tracker website, contains currently owns CDs and my wishlist.
              <NuxtLink
                to="https://theplaydept.com"
                target="_blank"
                class="inline-flex ml-1 overflow-hidden group"
              >
                <span class="flex items-center -translate-x-4 transition duration-200 group-hover:translate-x-0">
                  <span class="block w-4">&rarr;</span>
                  <span class="block">Visit</span>
                  <span class="block ml-0.5 transition duration-200 group-hover:opacity-0">&nearr;</span>
                </span>
              </NuxtLink>
            </p>
          </div>
          <div class="text-sm font-semibold">
            <div class="text-sm font-semibold mb-1">Miscellaneous.</div>
            <ul class="font-normal text-xs leading-relaxed">
              <li>
                <NuxtLink
                  to="https://twitter.com/theplaydept"
                  target="_blank"
                  class="flex overflow-hidden group"
                >
                  <span class="flex items-center -translate-x-4 transition duration-200 group-hover:translate-x-0">
                    <span class="block w-4">&rarr;</span>
                    <span class="block">ThePlayDept.</span>
                    <span class="block ml-0.5 transition duration-200 group-hover:opacity-0">&nearr;</span>
                  </span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="https://glm.rizalrenaldi.com"
                  target="_blank"
                  class="flex overflow-hidden group"
                >
                  <span class="flex items-center -translate-x-4 transition duration-200 group-hover:translate-x-0">
                    <span class="block w-4">&rarr;</span>
                    <span class="block">God-like Musicians</span>
                    <span class="block ml-0.5 transition duration-200 group-hover:opacity-0">&nearr;</span>
                  </span>
                </NuxtLink>
              </li>
            </ul>

          </div>
          <!-- <div class="w-1/3 text-sm font-semibold">Cd Collection Database</div> -->
        </div>
      </div>
    </div>
    <!-- <div>{{ max }}</div> -->
    <div v-if="music">
      <div
        ref="list"
        class="songs-container"
      >
        <div class="select-none px-6 w-full h-10 border-b text-xs border-m-border flex items-center gap-6 relative">
          <div class="flex-1 flex items-center gap-4 opacity-50">
            <div class="w-9 text-xs opacity-50"></div>
            <div class="flex-1 line-clamp-1">SONG</div>
          </div>
          <div class="flex-1 line-clamp-1 opacity-50">ARTIST</div>
          <div class="flex-1 line-clamp-1 opacity-50">ALBUM</div>
          <div class="flex-1 opacity-50">GENRE</div>
          <div class="w-10"></div>
        </div>
        <SongItem
          v-for="(item, idx) in music"
          :idx="idx + 1"
          :title="item.title"
          :artist="item.artist"
          :album="item.album"
          :genre="item.genre"
          :cover="item.cover_image"
          :link="item.youtube_url"
          :coverShown="coverActive"
          :coverX="mx"
          :coverY="my"
          :rotation="rotation"
          :isCoverShown="isCoverShown"
          @mouseenter="coverEnter(idx + 1)"
          @mouseleave="coverLeave"
        />
      </div>

      <div ref="loadmore">
        <InfiniteScrollTrigger :show-loader="loadMoreStatus === 'loading'" />
      </div>
    </div>
  </div>
</template>


<script setup>
import { useElementVisibility, useMouse } from "@vueuse/core";

const client = useSupabaseClient()

// --- State ---
const music = ref([])          // our songs
const list = ref(null)
const loadmore = ref(null)
const targetIsVisible = useElementVisibility(loadmore)

const page = ref(0)
const limit = 20               // no need ref, doesn’t change
const max = ref(0)
const loadMoreStatus = ref('idle')

const from = ref(0)
const to = ref(limit - 1)

// --- Cover ---
const windowWidth = ref(0)
const coverActive = ref(null) // id?
const isCoverShown = ref(true)
let coverEnterTimeout

function coverEnter(id) {
  // cancel previous timer if still pending
  clearTimeout(coverEnterTimeout)

  // start new timer
  coverEnterTimeout = setTimeout(() => {
    coverActive.value = id
  }, 300) // 100ms delay
}

function coverLeave() {
  clearTimeout(coverEnterTimeout)
  coverActive.value = null
}

const { x, y: my } = useMouse({ touch: false })
onMounted(() => {
  // client-only
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })

  // start animation loop
  animate()
})

// target inverted X
const targetX = computed(() => {
  const mouseX = x.value || windowWidth.value / 2
  const inverted = windowWidth.value - mouseX
  return Math.max(60, Math.min(inverted, windowWidth.value - 260))
})

const rotation = computed(() => {
  const mouseX = x.value || windowWidth.value / 2
  const inverted = windowWidth.value - mouseX
  // clamp with same min/max as X
  const clamped = Math.max(60, Math.min(inverted, windowWidth.value - 260))
  // map to rotation degrees (-15 to 15 for example)
  return ((clamped - 60) / (windowWidth.value - 320)) * 30 - 15
})

// target Y (optional)
// const targetY = computed(() => {
//   const mouseY = y.value || windowHeight.value / 2
//   return Math.max(100, Math.min(mouseY, windowHeight.value - 100))
// })

// actual value with inertia
const mx = ref(targetX.value)
const speed = 0.1

function animate() {
  mx.value += (targetX.value - mx.value) * speed
  // my.value += (targetY.value - my.value) * speed
  requestAnimationFrame(animate)
}

// function coverMouseEnter(id) {
//   coverActive.value = id
// }
// function coverMouseLeave() {
//   coverActive.value = null
// }

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

// function playSound(sound) {
//   if (isPlaying.value === sound) {
//     stopAllSounds()
//     isPlaying.value = ''
//   } else {
//     stopAllSounds()
//     isPlaying.value = sound
//     sounds[sound].value?.play()
//   }
// }

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

// --- Fetch total count once ---

async function fetchCount() {
  const { count, error } = await client
    .from('playday_view')
    .select('*', { count: 'exact', head: true })

  if (error) {
    console.error('Count error:', error)
    return
  }

  max.value = Number(count ?? 0)
}

await fetchCount()

// --- Initial music load ---
const { data: initMusic } = await useAsyncData('initmusic', async () => {
  const { data } = await client
    .from('playday_view')
    .select('*')
    .order('id', { ascending: false })
    .range(from.value, to.value)
  return data ?? []
})

// sync to our music state
watch(initMusic, (val) => {
  if (Array.isArray(val)) music.value = val
}, { immediate: true })

// --- Load more ---
async function getMoreSongs() {
  console.log("get more songs")
  if (loadMoreStatus.value === 'loading') return
  if (music.value.length >= max.value) return

  loadMoreStatus.value = 'loading'

  const { data } = await client
    .from('playday_view')
    .select('*')
    .order('id', { ascending: false })
    .range(from.value, to.value)

  if (Array.isArray(data)) {
    music.value.push(...data)
  }

  loadMoreStatus.value = 'idle'
}

// --- Trigger fetch on visibility ---
watch(targetIsVisible, async (visible) => {
  if (!visible) return
  if (loadMoreStatus.value === 'loading') return
  if (music.value.length >= max.value) return

  page.value++
  from.value = page.value * limit
  to.value = from.value + limit - 1

  await getMoreSongs()
})
</script>
