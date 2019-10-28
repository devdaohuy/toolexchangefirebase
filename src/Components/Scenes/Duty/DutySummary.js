import React,{useState, useEffect} from 'react';
import SummaryPopup from './DutySummaryPopup';
import * as moment from 'moment';
import {getAll} from '../../../services/api'; 
import { Button, Header,Item } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function SummaryDuty() {
    const [duties, setDuties] = useState([]);

    useEffect(() => {
        getAll('duty')
        .then(value => setDuties(value))
        .catch(err => setDuties(err))
    },[]);

    return (
        <div>
            <Header as='h2' textAlign='center' > List Duties and Convert Summary Duty </Header>
            <Item.Group divided>
                {
                    duties.map(duty => (
                        <Item key={duty.id}>
                            <Item.Image size='tiny' circular src='/images/person.jpg' />
                            <Item.Content>
                                <Item.Header as='a'> ID : {duty.id} </Item.Header>
                                <Item.Meta> Create At : {moment(duty.createAt).locale('vi').format('MMMM Do YYYY, h:mm:ss a')} </Item.Meta>
                                <Item.Extra> Total : {duty.data.length} <SummaryPopup duties={duty.data} /> </Item.Extra>
                                <Item.Description>
                                    <Button color='blue' size='tiny' as={Link} to={`/duty/summary/${duty.id}`}> Go Create Duty </Button>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                ))
                }
            </Item.Group>
        </div>
    )
};

export default SummaryDuty;