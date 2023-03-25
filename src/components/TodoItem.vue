<template>
  <div class="card">
    <div>
      <span class="title" @click="clickTitle">{{ todo.title }}</span>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Todo } from '@/store/todo/types'
import { defineComponent, PropType } from 'vue'

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

    return {
      clickTitle
    }
  }
})
</script>
