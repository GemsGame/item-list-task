import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faUndo } from '@fortawesome/free-solid-svg-icons';
import './_card.scss';

const Card = props => {
  const { name, shortInfo, disableAction, disableItems, index, id, time, description, getDescription } = props;
  let style;
  let icon;
  let delTime;
  let closeOpen;
  if (disableItems[id] === true || disableItems[id] === undefined) {
    style = 'card primary-color';
    icon = faWindowClose;
    closeOpen = () => getDescription({name:name,shortInfo:shortInfo},description);
    if (time) {
      delTime = '';
    } 
  } else {
    style = 'card secondary-color';
    closeOpen = () => alert("this element has been deleted");
    icon = faUndo;
    if (time) {
      delTime = `deleted at ${time[id].getDate()}/${time[id].getMonth() + 1}/${time[id].getFullYear()} - ${time[id].getHours()}:${time[id].getMinutes()}:${time[id].getSeconds()}`;
    } 
  }
  return <div className="row mt-1 mb-1">
    <div className="col">
      <div className={disableItems[id] === true || disableItems[id] === undefined ? "card primary-color" : "card secondary-color"}>
      <div className="card-body poiner opacity" onClick={closeOpen}>
          <div className="row">
            <div className="col">
              <div className="card-title text-white">
                {name}
              </div>
              <div className="card-text text-white">
                {shortInfo}
              </div>
            </div>
            <div className="col-auto poiner">
              <FontAwesomeIcon icon={icon} size="lg" color="white" onClick={disableAction(index, id)} />
            </div>
          </div>
          <div className="row">
            <div className="col text-muted mt-2">
              {delTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Card;
