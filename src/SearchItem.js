import React from 'react';

const SearchItem = ({ search, setSearch }) => {
  return (
    <form
      className="max-w-md mx-auto  p-4 mb-4 bg-white rounded-lg  mt-4"
      onSubmit={(e) => e.preventDefault()}
    >
      
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="  Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 shadow-lg rounded-full focus:outline-none focus:ring focus:border-purple-500"
      />
    </form>
  );
};

export default SearchItem;
