import { useState } from "react"
import ListItem from "./Components/ListItem";
function App() {
    const [listItems, setListItems] = useState([
      {
        id: "1",
        name: "Arroz",
        quantity: "1",
        unit: "kg",
        checked: false,
      },
      {
        id: "2",
        name: "Frijol",
        quantity: "1",
        unit: "kg",
        checked: false,
      },
      {
        id: "3",
        name: "Leche",
        quantity: "1",
        unit: "lts",
        checked: false,
      },
      {
        id: "4",
        name: "Papel higienico",
        quantity: "1",
        unit: "pz",
        checked: false,
      },
    ])
    const handleItemChecked = (e) => {
      const newList = listItems.map(item => {
        if (e.target.name === item.id) {
          item.checked = !item.checked;
        }
        return item;
      })
      setListItems(newList);
    }
  return (
  <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1>Shopping List</h1>
        </div>
        <div className="col text-end">
          <button type="button" className="btn btn-outline-primary">
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
      <hr />
        {
          listItems.map((item) => (
            <ListItem
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            unit={item.unit}
            checked={item.checked}
            handleItemChecked={handleItemChecked}
            />
            ))
          }
      <hr />
    </div>
  )
}
export default App