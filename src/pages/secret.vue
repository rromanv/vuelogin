<script setup>
  import { onUnmounted, ref } from 'vue'
  import useChat from '../composable/useChat'

  const { messages, unsubscribe } = useChat()

  const newMessage = ref('')

  onUnmounted(() => {
    unsubscribe()
  })
</script>

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
      <li v-for="message in messages" :key="message.id">
        <div class="flex justify-between bg-gray-200 px-4 py-2 rounded-lg">
          <span>{{ message.text }}</span
          ><span>by {{ message.author }}</span>
        </div>
      </li>
    </ul>
    <div>
      <input
        class="w-full p-4 rounded-lg focus:outline-none focus:bg-yellow-200"
        type="text"
        placeholder="Type a message..."
        v-model="newMessage"
      />
    </div>
  </div>
</template>
