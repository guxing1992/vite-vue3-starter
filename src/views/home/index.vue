<template>
  <div>
    <div class="name-cls">{{ name }}</div>
    <HelloWorld msg="hello222" />
    <el-button>testButton</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '../../api/user'

export default defineComponent({
  components: {
    HelloWorld
  },
  setup() {
    onMounted(() => {
      getUserInfo({}).then((resp) => {
        console.log(resp)
      })
    })
    const state = reactive({
      name: 'home'
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less" scoped>
.name-cls {
  color: red;
}
</style>
