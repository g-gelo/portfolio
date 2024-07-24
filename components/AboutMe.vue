<template>
  <div class="h-auto md:flex md:my-10 md:gap-4 lg:gap-10 md:m-8">
    <div class="flex justify-center items-center flex-1 my-10">
      <img src="/img/picq.png" alt="Gelo" class="w-80 md:w-96 lg:w-96" />
    </div>
    <div class="flex-1">
      <div
        class="card rounded-lg w-fit md:w-full bg-white text-primary-content mb-10 mx-5 sm:mb-10"
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

          <div class="card-actions justify-end">
            <a
              class="btn bg-[#4e2edfaf] text-white font-azeret"
              href="mailto:evangelistaangelo38@gmail.com"
            >
              Say Hi
              <img src="/icons/send.svg" alt="Send Icon" class="w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script logic needed
</script>

<style scoped>
/* No custom styles needed, TailwindCSS handles layout */
</style>
