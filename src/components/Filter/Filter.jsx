import React from "react";
import './_filter.scss';

const Filter = props => {
  const { items, action } = props;

  return (
    <div className="row mt-3 mb-3">
      <div className="col">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
          </div>
          <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={action()} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
