<template>
  <div class="bg-m-darker text-m-light flex flex-col h-[calc(100vh-48px)] overflow-hidden">
    <div class="flex items-center justify-between h-28 w-full relative z-20 bg-m-darker border-b border-m-border">
      <div class="flex-1"></div>
      <div class="w-full max-w-[962px] xl:max-w-[1102px] 2xl:max-w-[1322px] flex items-center gap-6 px-4">
        <div class="flex-1 flex items-center gap-8">
          <div class="flex items-center gap-4">
            <NuxtLink
              to="/"
              class="grid grid-cols-2 size-12 group"
            >
              <span
                v-for="i in 4"
                class="block size-6 rounded-full bg-m-blue transition duration-200 group-hover:bg-m-light"
              ></span>
            </NuxtLink>
            <h1 class="font-bold text-5xl tracking-tight">EveryTrackHits.</h1>
          </div>
          <p class="text-xs opacity-70 max-w-[380px]">My personal favorite albums that are packed with bangers from start to finish. The order is random and not a reflection of rank.</p>
        </div>

        <div class="flex flex-col items-center justify-center">
          <span class="block text-m-blue font-bold tracking-tight text-5xl">{{ albums.length }}</span>
          <span class="block opacity-60 text-sm">Albums</span>
        </div>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center"></div>
    </div>

    <div class="h-[calc(100vh-48px)] flex-1 flex fixed inset-0">
      <div class="flex-1"></div>
      <div class="w-full max-w-[962px] xl:max-w-[1102px] 2xl:max-w-[1322px] border-l border-r border-m-border flex items-end">
        <div class="h-1/2 w-full relative">
          <div class="h-3/4 w-full bg-gradient-to-b from-m-darker absolute top-0 left-0"></div>
          <div class="w-full h-full dline"></div>
        </div>
      </div>
      <div class="flex-1"></div>
    </div>

    <div class="relative flex-1 w-full overflow-hidden wrapper">
      <div
        ref="slider"
        class="slider absolute top-0 w-full h-screen overflow-hidden [perspective:220px] [perspective-origin:50%_100%]"
      >
        <div
          ref="card"
          :id="`card-${item}`"
          v-for="(item, idx) in albums"
          :key="item"
          class="absolute w-full h-1/2 max-w-[700px] xl:max-w-[800px] 2xl:max-w-[960px] overflow-hidden -translate-x-1/2 -translate-y-1/2 card top-[40%] left-1/2 cursor-s-resize bg-[#343532] border border-m-border"
          @click="clicked(idx)"
        >
          <NuxtImg
            provider="imagekit"
            :src="getAlbumArt(item.artist, item.album)"
            alt="image"
            class="absolute object-cover w-full h-full opacity-50 blur-lg scale-105 brightness-70"
          />

          <div class="flex gap-10 items-stretch h-full relative">
            <div class="text-[10vw] leading-none absolute -top-2 right-4 font-bolds text-m-light/10 select-none">0{{ (albums.length - idx) }}</div>
            <div class="relative z-10 pl-6 xl:pl-10 2xl:pl-16 flex items-center justify-center">
              <NuxtImg
                provider="imagekit"
                :src="getAlbumArt(item.artist, item.album)"
                alt="album"
                loading="lazy"
                width="300"
                height="300"
                format="avif,webp,png"
                densities="x1 x2"
              />
            </div>
            <div class="flex-1 pr-6 xl:pr-10 2xl:pr-16 flex items-center justify-center">
              <ul class="w-full [&>li]:mb-2 select-none">
                <li>
                  <span class="block text-[11px] opacity-50">Album</span>
                  <span class="block font-bold">{{ item.album }}</span>
                </li>
                <li>
                  <span class="block text-[11px] opacity-50">Artist</span>
                  <span class="block font-bold">{{ item.artist }}</span>
                </li>
                <li>
                  <span class="block text-[11px] opacity-50">Release Date</span>
                  <span class="block">{{ item.year }}</span>
                </li>
                <li v-if="item.notes">
                  <span class="block text-[11px] opacity-50">Note</span>
                  <span class="block text-xs leading-relaxed">{{ item.notes }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="copy absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] flexs hidden items-center justify-center w-full text-center ">
            <span class="relative block text-6xl font-bold text-center text-white uppercase copy-text whitespace-nowrap">Image
              {{
                idx + 1
              }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NuxtImg } from '#components'

const albums = [
  {
    album: "Do We Speak A Dead Language?",
    artist: "Downset",
    year: "9 Sep 1996",
    link: "",
    notes: "Arguably one of pioneer and early influence that later becomes Rap Core, Rap Metal, Nu Metal, Hip Metal or whatever you called it when it comes to combining metal/hardcore sounds with rap. Back when it first came out, before Nu Metal wave came in, I myself considered it just a hardcore."
  },
  {
    album: "Available In All Colours",
    artist: "One Minute Silence",
    year: "9 Sep 1998",
    link: "",
    notes: ""
  },
  {
    album: "Siren Song of The Counter-Culture",
    artist: "Rise Against",
    year: "1 Jan 2004",
    link: "",
    notes: ""
  },
  {
    album: "The Feel Good Record of The Year",
    artist: "No Use For A Name",
    year: "1 Apr 2008",
    link: "https://open.spotify.com/album/4d5mfNaT5C5GPFMuZGLzoz?si=7cd5399ea8a8434f",
    notes: "The only NUFAN album that I consistently listens to in full. Even after so many years."
  },
  {
    album: "Kill 'Em All",
    artist: "Metallica",
    year: "24 Jul 1983",
    link: "https://open.spotify.com/album/6FMPDVTm8l5IrEQla46VQl?si=sNvYptuqTT2LT4YZWBuiJgQ",
    notes: "Nothing to add here. It's Metallica. It's Kill 'Em All. That's all."
  },
  {
    album: "Satanic Panic In The Attic",
    artist: "Of Montreal",
    year: "6 Apr 2004",
    link: "https://open.spotify.com/album/2dCCumiY8gQx1ekPHigIJ9?si=14d7cd193f9840a3",
    notes: ""
  },
  {
    album: "Unaltered Perspective",
    artist: "Inclination",
    year: "21 Oct 2022",
    link: "",
    notes: "Every year, I always looking for the fresh and new hardcore bands to listen to, and Inclination came hard. I'm in no way a straight-edge, but the music and lyric's message is so straight-edge and it's impossible to dislike. Almost like concept album, consists of full-on banger riffs."
  },
  {
    album: "Múr",
    artist: "Múr",
    year: "22 Nov 2024",
    link: "",
    notes: ""
  },
  {
    album: "Monuments",
    artist: "The Vintage Caravan",
    year: "16 Apr 2021",
    link: "",
    notes: "Found this band accidentally and couldn't remember how and when. But this album is definitely a banger. All of the song have catchy riffs and melody. It's peak Rock 'n Roll."
  },
  {
    album: "Sacrament",
    artist: "Lamb of God",
    year: "22 Aug 2006",
    link: "https://open.spotify.com/album/1cikCss5SRQLrIAmpyHoVw?si=bcc0a6da14064402",
    notes: "My first encounter with Lamb of God, and this album becomes one of my all-time favorite."
  },
  {
    album: "Sainthood",
    artist: "Tegan and Sara",
    year: "23 Oct 2009",
    link: "https://open.spotify.com/album/5jbNeqFGcBfFriyocUaM17?si=b7807229caba4755",
    notes: "This album is full of catchy chord progressions, and it's truly enjoyable from start to finished. The lyric-theme is maybe too teenage-y, but music-wise, it's simple but remarkable."
  },
  {
    album: "S.C.I.E.N.C.E.",
    artist: "Incubus",
    year: "9 Sep 1997",
    link: "",
    notes: "For me, S.C.I.E.N.C.E. is the peak Incubus. It's grooves, it's screams, it's heavy. A perfect combination of what Incubus known for. Feels experimental but still very digestable. Trivia: I had a band that covers Incubus during my high school's year. The band's name is Battlestar. If you know, you know."
  },
  {
    album: "This Is My Truth Tell Me Yours",
    artist: "Manic Street Preachers",
    year: "14 Sep 1998",
    link: "hhttps://open.spotify.com/album/3gUL89r4nMGlkjRdfiZfZW?si=7f4cd9e9efa84920",
    notes: ""
  },
  {
    album: "The Life Pursuit",
    artist: "Belle & Sebastian",
    year: "6 Feb 2006",
    link: "https://open.spotify.com/album/1hS6jLMAAtF4UDOucCewKR?si=21c7a73c9bae4de0",
    notes: "Instant classic. Belle's classic. My first encounter with Belle & Sebastian is through this album. For me, this album perfectly encapsulate what B&S is all about."
  },
  {
    album: "Blue-Sky Research",
    artist: "Taproot",
    year: "15 Aug 2005",
    link: "https://open.spotify.com/album/0yf6tzIZPVtgozEkWhKsoO?si=92e955dcf9aa4a4f",
    notes: "The nu-metal era was when I really started getting into metal, and fortunately this band came along during that time. However, Taproot isn't about rapping, they scream and sing instead. Specifically with this album, I listened to it while reading The Da Vinci Code, so it accidentally became my personal soundtrack for the book. Many parts of the story ended up associating in my mind with the songs on this album, music-wise, not lyrically."
  },
  {
    album: "Pinkerton",
    artist: "Weezer",
    year: "24 Sep 1996",
    link: "",
    notes: ""
  },
  {
    album: "Sleeping With Ghosts",
    artist: "Placebo",
    year: "24 Mar 2003",
    link: "",
    notes: ""
  },
  {
    album: "11:11",
    artist: "Rodrigo Y Gabriela",
    year: "8 Sep 2009",
    link: "https://open.spotify.com/album/3CuY1zO7c0xlUTlAOcWYNp?si=c7dXIJ2PQNeGTSaypzE1cQ",
    notes: "Definitely a happy accident that I found out about RYG and this album. Definetely shock when I see how they both play. I always suspect it, but they both have metal music background."
  },
  {
    album: "S/T",
    artist: "Rage Against The Machine",
    year: "3 Nov 1992",
    link: "https://open.spotify.com/album/4Io5vWtmV1rFj4yirKb4y4?si=I4fDTXE3QiumlqDr-PC-kA",
    notes: "I have lot of memories with this album. Found RATM and this album out almost a decade later after its initial released, back when I was in high school. The album that shook my world and my world-view. Teaches me beyond music."
  },
  {
    album: "The Art of Rebellion",
    artist: "Suicidal Tendencies",
    year: "30 Jun 1992",
    link: "https://open.spotify.com/album/0YuCx3bdCJG3n2kuQOhiWL?si=lxyCPO_ASgqWCXldhjqK8g",
    notes: "This is the only Suicidal Tendencies album that I like (weird laugh). It's pretty different than their other albums. Song-wise, yes, there are some other great songs from their other albums, but album-wise, this is my top pick."
  },
  {
    album: "Permanent Waves",
    artist: "Rush",
    year: "14 Jan 1980",
    link: "https://open.spotify.com/album/3nUNxSh2szhmN7iifAKv5i?si=44da40a4f695414c",
    notes: "To be honest I always have a weird relationship when it comes to Rush. I know Rush and have heard Tom Sawyer even back when I was in high school, but never really interested to dig up more. Only few years later when I was in a college I start to know Rush more, and this album was the first one I deeply explored, and in my opinion it's an album with 6 songs of perfection. Chef's kiss."
  },
  {
    album: "Operation Mindcrime",
    artist: "Queensryche",
    year: "3 May 1988",
    link: "https://open.spotify.com/album/16VzTNaeadMjxI03Xi9s6n?si=7618e7d6966046c5",
    notes: "One day I was googling for `a concept album`, and this album came up few times on different lists, so I listen to it. This is without the doubt the best concept album made in late 80s era."
  },
  {
    album: "Hybrid Theory",
    artist: "Linkin Park",
    year: "24 Oct 2000",
    link: "https://open.spotify.com/album/6PFPjumGRpZnBzqnDci6qJ?si=fb5c6e83de2a4b22",
    notes: "I was in high school back in 2000. One day, a couple of friends and I went to a record store after school, just looking around with no plans to buy anything. On the \"New Releases\" wall, I saw this album on cassette stacked from the top all the way to the bottom. I'd never heard of the band before, and honestly, I was only drawn to the cover design + the title \"Hybrid Theory\" sounds really cool. I decided to spend my pocket money on it. Later, I realized I made the best decision. The rest is history."
  },
]
const card = ref(null)

const slider = ref(null)
const isAnimating = ref(false)
const { $gsap, $CustomEase } = useNuxtApp()


// function initCards() {
//   const cards = Array.from(document.querySelectorAll(".card"))

//   $gsap.to(cards, {
//     y: (i) => -10 + 10 * i + "%",
//     z: (i) => 10 * i,
//     duration: 1,
//     stagger: -0.1
//   })
//   $gsap.to(cards[0], {
//     opacity: 1,
//     delay: 1
//   })
// }

function initCards() {
  const cards = Array.from(document.querySelectorAll(".card"))
  const total = cards.length

  // define how much total depth you want the stack to span
  const TOTAL_Z = 60
  const TOTAL_Y = 68 // percentage shift span

  const stepZ = TOTAL_Z / (total - 1)
  const stepY = TOTAL_Y / (total - 1)

  $gsap.to(cards, {
    y: (i) => -TOTAL_Y / 2 + stepY * i + "%", // centered vertically
    z: (i) => stepZ * i,
    duration: 0.5,
    stagger: -0.1
  })

  $gsap.to(cards[0], {
    opacity: 1,
    delay: (total - 1) * 0.3 // tweak multiplier to match your stagger speed
  })
}


function clicked(i) {
  if (isAnimating.value) return

  isAnimating.value = true

  const slider = document.querySelector(".slider")
  const cards = Array.from(slider.querySelectorAll(".card"))
  const lastCard = cards.pop()
  const nextCard = cards[cards.length - 1]
  // console.log("lastCard", lastCard)

  $gsap.to(lastCard.querySelectorAll(".copy .copy-text"), {
    y: 200,
    duration: 0.75,
    ease: "cubic",
  })

  $gsap.to(lastCard, {
    y: "+=150%",
    duration: 0.75,
    opacity: 0,
    ease: "cubic",
    onComplete: () => {
      // console.log("complete", lastCard)
      slider.prepend(lastCard)
      initCards()
      $gsap.set(lastCard.querySelectorAll(".copy .copy-text"), { y: 200 })
      $gsap.set(lastCard, { opacity: 0, delay: 0.5 })
      // console.log("after initCards", lastCard)

      setTimeout(() => {
        isAnimating.value = false
      }, 1000)
    }
  })

  $gsap.to(nextCard.querySelectorAll(".copy .copy-text"), {
    y: 0,
    duration: 1,
    ease: "cubic",
    stagger: -0.05
  })
}

function getAlbumArt(artist, album) {
  const encodeNFD = str =>
    encodeURIComponent(str.toLowerCase().normalize("NFD").replaceAll(/[^A-Za-z0-9\u0300-\u036f]/g, ''));

  return `/cds/${encodeNFD(artist)}-${encodeNFD(album)}.jpg`;
}


onMounted(() => {
  nextTick(() => {
    const context = $gsap.context(() => {
      $CustomEase.create("cubic", "0.83, 0, 0.17, 1")

      $gsap.set(".copy .copy-text", { y: 200 })
      $gsap.set(".slider .card:last-child .copy .copy-text", { y: 0 })
      setTimeout(() => {
        initCards()
      }, 500)
    })
  })
})

</script>
