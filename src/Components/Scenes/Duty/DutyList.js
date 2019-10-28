import React, {useState,useEffect} from 'react';
import ListTablePerson from './DutyListTablePerson';
import {slicePersonToLineOf4} from './services';
import {getAll,setDocument} from '../../../services/api'; 
import {Segment,Loader,Button, Image, Header, Divider, Table} from 'semantic-ui-react';

function ListPerson() {
    const [persons, setPersons] = useState([]);
    const [personInDuty, setPersonInDuty] = useState([]);

    const refreshList = () => {
        getAll('person')
        .then(value => setPersons(value))
        .catch(err => setPersons(err))
    };

    const addPersonInDuty = (per) => {
        personInDuty.push(per);
        setPersonInDuty([...personInDuty]);
    };

    const fetchPersonDutyInFirebase = (perDutyArr) => {
        let newPerDutyArr = {
            createAt : Date.now(),
            data : perDutyArr
        };
        setDocument('duty', newPerDutyArr);
        setPersonInDuty([]);
    };

    useEffect(() => {
        getAll('person')
        .then(value => setPersons(value))
        .catch(err => setPersons(err))
    },[]);

    if (persons.length) {
        return (
            <div>
                <Button basic color='blue' onClick={() => refreshList()}> Refresh </Button>

                <Divider/>
                <Table celled color='brown' >
                    <ListTablePerson
                        persons={persons}
                        callback={addPersonInDuty}
                    />
                </Table>
                
                <Divider/>
                <Segment>
                    <Header textAlign='center'> Add Person in Duty </Header>    
                    <Table celled color='blue' >
                        <Table.Body>
                            {
                                slicePersonToLineOf4(personInDuty).map((personSlice,index) => (
                                    <Table.Row key={index}>
                                        {
                                            personSlice.map((person,index) => (
                                                <Table.Cell 
                                                    key={index}
                                                    onClick={() => addPersonInDuty(person) }
                                                    >
                                                    <Header as='h4' image>
                                                        <Image rounded size='mini' src='/images/person.jpg' />
                                                        <Header.Content>
                                                            {index + 1}
                                                            <Header.Subheader>{person.name}</Header.Subheader>
                                                        </Header.Content>
                                                    </Header>
                                                    
                                                </Table.Cell>
                                            ))
                                        }
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell>
                                    <Header as='h3' > Total : {personInDuty.length} Person </Header>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>

                    <Divider/>
                    <Button disabled={personInDuty.length === 0}
                        primary
                        onClick={() => fetchPersonDutyInFirebase(personInDuty) }
                    > Add Duty </Button>
                </Segment>
            </div>
        )
    } else {
        return (
            <Segment>
                <Loader active inline='centered' />
            </Segment>
        )
    }

};

export default ListPerson;