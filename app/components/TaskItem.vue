<template>
  <section>
    <div class="bg-white flex flex-col gap-2.5 py-2.5 px-4 rounded-xl sm:w-xs">
      <div class="flex items-center justify-between">
        <!-- avatar & name -->
        <div class="flex items-center gap-1">
          <UAvatar
            :src="task.avatar"
            :alt="`${task.fullName} img`"
            size="xl"
            class=""
          />
          <span class="text-xs text-gray-500">{{ task.fullName }}</span>
        </div>

        <!-- flag & star -->
        <div class="flex items-center gap-3">
          <div
            :class="`flex items-center gap-1 text-sm rounded-xl py-1 px-1.5 ${
              task.flag >= 4 ? 'text-red-600 bg-red-200' : ''
            } ${task.flag <= 3 ? 'text-yellow-600 bg-yellow-100' : ''}`"
          >
            <UIcon name="bxs:flag-alt" />
            <span>{{ task.flag }}</span>
          </div>
          <div
            :class="`flex items-center gap-1 rounded-xl py-1 px-1.5 text-sm ${
              task.star >= 4 ? 'text-green-700 bg-lime-200' : ''
            } ${task.star <= 3 ? 'text-green-600 bg-lime-200' : ''}`"
          >
            <UIcon name="bxs:star" />
            <span>{{ task.star }}</span>
          </div>
        </div>
      </div>

      <p class="text-md font-bold text-pretty">
        {{ task.taskTitle }}
      </p>

      <p class="text-xs flex justify-between">
        <span class="flex items-center gap-1 text-pretty">
          <UIcon name="mdi-light:account" />{{ task.description }}
        </span>
        <span class="flex items-center gap-1">
          <UIcon name="mdi-light:map-marker" />{{ task.location }}
        </span>
      </p>

      <p class="text-xs flex justify-between">
        <span class="flex items-center gap-1 text-pretty">
          <UIcon name="mdi-light:calendar" />{{ task.calendar }}
        </span>
        <span class="flex items-center gap-1">
          <UIcon name="mdi-light:clock" />{{ task.days }} days
        </span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { type mockDataType } from "../data/mockdata";

const { task } = defineProps<{
  task: mockDataType;
}>();
</script>

<style scoped lang="css"></style>
