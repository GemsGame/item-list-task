import React from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const CardList = props => {
  const { items, sorted, disableItems, disableAction, time, getDescription} = props;

  let itemArr = [];
  if(sorted) {
     itemArr = sorted;
  } else {
     itemArr = items;
  }
  return (
  
    itemArr.map((item, i) => (
      <Card 
      getDescription={getDescription}
      key={i}
      time={time}
      index={i}
      name={item.name}
      shortInfo={item.shortInfo}
      id={item.id}
      description={item.more}
      disableItems={disableItems}
      disableAction={disableAction}
      ></Card>
    ))
  )
};
CardList.defaultProps = {
  items: [{ name: 'loading...', shortInfo: "please wait..." }]
}
CardList.propTypes = {
  items:PropTypes.array
}
export default CardList;
