<template>
  <div class="flex border-2 border-black h-screen">
    <!-- First Div -->
    <div class="border-2 h-screen grow-[0.5] border-rose-500 middle">1</div>
    <!-- Middle Div -->
    <div class="border-2 h-screen grow-[2] border-indigo-500">
      <div class="border-2 border-green-500 m-4 h-48">
        <div class="flex justify-center">
          <div class="m-2 grow h-20 border-2 border-black-500 middle">1</div>
          <div class="m-2 grow h-20 border-2 border-gray-500 middle">2</div>
          <div class="m-2 grow h-20 border-2 border-orange-500 middle">3</div>
        </div>
        <div class="flex">
          <div class="mx-2 grow h-20 border-2 border-orange-500 middle">4</div>
        </div>
      </div>
    </div>
    <!-- Last Div -->
    <div class="border-2 h-screen grow-[0.5] border-blue-500 middle">3</div>
  </div>
</template>

<style>
/* .parent {
  height: 300px;
  width: 300px;
} */
.middle {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
