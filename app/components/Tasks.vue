<template>
  <section class="p-5">
    <UContainer>
      <!-- search -->
      <div class="md:px-5">
        <form role="search">
          <keep-alive>
            <search>
              <UInput
                icon="mdi-light:magnify"
                placeholder="Search tasks..."
                type="search"
                color="neutral"
                v-model="searchValue"
                autofocus
              />
            </search>
          </keep-alive>
        </form>
      </div>

      <!-- tasks list -->
      <TasksList
        :filteredTasks="filteredTasks"
        :isAlphabetical="isAlphabetical"
        @toggle-sort="handleToggleSort"
      />
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, type Ref, type ComputedRef } from "vue";
import { mockData, type mockDataType } from "../data/mockdata";

const searchValue: Ref<string, string> = ref("");
let isAlphabetical: Ref<boolean, boolean> = ref(true);

function handleToggleSort(): void {
  isAlphabetical.value = !isAlphabetical.value;
}

const filteredTasks: ComputedRef<mockDataType[]> = computed(function () {
  let copiedMockData: mockDataType[] = [...mockData];

  if (searchValue.value.length > 0) {
    copiedMockData = copiedMockData.filter((task: mockDataType) => {
      return task.taskTitle.toLocaleLowerCase().includes(searchValue.value);
    });
  }
  if (isAlphabetical.value) {
    copiedMockData = copiedMockData.sort((a: mockDataType, b: mockDataType) => {
      return a.taskTitle.toLowerCase().localeCompare(b.taskTitle.toLowerCase());
    });
  }

  return copiedMockData;
});
</script>
