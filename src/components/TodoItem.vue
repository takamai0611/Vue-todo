<template>
  <div class="card">
    <div>
      <span class="title" @click="clickTitle">{{ todo.title }}</span>
    </div>
    <hr />
    <div class="action">
      <button @click="clickDelete">削除</button>
    </div>
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
  emits: ['clickDelete', 'clickTitle'],
  setup (props, { emit }) {
    const clickDelete = () => {
      emit('clickDelete', props.todo.id)
    }

    const clickTitle = () => {
      emit('clickTitle', props.todo.id)
    }

    const formatDate = computed(() => {
      return `${props.todo.createdAt.getFullYear()}/${
        props.todo.createdAt.getMonth() + 1
      }/${props.todo.createdAt.getDate()}`
    })

    return {
      clickDelete,
      clickTitle,
      formatDate
    }
  }
})
</script>
