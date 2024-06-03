<template>
  <div class="middle flex-col bg-white rounded-lg p-6 px-4 space-y-3 mx-10">
    <div><img :src="iconPath" alt="Icon" class="size-20" /></div>
    <div>
      <h1 class="text-2xl font-bold text-gray-800">{{ title }}</h1>
    </div>
    <div>
      <p class="text-center">{{ description }}</p>
    </div>
    <div>
      <NuxtLink
        :to="link"
        class="btn btn-active bg-[#260b9caf] text-white"
        target="_blank"
      >
        {{ buttonText }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  iconPath: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  buttonText: {
    type: String,
  },
});
</script>
<style scoped>
.middle {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
