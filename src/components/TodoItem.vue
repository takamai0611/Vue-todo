<template>
  <div class="card">
    <div>
      <span class="title" @click="clickTitle">{{ todo.title }}</span>
      <span class="status" :class="todo.status">{{ todo.status }}</span>
    </div>
    <div class="body">説明：{{ todo.description }}</div>
    <div class="body">作成日：{{ formatDate }}</div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Todo } from '@/store/todo/types'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {

    todo: {
      type: Object as PropType<Todo>,
      required: true
    }
  },
  emits: ['clickTitle'],
  setup (props, { emit }) {
    const clickTitle = () => {
      emit('clickTitle', props.todo.id)
    }

    const formatDate = computed(() => {
      return `${props.todo.createdAt.getFullYear()}/${
        props.todo.createdAt.getMonth() + 1
      }/${props.todo.createdAt.getDate()}`
    })

    return {
      clickTitle,
      formatDate
    }
  }
})
</script>
