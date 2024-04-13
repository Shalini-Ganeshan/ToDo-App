import ItemList from './ItemsList';

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p className='text-cursive text-purple-600 text-center text-xl'>Your list is empty!</p>
              
            )}
        </>
    )
}

export default Content

