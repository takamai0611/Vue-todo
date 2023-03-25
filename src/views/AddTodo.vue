<template>
    <h2>TODOを作成する</h2>
    <form @submit.prevent="onSubmit"> // ①
      <div>
        <label for="title">タイトル</label>
        <input type="text" id="title" v-model="data.title" /> // ②
      </div>
    </form>
  </template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Params } from '@/store/todo/types'
import { todoKey } from '@/store/todo'

export default defineComponent({
  setup () {
    const todoStore = inject(todoKey) // ③
    if (!todoStore) {
      throw new Error('todoStore is not provided')
    }

    const router = useRouter() // ④

    const data = reactive<Params>({ // ⑤
      title: ''
    })

    const onSubmit = () => { // ⑥
      const { title } = data
      todoStore.addTodo({
        title
      })
      router.push('/')
    }

    return {
      data,
      onSubmit
    }
  }
})
</script>
