<template>
  <div>
    <div
      class="flex flex-col space-y-28 h-screen gradient-bg gradients-container border-4 border-red-500"
    >
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div class="g1"></div>
      <div class="g2"></div>
      <div class="g3"></div>
      <div class="g4"></div>
      <div class="g5"></div>
      <div class="interactive"></div>
      <div class="size-64 p-4 text-center">
        <h1 class="text-3xl font-azeret font-bold text-gray-300 pt-4 pr-12">
          I Am
        </h1>
        <h1
          class="text-5xl font-della font-extrabold text-red-500 mt-8 leading-normal"
        >
          Angelo Gabriel
        </h1>
        <div class="flex space-between gap-4 ml-10 mt-2">
          <NuxtLink
            to="https://www.facebook.com/angelo.evangelista.148/"
            class="size-9 bg-black middle rounded-full z-40"
            target="_blank"
            ><img src="/icons/facebook.svg" alt="Facebook"
          /></NuxtLink>
          <NuxtLink
            to="https://www.instagram.com/evang81194/"
            target="_blank"
            class="flex-none size-9 bg-black middle rounded-full z-40"
            ><img src="/icons/instagram.svg" alt="Instagram"
          /></NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/angelo-gabriel-evangelista-a6276222a/"
            target="_blank"
            class="size-9 bg-black middle rounded-full z-40"
            ><img src="/icons/linkedin.svg" alt="LinkedIn"
          /></NuxtLink>
          <NuxtLink
            to="https://github.com/g-gelo"
            target="_blank"
            class="size-9 bg-black middle rounded-full z-40"
            ><img src="/icons/github.svg" alt="Github"
          /></NuxtLink>
        </div>
      </div>

      <div class="size-64 ml-40">
        <img src="/img/Me.png" alt="Gelo" />
      </div>
    </div>
    <!-- What I Do -->
    <div class="h-auto md:h-auto flex flex-col p-4 bg-[#f5eeed]">
      <div
        class="flex flex-col justify-center items-center mt-20 mb-10 sm:mb-24 sm:mt-20"
      >
        <h1
          class="text-2xl md:text-4xl font-extrabold text-center text-[#000000af]"
        >
          "CHASE YOUR PASSION
        </h1>
        <h1
          class="text-2xl md:text-4xl font-extrabold text-center text-[#260b9caf]"
        >
          IN YOUR OWN FASHION"
        </h1>
      </div>
      <div
        class="flex flex-col space-y-10 sm:flex-row sm:space-y-0 sm:space-x-10 mb-10"
      >
        <TheCard
          iconPath="/icons/book.svg"
          title="Reading"
          description="Medium offers diverse articles, from motivation to programming insights, enriching my reading experience."
          link="https://medium.com/tag/node-js-development"
          buttonText="View Link"
        />
        <TheCard
          iconPath="/icons/music.svg"
          title="Music"
          description="I love listening to music. I don't have a specific genre that I prefer; the only music genre that I hate is the music that I don't listen to."
          link="https://medium.com/tag/node-js-development"
          buttonText="View Link"
        />
        <TheCard
          iconPath="/icons/writing.svg"
          title="Writing"
          description="Writing down my thoughts process, especially in the morning, helps me stay on track and achieve my goals."
          link="https://medium.com/tag/node-js-development"
          buttonText="View Link"
        />
      </div>
    </div>
    <!-- About Me -->
    <div class="h-auto flex flex-col p-4 bg-[#260b9caf]">
      <div class="flex justify-center items-center mt-10">
        <img src="/img/picq.png" alt="Gelo" class="size-80" />
      </div>
      <div
        class="flex justify-center items-center mt-10 mb-10 sm:mb-24 sm:mt-20"
      >
        <AboutMe />
      </div>
    </div>
    <!-- Sample Project -->
    <div class="h-screen mt-14 flex flex-col justify-center items-center">
      <div class="font-bold text-4xl font-azeret">
        <h1>SAMPLE</h1>
        <h1 class="text-[#260b9caf]">PROJECT</h1>
      </div>
      <div class="mt-4 flex items-center">
        <img
          src="/icons/wrench.svg"
          alt="Under Construction"
          class="w-8 h-8 mr-2"
        />
        <p class="text-gray-600 text-lg">Under Construction</p>
      </div>
      <p class="text-gray-600">Will put content once the Portfolio is done</p>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});
</script>

<style>
.middle {
  display: flex;
  justify-content: center;
  align-items: center;
}
:root {
  --color-bg1: rgb(108, 0, 162);
  --color-bg2: rgb(0, 17, 82);
  --color1: 18, 113, 255;
  --color2: 221, 74, 255;
  --color3: 100, 220, 255;
  --color4: 200, 50, 50;
  --color5: 180, 180, 50;
  --color-interactive: 140, 100, 255;
  --circle-size: 80%;
  --blending: hard-light;
}
@keyframes moveInCircle {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes moveVertical {
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes moveHorizontal {
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
}

.gradient-bg {
  position: relative;
  overflow: hidden;
  background: linear-gradient(40deg, var(--color-bg1), var(--color-bg2));
  top: 0;
  left: 0;

  svg {
    display: none;
  }

  .gradients-container {
    filter: url(#goo) blur(40px);
    width: 100%;
    height: 100%;
  }

  .g1 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color1), 0.8) 0,
        rgba(var(--color1), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: center center;
    animation: moveVertical 30s ease infinite;

    opacity: 1;
  }
  .g2 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color2), 0.8) 0,
        rgba(var(--color2), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: calc(50% - 400px);
    animation: moveInCircle 20s reverse infinite;

    opacity: 1;
  }

  .g3 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color3), 0.8) 0,
        rgba(var(--color3), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2 + 200px);
    left: calc(50% - var(--circle-size) / 2 - 500px);

    transform-origin: calc(50% + 400px);
    animation: moveInCircle 40s linear infinite;

    opacity: 1;
  }

  .g4 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color4), 0.8) 0,
        rgba(var(--color4), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: calc(50% - 200px);
    animation: moveHorizontal 40s ease infinite;

    opacity: 0.7;
  }

  .g5 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color5), 0.8) 0,
        rgba(var(--color5), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: calc(var(--circle-size) * 2);
    height: calc(var(--circle-size) * 2);
    top: calc(50% - var(--circle-size));
    left: calc(50% - var(--circle-size));

    transform-origin: calc(50% - 800px) calc(50% + 200px);
    animation: moveInCircle 20s ease infinite;

    opacity: 1;
  }

  .interactive {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color-interactive), 0.8) 0,
        rgba(var(--color-interactive), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;

    opacity: 0.8;
  }
}
</style>
