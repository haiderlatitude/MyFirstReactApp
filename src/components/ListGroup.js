function ListGroup() {
  let items = ["Lahore", "Karachi", "Islamabad", "Gujranwala", "Faisalabad"];
  //   items = [];

  const handleClick = (event) => console.log(event);

  return (
    <>
      <h1>List Group</h1>
      {items.length > 0 ? (
        <ul className="list-group">
          {items.map((item) => (
            <li key={item} className="list-group-item" onClick={handleClick}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Items Found!</p>
      )}
    </>
  );
}

export default ListGroup;
