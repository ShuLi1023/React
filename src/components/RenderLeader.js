import React from 'react';
import {Media} from "reactstrap";

function RenderLeader({leader}){
    return(
      <Media>
        <Media left>
          <Media object src={leader.image} alt={leader.name}/>
        </Media>
        <Media body>
          <Media heading>{leader.name}</Media>
          <p>{leader.designation}</p>
          <p>{leader.description}</p>
        </Media>
        
      </Media>
    )
}
export default RenderLeader