import React from "react";
import IconHeader from '../../IconHeader';
import AddPerson from './DutyAddPerson';
import ListPerson from './DutyList';
import DutySummary from './DutySummary';
import DutySummaryID from './DutySummaryID';
import DutyShow from './DutyShow';
import ShowLiveID from './DutyShowLiveID';
import { Container, Header, Segment, Button, Divider } from "semantic-ui-react";
import { Route, Link } from 'react-router-dom';

function DutyIndex() {
    return (
        <Container>
            <IconHeader icon='bity' header='Duty' sub='Person : Create and List' />
            <Divider/>
            <Segment color='black' padded='very' >
                <Header as='h2' textAlign='center' > Tool Tính Bảng Trực </Header>
                <Divider/>
                <Button.Group widths='5'>
                    <Button color='blue' as={Link} to='/duty/add' > Add Person </Button>
                    <Button color='brown' as={Link} to='/duty/list' > List And Create Duties </Button>
                    <Button color='teal' as={Link} to='/duty/summary' > Sumamry Duty </Button>
                    <Button color='violet' as={Link} to='/duty/show' > Show Duty </Button>
                </Button.Group>
                <Divider/>
                    <Route exact path='/duty/add' component={AddPerson} />
                    <Route path='/duty/list' component={ListPerson} />
                    <Route path='/duty/summary' component={DutySummary}/>
                    <Route path='/duty/summary/:dutyID'>
                        <DutySummaryID/>
                    </Route>

                    <Route path='/duty/show' component={DutyShow} />
                    <Route path='/duty/show/:liveID'>
                        <ShowLiveID/>
                    </Route>

                
            </Segment>
        </Container>
    )
};

export default DutyIndex; 