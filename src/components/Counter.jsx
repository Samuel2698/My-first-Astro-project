import { useState } from 'preact/hooks'

export function Counter() {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <span class="text-yellow-300 text-xl mr-4">{counter}</span>
      <button class="border px-4 py-2 text-xl" onClick={handleIncrement}>
        +
      </button>
      <button class="border px-4 py-2 text-xl" onClick={handleDecrement}>
        -
      </button>
    </>
  )
}
