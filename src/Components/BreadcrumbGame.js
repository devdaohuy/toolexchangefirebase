import React from 'react';
import { Breadcrumb, Container } from 'semantic-ui-react';
import {withRouter} from 'react-router';

function convertPathToArray(paths) {
  
  const arrayPath = paths.split('/').map((path,index,pathArray) => {
    // First 
    if (index === 0) return {
      key : index,
      content : 'HOME',
      active : ( index === pathArray.length  - 1 ),
      link : ( index < pathArray.length - 1 )
    };
    // Last
    if ( index === pathArray.length - 1 ) return {
      key : index,
      content : (path.toUpperCase()),
      active : ( index === pathArray.length - 1 ),
      link : false
    }
    return {
      key : index,
      // content : (`${pathArray.slice(0, index + 1).join('/')}`),
      content : path.toUpperCase(),
      active : (index === pathArray.length - 1),
      link : (index < pathArray.length -1)
    }
  });
  return arrayPath;
};

function BreadcrumbGame(props) {
  const {location} = props;
  
  return (
    <Container>
        <Breadcrumb icon='right angle' sections={convertPathToArray(location.pathname)} />
    </Container>
  )
};

export default withRouter(BreadcrumbGame);