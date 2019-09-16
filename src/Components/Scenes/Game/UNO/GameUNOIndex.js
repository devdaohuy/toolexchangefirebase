import React from 'react';
import GameGroup from '../GameGroup';
import GameUNOPlay from './GameUNOPlay';
import {withRouter} from 'react-router';
import {Segment} from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

function GameUNOIndex(props) {
    const {match} = props;
    return (
        <Segment raised >
            <Switch>
                <Route exact path={`${match.url}`} component={GameGroup} /> 
                <Route path={`${match.url}/:groupID`} component={GameUNOPlay} />
            </Switch>
        </Segment>
    )
};

export default withRouter(GameUNOIndex);