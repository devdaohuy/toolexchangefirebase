import React from 'react';
import SideBarSegment from './Components/SideBar/SideBarSegment';
import HomeIndex from './Components/Scenes/Home/HomeIndex';
import PlayerIndex from './Components/Scenes/Players/PlayerIndex';
import GroupIndex from './Components/Scenes/Groups/GroupIndex';
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
            {/* Route page */}
            <Grid.Column>
              <Switch>
                <Route exact path='/' component={HomeIndex}/>
                <Route path='/players' component={PlayerIndex}/>
                <Route path='/groups' component={GroupIndex}/>
          
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Router>
    )
}

export default App;

// App.js 1st pages load page first, route page
// SideBar lam rieng khong lien quan