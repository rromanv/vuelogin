<template>
  <h1 class="text-6xl font-thin tracking-tighter text-center mt-8">
    Cool Chat
  </h1>
  <div
    class="
      min-h-[500px]
      w-full
      mt-8
      rounded-lg
      shadow-2xl
      flex flex-col
      justify-between
    "
  >
    <ul class="p-4 space-y-4">
      <li v-for="n in 1">
        <div class="bg-gray-200 px-4 py-2 rounded-lg flex justify-between">
          <span>Message</span><span>by Rodolfo</span>
        </div>
      </li>
    </ul>
    <div>
      <input
        type="text"
        class="
          w-full
          p-4
          rounded-lg
          shadow-2xl
          focus:outline-none focus:bg-yellow-100
        "
        placeholder="Type a message..."
      />
    </div>
  </div>
</template>
