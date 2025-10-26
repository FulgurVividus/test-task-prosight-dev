<template>
  <section class="py-1">
    <UContainer>
      <nav>
        <ul class="flex items-center justify-center">
          <li class="w-1/2 text-center">
            <NuxtLink to="/tasks" active-class="is-active" class="nav-link"
              >Tasks</NuxtLink
            >
          </li>
          <li class="w-1/2 text-center">
            <NuxtLink to="/requests" active-class="is-active" class="nav-link"
              >Requests</NuxtLink
            >
          </li>
        </ul>
      </nav>

      <div class="bg-gray-200 h-px mt-2"></div>
    </UContainer>
  </section>
</template>

<style scoped lang="css">
.nav-link {
  display: block;
  width: 100%;
  position: relative;
}

.is-active {
  color: limegreen;
}

.is-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -9px;
  width: 100%;
  height: 1px;
  background-color: limegreen;
}
</style>
