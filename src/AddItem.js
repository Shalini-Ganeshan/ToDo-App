import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form
      className="max-w-md mx-auto  p-4 bg-white rounded-lg  mt-4"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center space-x-4">
        <input
          ref={inputRef}
          autoFocus
          id="addItem"
          type="text"
          placeholder="  Add Item"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="flex-grow border p-2 rounded-full focus:outline-none focus:ring focus:border-purple-500 shadow-lg "
        />
        <button
          onClick={() => inputRef.current && inputRef.current.focus()}
          type="submit"
          aria-label="Add Item"
          className="bg-purple-500 text-white shadow-lg  border  border-purple-300 p-2 rounded transition duration-300 hover:bg-purple-600"
        >
          <FaPlus />
        </button>
      </div>
    </form>
  );
};

export default AddItem;

