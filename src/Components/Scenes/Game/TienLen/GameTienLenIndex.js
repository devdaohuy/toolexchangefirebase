import React from 'react';
import GameTienLenPlay from './GameTienLenPlay';
import GameGroup from '../GameGroup';
import {withRouter} from 'react-router';
import {Segment} from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

function GameTienLenIndex(props) {
    const {match} = props;
    return (
        <Segment raised >
            <Switch>
                <Route exact path={`${match.url}`} component={GameGroup} /> 
                <Route path={`${match.url}/:groupID`} component={GameTienLenPlay} />
            </Switch>
        </Segment>
    )
};

export default withRouter(GameTienLenIndex);