import { Todo, Params } from '@/store/todo/types'
import { TodoClientInterface } from './types'

export class TodoClient implements TodoClientInterface {
  async getAll () {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return Promise.resolve(
      Object.keys(localStorage)
        .filter((key) => !isNaN(Number(key)))
        .map((key) => {
          const todo = JSON.parse(localStorage.getItem(key) as string) as Todo
          return todo
        })
    )
  }

  get (id: number) {
    const item = localStorage.getItem(String(id))
    if (item === null) {
      return Promise.reject(new Error(`id: ${id} is not found`))
    }

    return Promise.resolve(JSON.parse(item) as Todo)
  }

  create (params: Params) {
    const todo = this.intitializeTodo(params)
    localStorage.setItem(String(todo.id), JSON.stringify(todo))
    return Promise.resolve(todo)
  }

  update (id: number, todo: Todo) {
    localStorage.removeItem(String(id))
    localStorage.setItem(String(id), JSON.stringify(todo))
    return Promise.resolve(todo)
  }

  intitializeTodo (todo: Params) {
    const date = new Date()
    return {
      id: date.getTime(),
      title: todo.title
    } as Todo
  }
}
