import React, { useState, useMemo } from "react"
import "./App.css"
import DemoList from "./components/Demo/DemoList"
import Button from "./components/UI/Button/Button"

function App() {
  const [listTitle, setListTitle] = useState("Ascending Order")
  const [listOrder, setListOrder] = useState("ascending")
  const [buttonText, setButtonText] = useState("Change to Descending Order")

  const changeOrderHandler = () => {
    setListTitle((prev) =>
      prev === "Ascending Order" ? "Descending Order" : "Ascending Order"
    )
    setListOrder((prev) => (prev === "ascending" ? "descending" : "ascending"))
    setButtonText((prev) =>
      prev === "Change to Descending Order"
        ? "Change to Ascending Order"
        : "Change to Descending Order"
    )
  }

  const listItems = useMemo(() => [5, 3, 1, 10, 9], [])

  return (
    <div className="app">
      <DemoList title={listTitle} listOrder={listOrder} items={listItems} />
      <Button onClick={changeOrderHandler}>{buttonText}</Button>
    </div>
  )
}

export default App
