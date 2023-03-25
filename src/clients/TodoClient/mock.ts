import { Todo, Params } from '@/store/todo/types'
import { TodoClientInterface } from './types'

const mockTodo: Todo[] = [
  {
    id: 1,
    title: 'todo1'
  },
  {
    id: 2,
    title: 'todo2'
  },
  {
    id: 3,
    title: 'todo3'
  }
]

export class MockTodoClient implements TodoClientInterface {
  async getAll () {
    return Promise.resolve(mockTodo)
  }

  get (id: number) {
    const todo = mockTodo.find((todo) => todo.id === id)
    if (todo === undefined) {
      return Promise.reject(new Error(`id: ${id} is not found`))
    }

    return Promise.resolve(todo)
  }

  create (params: Params) {
    const todo = this.intitializeTodo(params)
    return Promise.resolve(todo)
  }

  update (id: number, todo: Todo) {
    todo.updatedAt = new Date()
    return Promise.resolve(todo)
  }

  intitializeTodo (todo: Params) {
    const date = new Date()
    return {
      id: date.getTime(),
      title: todo.title,
      updatedAt: date
    } as Todo
  }
}
