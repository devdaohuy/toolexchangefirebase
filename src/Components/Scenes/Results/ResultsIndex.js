import React from 'react';
import IconHeader from '../../IconHeader';
import ResultsListGroup from './ResultsListGroup';
import ResultsSumary from './ResultsSumary';
import {Container,Divider} from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

function ResultsIndex() {
    return (
        <Container>
            <IconHeader icon='chess rock' header='Game' sub='Results Game Play UNO and ...' />
            <Divider/>
            {/* Single Page */}
            <Switch>
                <Route exact path='/results' component={ResultsListGroup} />
                <Route path='/results/:groupID' component={ResultsSumary} />
            </Switch>

        </Container>
    )   
};

export default ResultsIndex;

