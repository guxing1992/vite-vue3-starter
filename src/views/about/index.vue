<template>
  <div>
    {{ name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'about'
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style></style>
