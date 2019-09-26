import React from 'react';
import IconHeader from '../../IconHeader';
import GameCardRoute from './GameCardRoute';
import GameUNOIndex from './UNO/GameUNOIndex';
import GameTienLenIndex from './TienLen/GameTienLenIndex';
import GameFinish from './GameFinish';
import {Container,Divider} from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

function GameIndex() {
    return (
        <Container>
            <IconHeader icon='chess rock' header='Game' sub='Game Play UNO and Tien Len' />
            <Divider/>
            {/* Single Page */}
            <Switch>
                <Route exact path='/game' component={GameCardRoute} />
                <Route path='/game/uno' component={GameUNOIndex} />
                <Route path='/game/tienlen' component={GameTienLenIndex} />
                <Route path='/game/finish' component={GameFinish} />
            </Switch>

        </Container>
    )   
};

export default GameIndex;
