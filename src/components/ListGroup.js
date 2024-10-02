import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length > 0 ? (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
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
