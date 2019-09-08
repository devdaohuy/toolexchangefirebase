import React from 'react';
import IconHeader from '../../IconHeader';
import PlayerAddPlayer from './PlayerAddPlayer';
import PlayerList from './PlayerList';
import { Container, Divider, Segment, Grid, Header, Icon, Responsive, Tab } from 'semantic-ui-react';

const panes = [
    { menuItem : 'Add Player', render : () => <Tab.Pane> <PlayerAddPlayer/> </Tab.Pane> },
    { menuItem : 'List Player', render : () => <Tab.Pane> <PlayerList/> </Tab.Pane> }
];

function PlayerIndex() {
    return (
        <Container>
            <IconHeader icon='users' header='Players' sub='Player : Create and List' />
            <Divider/>
            {/* === COMPUTER PLAYER === */}
            <Responsive
                {...Responsive.onlyComputer}
                as={Segment}
                raised
            >
                <Grid columns={2} relaxed='very' >

                    {/* Component Create Player */}
                    <Grid.Column>
                        <Header as='h3' textAlign='center' > <Icon name='user plus' /> Create Player </Header>
                        <PlayerAddPlayer/>
                    </Grid.Column>
                    {/* Component List Player */}
                    <Grid.Column>
                        <Header as='h3' textAlign='center' > <Icon name='users' /> List Player </Header>
                        <PlayerList/>              
                    </Grid.Column>
                </Grid>

                <Divider vertical>And</Divider>
            </Responsive>
            {/* === END Players Computer === */}

            {/* MOBILE */}
            <Responsive
                {...Responsive.onlyMobile}
                as={Tab}
                panes={panes}
            />
            
        </Container>
    )
};

export default PlayerIndex;