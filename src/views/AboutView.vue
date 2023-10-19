<template>
  <div> about</div>
</template>

<script setup lang="ts">
  const instance = getCurrentInstance()

  onMounted(() => {
    // eslint-disable-next-line no-console
    console.log('instance :>> ', instance)
  })
</script>

<style scoped></style>
