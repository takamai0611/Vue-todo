import { DeepReadonly } from 'vue'
export interface Todo {
  id: number
  title: string
}

export interface TodoState {
  todos: Todo[]
}

export type Params = Pick<Todo, 'title' |>

export interface TodoStore {
  state: DeepReadonly<TodoState>
  getTodo: (id: number) => void
  addTodo: (todo: Params) => void
  updateTodo: (id: number, todo: Todo) => void
  deleteTodo: (id: number) => void
}
