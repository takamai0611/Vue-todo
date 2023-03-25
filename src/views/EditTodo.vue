<template>
  <h2>TODOを編集する</h2>
  <div v-if="error">
    ID：{{ $route.params.id }}のTODOが見つかりませんでした。
  </div>
  <form v-else @submit.prevent="onSubmit">
    <div>
      <label for="title">タイトル</label>
      <input type="text" id="title" v-model="data.title" />
    </div>
    <button @click="onSubmit">更新する</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Params } from '@/store/todo/types'
import { todoKey } from '@/store/todo'

export default defineComponent({
  setup () {
    const todoStore = inject(todoKey)
    if (!todoStore) {
      throw new Error('todoStore is not provided')
    }

    const router = useRouter()
    const route = useRoute()

    const id = Number(route.params.id)
    try {
      const todo = todoStore.getTodo(id)

      const data = reactive<Params>({

        title: todo.title
      })

      const onSubmit = () => {
        const { title } = data
        todoStore.updateTodo(id, {

          ...todo,
          title
        })
        router.push('/')
      }

      return {
        error: false,
        data,
        onSubmit
      }
    } catch (e) {
      console.error(e)
      return {
        error: true
      }
    }
  }
})
</script>
