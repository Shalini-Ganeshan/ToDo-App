const Footer = ({ length }) => {
  return (
      <footer>
          <p className=" fixed bottom-0 left-0 w-full bg-purple-500 p-4  text-white text-center">{length} List {length === 1 ? "item" : "items"}</p>
      </footer>
  )
}

export default Footer

