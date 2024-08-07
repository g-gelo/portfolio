<template>
  <div>
    <div
      id="hero"
      class="flex flex-col md:flex-row h-screen gradient-bg gradients-container"
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

      <div class="flex-1 flex flex-col justify-center p-6 text-left m-14">
        <h1 class="text-4xl font-gideon font-bold text-gray-300 sm:text-8xl">
          I Am
        </h1>
        <h1
          class="text-6xl font-gideon font-extrabold text-white mt-6 tracking-wide"
        >
          Angelo Gabriel
        </h1>
        <div class="flex flex-wrap gap-4 mt-6">
          <NuxtLink
            to="https://www.facebook.com/angelo.evangelista.148/"
            class="size-9 bg-black middle rounded-full z-40 hover:animate-spin"
            target="_blank"
            ><img src="/icons/facebook.svg" alt="Facebook"
          /></NuxtLink>
          <NuxtLink
            to="https://www.instagram.com/evang81194/"
            target="_blank"
            class="flex-none size-9 bg-black middle rounded-full z-40 hover:animate-spin"
            ><img src="/icons/instagram.svg" alt="Instagram"
          /></NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/angelo-gabriel-evangelista-a6276222a/"
            target="_blank"
            class="size-9 bg-black middle rounded-full z-40 hover:animate-spin"
            ><img src="/icons/linkedin.svg" alt="LinkedIn"
          /></NuxtLink>
          <NuxtLink
            to="https://github.com/g-gelo"
            target="_blank"
            class="size-9 bg-black middle rounded-full z-40 hover:animate-spin"
            ><img src="/icons/github.svg" alt="Github"
          /></NuxtLink>
        </div>
        <div class="mt-6 z-40">
          <a
            href="/projects/portfolio/Resume.pdf"
            target="_blank"
            class="btn bg-[#260b9caf] hover:bg-[#1e086b] text-white font-bold py-2 px-4 rounded"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div
        class="relative flex-1 flex items-end justify-end p-4 mb-20 sm:mb-0 md:items-center md:justify-center md:ml-40 md:mt-0"
      >
        <img
          src="/img/Me-2.png"
          alt="Gelo"
          class="size-9/12 object-contain md:w-auto md:h-full lg:size-7/12 lg:mt-20"
        />
      </div>
    </div>
    <!-- What I Do -->
    <div id="about-me" class="h-auto md:h-auto flex flex-col p-4 bg-[#f5eeed]">
      <div
        class="flex flex-col justify-center items-center mt-20 mb-10 sm:mb-24 sm:mt-20"
      >
        <h1
          class="text-2xl md:text-4xl font-extrabold text-center text-[#000000af] left"
        >
          "CHASE YOUR PASSION
        </h1>
        <h1
          class="text-2xl md:text-4xl font-extrabold text-center text-[#260b9caf] right"
        >
          IN YOUR OWN FASHION"
        </h1>
      </div>
      <div class="flex flex-col space-y-10 sm:flex-row sm:space-y-0 mb-10 top">
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
    <div
      class="flex justify-center items-center md:mb-0 md:mt-0 bg-[#260b9caf]"
    >
      <AboutMe />
    </div>
    <!-- Sample Project -->
    <div
      id="projects"
      class="h-auto bg-[#f5eeed] flex justify-center flex-col items-center"
    >
      <div class="font-bold text-4xl flex flex-col items-center mb-8 mt-10">
        <h1 class="text-center text-[#000000af] left">SAMPLE</h1>
        <h1 class="text-[#260b9caf] right">PROJECT</h1>
      </div>
      <div class="mb-10">
        <ProjectSample />
      </div>
    </div>

    <!-- Skills Overview -->
    <div id="skills" class="bg-[#260b9caf]">
      <SkillUsed />
    </div>

    <!-- Testimonial -->
    <div
      id="testimonials"
      class="max-w-5xl mx-auto my-12 p-6 bg-gray-100 rounded-lg shadow-lg"
    >
      <h2 class="text-4xl font-bold text-center text-[#260b9caf] mb-6 left">
        TESTIMONIALS
      </h2>
      <p class="text-center text-gray-600 mb-8">
        See what others have to say about my work!
      </p>
      <div>
        <TheTestimonial />
      </div>
    </div>
  </div>
</template>

<script setup>
import "animate.css";
import "intersection-observer";

useHead({
  title: "Angelo's Portfolio",
});

onMounted(() => {
  if (process.client) {
    const sliders = document.querySelectorAll(".left");

    const appearOptions = {
      threshold: 0, // Adjust the threshold value as needed
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__fadeInLeft"
            );
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions
    );

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  }
});

onMounted(() => {
  if (process.client) {
    const sliders = document.querySelectorAll(".right");

    const appearOptions = {
      threshold: 0, // Adjust the threshold value as needed
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__fadeInRight"
            );
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions
    );

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  }
});

onMounted(() => {
  if (process.client) {
    const sliders = document.querySelectorAll(".top");

    const appearOptions = {
      threshold: 0, // Adjust the threshold value as needed
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__fadeInUp"
            );
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions
    );

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  }
});

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
