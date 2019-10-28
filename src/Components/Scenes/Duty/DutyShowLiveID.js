import React,{useState, useEffect} from 'react';
import {checkSatSun} from './services';
import {getOne} from '../../../services/api'; 
import {useParams} from 'react-router-dom';
import {Table, Button, Icon} from 'semantic-ui-react';

function ShowLiveID() {
    let {liveID} = useParams();
    const [datashow, setDatashow] = useState('');

    useEffect(() => {
        getOne('livehospital', liveID)
        .then(value => setDatashow(value) )
        .catch(err => setDatashow('') )
    }, []);

    return (
        <div>
            <Button basic onClick={() => {
                getOne('livehospital', liveID)
                    .then(value => setDatashow(value) )
                    .catch(err => setDatashow('') )
            }} > Refresh </Button>
            {
                (!!Object.keys(datashow).length) ? 
                <Table celled size='small' textAlign='center'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>STT</Table.HeaderCell>
                            <Table.HeaderCell>Person</Table.HeaderCell>
                            {
                                datashow.livehospital.map((month, index) => (
                                    <Table.HeaderCell key={index}> {month.date} </Table.HeaderCell>
                                ))
                            }
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            datashow.listpersons.map((duty,index) => (
                                <Table.Row key={index}>
                                    <Table.Cell textAlign='center' > {index + 1} </Table.Cell>
                                    <Table.Cell singleLine textAlign='center' > {duty.name} </Table.Cell>
                                    {
                                        datashow.livehospital.map((personD,index) => (
                                            <Table.Cell error={checkSatSun(personD.dayOfWeek) || personD.isTet} key={index}>
                                               
                                                { personD.name === duty.name ? 'X' : null }
                                            </Table.Cell>
                                        ))
                                    }
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
                :
                null
            }
        </div>
    )
};

export default ShowLiveID;