import { InjectionKey, reactive, readonly } from 'vue'
import { Todo, TodoState, TodoStore, Params } from '@/store/todo/types'

// ①
const mockTodo: Todo[] = []

// ②
const state = reactive<TodoState>({
  todos: mockTodo
})

// ③
const intitializeTodo = (todo: Params) => {
  const date = new Date()
  return {
    id: date.getTime(),
    title: todo.title,
    createdAt: date,
    updatedAt: date
  } as Todo
}

// ④
const getTodo = (id: number) => {
  const todo = state.todos.find((todo) => todo.id === id)
  if (!todo) {
    throw new Error(`cannot find todo by id:${id}`)
  }
  return todo
}

// ⑤
const addTodo = (todo: Params) => {
  state.todos.push(intitializeTodo(todo))
}

// ⑥
const updateTodo = (id: number, todo: Todo) => {
  const index = state.todos.findIndex((todo) => todo.id === id)
  if (index === -1) {
    throw new Error(`cannot find todo by id:${id}`)
  }
  state.todos[index] = todo
}

// ⑦
const deleteTodo = (id: number) => {
  state.todos = state.todos.filter((todo) => todo.id !== id)
}

const todoStore: TodoStore = {
  state: readonly(state),
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo
}

export default todoStore

// ⑧
export const todoKey: InjectionKey<TodoStore> = Symbol('todo')
