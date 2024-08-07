<template>
  <div class="h-auto md:flex md:my-10 md:gap-4 lg:gap-10 md:m-8">
    <div class="flex justify-center items-center flex-1 my-10 left">
      <img src="/img/picq.png" alt="Gelo" class="w-80 md:w-96 lg:w-96" />
    </div>
    <div class="flex-1">
      <div
        class="card rounded-lg w-fit md:w-full bg-white text-primary-content mb-10 mx-5 sm:mb-10 right"
      >
        <div class="card-body">
          <h2
            class="card-title font-bold text-4xl justify-center text-[#4e2edfaf]"
          >
            &lt; ABOUT ME /&gt;
          </h2>
          <p
            class="text-md text-gray-600 pb-2 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl md:text-xl border-b-2"
          >
            Hello! I'm <strong>Angelo Gabriel D. Evangelista</strong>, a
            <strong>fresh graduate front-end developer</strong> based in the
            Philippines. I love creating beautiful and functional designs
            through coding. It's fun for me to make things look good and work
            well on websites. I enjoy learning new things and making cool web
            applications for everyone to use.
          </p>
          <h2 class="text-2xl font-medium text-[#4e2edfaf]">
            &lt; Contact Information /&gt
          </h2>
          <div
            class="text-md pb-4 text-gray-600 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl md:text-xl border-b-2 items-center"
          >
            <div class="flex">
              <img
                src="/icons/location.svg"
                alt="Location Icon"
                class="w-5 mr-2"
              />
              <span class="mr-4">Dasmariñas City, Cavite</span>
            </div>
            <div class="flex">
              <img src="/icons/phone.svg" alt="Phone Icon" class="w-5 mr-2" />
              <span>0970-164-0723</span>
            </div>
          </div>
          <p
            class="text-md pb-3 text-center text-gray-600 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl md:text-xl border-b-2 items-center"
          >
            I'm a recent graduate open to part-time roles and new opportunities.
            Whether you have questions or just want to say hi, feel free to
            reach out—I'm here and ready to connect!
          </p>

          <div class="card-actions justify-center">
            <a
              href="#"
              onclick="Calendly.initPopupWidget({url: 'https://calendly.com/evangelistaangelo38'});return false;"
              class="btn bg-[#4e2edfaf] text-white font-bold"
            >
              Schedule meeting with me
            </a>
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
  const link = document.createElement("link");
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
});
</script>

<style scoped>
/* No custom styles needed, TailwindCSS handles layout */
</style>
