import { create } from 'zustand'

class Store {
  private readonly store
  public use
  private readonly setState

  private get state() {
    return this.store.getState()
  }

  constructor() {
    this.store = create(() => ({ value: 0 }))
    this.use = this.store
    this.setState = this.store.setState
  }

  increment() {
    this.setState((state) => ({ value: state.value + 1 })) // this throw an error saying store is undefined
  }

  decrement() {
    this.setState((state) => ({ value: state.value - 1 })) // this throw an error saying store is undefined
  }
}

export const counterStore = new Store()
