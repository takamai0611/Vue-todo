<template>
  <h2>編集機能</h2>
  <p>タイトルをクリックして、内容を編集することができます。</p>

  <div v-if="error">
    {{ error.message }}
  </div>
  <Suspense v-else>
    <template #default>
      <AsyncTodos />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
  <router-link to="/new">新規作成</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsyncTodos from '@/components/AsyncTodos.vue'

export default defineComponent({
  components: {
    AsyncTodos
  }
})
</script>
