<template>
    <h2>TODOを作成する</h2>
    <form @submit.prevent="onSubmit"> // ①
      <div>
        <label for="title">タイトル</label>
        <input type="text" id="title" v-model="data.title" /> // ②
      </div>
      <div>
        <label for="description">説明</label>
        <textarea id="description" v-model="data.description" /> // ②
      </div>
      <div>
        <label for="status">ステータス</label>
        <select id="status" v-model="data.status"> // ②
          <option value="waiting">waiting</option>
          <option value="working">working</option>
          <option value="completed">completed</option>
          <option value="pending">pending</option>
        </select>
      </div>
      <button @click="onSubmit">作成する</button> // ①
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
      title: '',
      description: '',
      status: 'waiting'
    })

    const onSubmit = () => { // ⑥
      const { title, description, status } = data
      todoStore.addTodo({
        title,
        description,
        status
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
