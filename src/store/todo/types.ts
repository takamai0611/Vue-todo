import { DeepReadonly } from 'vue'

export type Status = 'waiting' | 'working' | 'completed' | 'pending'

export interface Todo {
  id: number
  title: string
  updatedAt: Date
}

export interface TodoState {
  todos: Todo[]
}

export type Params = Pick<Todo, 'title' |>

export interface TodoStore {
  state: DeepReadonly<TodoState>
  fetchTodos: () => any
  fetchTodo: (id: number) => any
  getTodo: (id: number) => any
  addTodo: (todo: Params) => any
  updateTodo: (id: number, todo: Todo) => any
}
