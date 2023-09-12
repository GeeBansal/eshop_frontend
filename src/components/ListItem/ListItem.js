import React from "react";
import Item from "./Item";
const DUMMY_ITESM = [
  {
    id: "i1",
    title: "item1",
    desc: "lkjhgfdsazxcvbnmpoiuytrewq",
    price: 24,
  },
  {
    id: "i2",
    title: "item2",
    desc: "lkjhgfdshjgkfgfjgdfvbnmpoiuytrewq",
    price: 24,
  },
  {
    id: "i3",
    title: "item3",
    desc: "asdfghjlkoiulkjhgfdsazxcvbnmpoiuytrewq",
    price: 24,
  },
];

const ListItem = () => {
  return (
    <ul>
      {DUMMY_ITESM.map((item) => (
        <Item
          key={item.id}
          price={item.price}
          title={item.title}
          id={item.id}
          desc={item.desc}
        />
      ))}
    </ul>
  );
};

export default ListItem;
