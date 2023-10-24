import './App.css'
import { counterStore } from './store/counter'

function App() {
  const value = counterStore.use((state) => state.value)

  return (
    <>
      <h1>value : {value}</h1>

      <button onClick={counterStore.increment}>increment</button>
    </>
  )
}

export default App
