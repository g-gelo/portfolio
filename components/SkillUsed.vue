<template>
  <div class="h-auto">
    <div class="text-4xl text-white font-bold middle">
      <div class="mt-16 flex gap-2 mb-6">
        <h1 class="left">TECH</h1>
        <h1 class="right">STACK</h1>
      </div>
    </div>
    <div class="middle flex-col">
      <h1 class="font-bold text-3xl text-white top">EXPERTISE</h1>
      <div class="flex p-6 space-x-6 top">
        <NuxtLink to="https://www.w3schools.com/html/" target="_blank">
          <img
            src="/skills/html.svg"
            class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
            alt="HTML"
          />
          <span class="block text-center text-white">HTML</span>
        </NuxtLink>

        <NuxtLink to="https://tailwindcss.com" target="_blank">
          <img
            src="/skills/tailwind.svg"
            class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
            alt="Tailwind"
          />
          <span class="block text-center text-white">Tailwind</span>
        </NuxtLink>

        <NuxtLink to="https://vuejs.org" target="_blank">
          <img
            src="/skills/vue.svg"
            class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
            alt="Vue 3"
          />
          <span class="block text-center text-white">Vue 3</span>
        </NuxtLink>

        <NuxtLink to="https://nuxt.com" target="_blank">
          <img
            src="/skills/nuxt.svg"
            class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
            alt="Nuxt 3"
          />
          <span class="block text-center text-white">Nuxt 3</span>
        </NuxtLink>
      </div>

      <div class="middle flex-col">
        <h1 class="font-bold text-3xl text-white m-4 top">OTHERS</h1>
        <div class="flex flex-wrap gap-4 middle m-4 mb-10 top">
          <div>
            <NuxtLink
              to="https://reactjs.org/docs/getting-started.html"
              target="_blank"
            >
              <img
                src="/skills/react.svg"
                class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
                alt="React"
              />
              <span class="block text-center text-white">React</span>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="https://nextjs.org/docs" target="_blank">
              <img
                src="/skills/next.svg"
                class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
                alt="Next.js"
              />
              <span class="block text-center text-white">NextJs</span>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink
              to="https://quasar.dev/introduction-to-quasar"
              target="_blank"
            >
              <img
                src="/skills/quasar.svg"
                class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
                alt="Quasar"
              />
              <span class="block text-center text-white">Quasar</span>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="https://laravel.com/docs" target="_blank">
              <img
                src="/skills/laravel.svg"
                class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
                alt="Laravel"
              />
              <span class="block text-center text-white">Laravel</span>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="https://www.w3schools.com/js/" target="_blank">
              <img
                src="/skills/js.svg"
                class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
                alt="JavaScript"
              />
              <span class="block text-center text-white">JavaScript</span>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="https://dev.mysql.com/doc/" target="_blank">
              <img
                src="/skills/mysql.svg"
                class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
                alt="MySQL"
              />
              <span class="block text-center text-white">MySQL</span>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="https://www.w3schools.com/css/" target="_blank">
              <img
                src="/skills/css.svg"
                class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
                alt="CSS"
              />
              <span class="block text-center text-white">CSS</span>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink
              to="https://vuetifyjs.com/en/getting-started/installation/"
              target="_blank"
            >
              <img
                src="/skills/vuetify.svg"
                class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
                alt="Vuetify"
              />
              <span class="block text-center text-white">Vuetify 3</span>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="https://getbootstrap.com/docs/" target="_blank">
              <img
                src="/skills/bootstrap.svg"
                class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45 bg-white rounded-lg"
                alt="Bootstrap"
              />
              <span class="block text-center text-white">Bootstrap</span>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="https://docs.github.com/en" target="_blank">
              <img
                src="/skills/github.svg"
                class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
                alt="GitHub"
              />
              <span class="block text-center text-white">GitHub</span>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="https://git-scm.com/doc" target="_blank">
              <img
                src="/skills/git.svg"
                class="w-20 h-20 transition transform hover:-translate-y-2 hover:rotate-45"
                alt="Git"
              />
              <span class="block text-center text-white">Git</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "animate.css";
import "intersection-observer";

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
</script>

<style scoped>
.middle {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
