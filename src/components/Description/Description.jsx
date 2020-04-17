import React from 'react'
import PropTypes from 'prop-types'
import './_description.scss';
const imgHost = 'https://mrsoft.by/tz20';

const Description = props => {
    let content; 
    const {description} = props;
    if(props.description) {
       content = <div className="card-body vh-100">
       <div className="card-title"><h1>{description.name.name}</h1></div>
       <div className="card-text"><h3>{description.name.shortInfo}</h3></div>
       <div className="card-text">{description.bio}</div>

       <div className="card-image mx-auto my-auto">
       <img src={imgHost + description.pic} className="rounded mx-auto d-block mt-5" alt="Responsive image"/>
       </div>
   </div>
    } else {
        content = <div className="card-body vh-100">
       <div className="card-title"><h1></h1></div>
       <div className="card-text"></div>
       <div className="card-image mx-auto my-auto">
       </div>
   </div>
    }
    return (
        <div className="card mt-3">
           {content}
        </div>
    )
}

Description.propTypes = {

}

Description.defaultProps = {
    //description: {name:"...", pic:"", bio:"", id:""}
}
export default Description;
