import React from 'react';
import IconHeader from '../../IconHeader';
import GroupAddGroup from './GroupAddGroup';
import GroupList from './GroupList';
import { Container, Divider, Segment, Grid, Header, Icon, Responsive, Tab } from 'semantic-ui-react';

const panes = [
    { menuItem : 'Add Group', render : () => <Tab.Pane> <GroupAddGroup/> </Tab.Pane> },
    { menuItem : 'List Group', render : () => <Tab.Pane> <GroupList/> </Tab.Pane> }
];

function GroupIndex() {
    return (
        <Container>
            <IconHeader icon='group' header='Groups' sub='Groups : Create and List' />
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
                        <Header as='h3' textAlign='center' > <Icon name='user plus' /> Create Group </Header>
                        <GroupAddGroup/>
                    </Grid.Column>
                    {/* Component List Player */}
                    <Grid.Column>
                        <Header as='h3' textAlign='center' > <Icon name='users' /> List Group </Header>
                        <GroupList/>      
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

export default GroupIndex;