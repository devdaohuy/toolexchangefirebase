import React from 'react';
import SideBarSegment from './Components/SideBar/SideBarSegment';
import BreadcrumbGame from './Components/BreadcrumbGame';
import HomeIndex from './Components/Scenes/Home/HomeIndex';
import PlayerIndex from './Components/Scenes/Players/PlayerIndex';
import GroupIndex from './Components/Scenes/Groups/GroupIndex';
import GameIndex from './Components/Scenes/Game/GameIndex';
import ResultsIndex from './Components/Scenes/Results/ResultsIndex';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

function App() {
    return (
      <Router>
        <Grid>
          <Grid.Row>
            <Grid.Column>
                <SideBarSegment/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
                <BreadcrumbGame/>
            </Grid.Column>
          </Grid.Row>
           
          <Grid.Row>
            {/* Route page */}
            <Grid.Column>
              <Switch>
                <Route exact path='/' component={HomeIndex}/>
                <Route path='/players' component={PlayerIndex}/>
                <Route path='/groups' component={GroupIndex}/>
                <Route path='/game' component={GameIndex} />
                <Route path='/results' component={ResultsIndex} />
          
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Router>
    )
}

export default App;