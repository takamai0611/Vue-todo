<template>
  <h2>TODO一覧</h2>
  <p>作成したTODOのタイトルをクリックして、内容を編集することができます。</p>
  <Suspense>
    <AsyncTodos />
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
