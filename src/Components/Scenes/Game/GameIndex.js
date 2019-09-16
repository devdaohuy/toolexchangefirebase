import React from 'react';
import IconHeader from '../../IconHeader';
import GameCardRoute from './GameCardRoute';
import GameUNOIndex from './UNO/GameUNOIndex';
import GameFinish from './GameFinish';
import {Container,Divider} from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

function GameIndex() {
    return (
        <Container>
            <IconHeader icon='chess rock' header='Game' sub='Game Play UNO and ...' />
            <Divider/>
            {/* Single Page */}
            <Switch>
                <Route exact path='/game' component={GameCardRoute} />
                <Route path='/game/uno' component={GameUNOIndex} />
                <Route path='/game/finish' component={GameFinish} />
                {/* Sub route game */}
                {/* <Route path='/game/uno' render={(match) => <UnoPage {...match} /> } />
                <Route path='/game/tienlen' render={() => <h1> /game/tienlen </h1> } />
                <Route path='/game/finish' render={() => <FinishPage/> } /> */}
            </Switch>

        </Container>
    )   
};

export default GameIndex;

// xem laij dieu huong 

// choi game -> choose group -> choose game -> game play -> finish game
//              localhost/game/:group/uno/finish