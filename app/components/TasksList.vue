<template>
  <section
    class="mt-5 p-5 bg-gray-100 min-h-screen"
    style="min-height: calc(100dvh - 115px)"
  >
    <div class="max-w-[1176px] w-full mx-auto">
      <div class="flex items-start justify-between">
        <h1 class="mb-5 font-bold text-xl">Recent tasks</h1>
        <button
          type="button"
          aria-label="Sort"
          title="Sort"
          @click="$emit('toggleSort')"
          data-testid="sort-toggle"
          class="cursor-pointer hover:bg-gray-300 transition-all duration-200 h-5 w-5 rounded-full"
        >
          <UIcon name="bxs:sort-alt" class="size-4" />
        </button>
      </div>

      <ul
        class="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4"
      >
        <li
          v-for="task in filteredTasks"
          :key="task.id"
          :data-task="task"
          class="sm:w-xs"
        >
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { type mockDataType } from "../data/mockdata";

const { filteredTasks } = defineProps<{
  filteredTasks: mockDataType[];
}>();
</script>
