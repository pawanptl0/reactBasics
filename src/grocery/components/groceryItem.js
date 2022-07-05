import { FaEdit, FaTrash } from 'react-icons/fa'

const GroceryItem = ({ items, deleteItem, editItem }) => {
  return (
    <div className="d-flex">
      <div className="p-2 mr-auto">{items.title}</div>
      <div>
        <button type="button" className="btn btn-primary" onClick={() => editItem(items.id)}><FaEdit /></button>
      </div>
      <div className="ml-2">
        <button type="button" className="btn btn-danger" onClick={() => deleteItem(items.id)}><FaTrash /></button>
      </div>
    </div>
  )
}

export default GroceryItem
