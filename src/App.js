import React, { useState, useEffect } from "react";
import "./styles.scss";
import CardList from './components/CardList';
import Filter from "./components/Filter/Filter";
import Description from './components/Description';

export default function App() {
  const [items, setItems] = useState();
  const [sortedItems, setSortedItems] = useState();
  const [disableItems, setDisableItems] = useState({});
  const [time, setTime] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    fetch('http://vm1085429.kvm.had.pm:3111/list.json')
      .then(data => data.json())
      .then(res => setItems(res.data))
      .catch(err => setItems(err));
  }, []);

  const getDescription = (name, url) => {
    fetch(`http://vm1085429.kvm.had.pm:3111${url}`)
      .then(data => data.json())
      .then(res => setDescription({name, ...res}))
      .catch(err => setItems(err));
  }
  const handleChange = () => e => {
    setSortedItems(items.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }
  const disable = (index, id) => e => {
    if (disableItems[id] === false) {
      items.unshift(items[index])
      items.splice(index + 1, 1);
      setDisableItems({ ...disableItems, [id]: true });
      setTime({ ...time, [id]: new Date() });
    }
    else {
      items.push(items[index]);
      items.splice(index, 1);
      setDisableItems({ ...disableItems, [id]: false });
      setTime({ ...time, [id]: new Date() });
      console.log(time);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 col-sm-8">
          <Filter items={items} action={handleChange} />
          <CardList
            getDescription={getDescription}
            items={items}
            time={time}
            sorted={sortedItems}
            disableAction={disable}
            disableItems={disableItems} />
        </div>
        <div className="col-md-8 col-sm-8">
          <Description
          description={description}
          />
        </div>
      </div>
    </div>);

}
