<script setup lang="ts">
defineProps<{
  error: Error
}>()
</script>

<template>
  <div class="error">
    <p>{{ error.message }}</p>
  </div>
</template>