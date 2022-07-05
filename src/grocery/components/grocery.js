import { useEffect, useState } from "react"
import GroceryItem from "./groceryItem"

const getLocalStorage = () => {
  let groceryList = localStorage.getItem('groceryList')
  if (groceryList) {
    return (groceryList = JSON.parse(groceryList))
  } else {
    return []
  }
}

const Grocery = () => {
  const [groceryItemName, setGroceryItemName] = useState('')
  const [groceryList, setGroceryList] = useState(getLocalStorage())
  const [isEdit, setIsEdit] = useState(false)
  const [editID, setEditID] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (groceryItemName && isEdit) {
      // Edit
      setGroceryList(
        groceryList.map((item) => {
          if (item.id === editID) {
            return { ...item, title: groceryItemName }
          }
          return item
        })
      )
      setGroceryItemName('')
      setEditID(null)
      setIsEdit(false)

    } else {
      // New Item
      const newItem = { id: new Date().getTime().toString(), title: groceryItemName }
      setGroceryList([...groceryList, newItem])
      setGroceryItemName('')
      //setIsEdit(!isEdit)
    }
  }

  const clearList = () => {
    setGroceryList([])
  }

  const handleDelete = (id) => {
    const duplicateList = groceryList.filter(item => item.id !== id)
    setGroceryList(duplicateList)
  }

  const handleEdit = (id) => {
    const specificItem = groceryList.find((item) => item.id === id)
    setIsEdit(true)
    setEditID(id)
    setGroceryItemName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('groceryList', JSON.stringify(groceryList))
  }, [groceryList])



  return (
    <div>
      <form onSubmit={handleSubmit} className="my-3">
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Grocery Buds..."
              value={groceryItemName} onChange={(event) => setGroceryItemName(event.target.value)} />
            <div className="input-group-append">
              <button type="submit" className="btn btn-success">{isEdit ? 'Update' : 'Add'}</button>
            </div>
          </div>
        </div>
      </form>

      <div>
        {
          groceryList.length > 0 && groceryList.map((item, index) => (
            <GroceryItem key={index} items={item} deleteItem={handleDelete} editItem={handleEdit} />
          ))
        }
      </div>
      <div>
        {
          groceryList.length > 0 && <button className='btn btn-danger' onClick={clearList}>Clear Items</button>
        }
      </div>
    </div>
  )
}

export default Grocery
