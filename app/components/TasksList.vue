<template>
  <section
    class="mt-5 p-5 bg-gray-100 min-h-screen"
    style="min-height: calc(100dvh - 95px)"
  >
    <div class="flex items-start justify-between">
      <h1 class="mb-5 font-bold text-xl">Recent tasks</h1>
      <button
        type="button"
        aria-label="Sort"
        title="Sort"
        @click="$emit('toggleSort')"
        class="cursor-pointer hover:bg-gray-300 transition-all duration-200 h-5 w-5 rounded-full"
      >
        <UIcon name="bxs:sort-alt" class="size-4" />
      </button>
    </div>

    <ul class="flex flex-col space-y-3 md:flex-row justify-between flex-wrap">
      <li v-for="task in filteredTasks" :key="task.id">
        <TaskItem :task="task" />
      </li>
    </ul>

    <p
      v-if="!filteredTasks.length"
      class="font-semibold flex items-center justify-center gap-1"
    >
      <span>Not Found</span>
      <UIcon name="mdi-light:alert-octagon" class="size-5" />
    </p>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { type mockDataType } from "../data/mockdata";

const { filteredTasks } = defineProps<{
  filteredTasks: mockDataType[];
}>();
</script>
