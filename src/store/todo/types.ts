import { DeepReadonly } from 'vue'

export type Status = 'waiting' | 'working' | 'completed' | 'pending'

export interface Todo {
  id: number
  title: string
  description: string
  status: Status
  createdAt: Date
  updatedAt: Date
}

export interface TodoState {
  todos: Todo[]
}

export type Params = Pick<Todo, 'title' | 'description' | 'status'>

export interface TodoStore {
  state: DeepReadonly<TodoState>
  fetchTodos: () => any
  fetchTodo: (id: number) => any
  getTodo: (id: number) => any
  addTodo: (todo: Params) => any
  updateTodo: (id: number, todo: Todo) => any
  deleteTodo: (id: number) => any
}
