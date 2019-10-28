import React, {useState} from 'react'; 
import PropTypes from 'prop-types';
import MessageAddPlayer from '../../MessageAddPlayer';
import {Livehospital} from './containers';
import {liveHospital,dayOfWeekInMonth,checkSatSun} from './services';
import {setDocument} from '../../../services/api';
import { Button, Modal, Table, Icon } from 'semantic-ui-react';

function SumamryIDModal(props) {
    const {whatMonth,personsInDuty} = props;
    const [perLiveHospital, setPerLiveHospital] = useState([]);
    const [success, setSuccess] = useState(false);

    const uploadNewLiveHospital = (thisMonth,liveHospotal, listpersons) => {
        let newLivehospital = new Livehospital(thisMonth, liveHospotal, listpersons);
        setDocument('livehospital', newLivehospital)
        .then(value => setSuccess(true) )
        .catch(err => setSuccess(false) )
    };

    const closeModal = () => {
        setPerLiveHospital([]);
    };

    return (
        <Modal 
            size='fullscreen' 
            trigger={<Button color={whatMonth.color} > Month {whatMonth.name} </Button>}
            onClose={() => closeModal() }
        >
            <Modal.Header>
                 Duties in Month {whatMonth.name} has {whatMonth.daties} date
                <div>
                    <Button basic onClick={() => {
                        let newPer = liveHospital(whatMonth, personsInDuty);
                        setPerLiveHospital(newPer);
                    }} > Create </Button>
                </div>
                <MessageAddPlayer
                    success={success}
                />
            </Modal.Header>
            <Modal.Content>
                {
                    (!!perLiveHospital.length) ?
                    <div>
                        <Table celled size='small' textAlign='center'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>STT</Table.HeaderCell>
                                    <Table.HeaderCell>Person</Table.HeaderCell>
                                    {
                                        dayOfWeekInMonth(whatMonth.firstDate, whatMonth.daties).map((month, index) => (
                                            <Table.HeaderCell key={index}> {month.date} </Table.HeaderCell>
                                        ))
                                    }
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    personsInDuty.map((duty,index) => (
                                        <Table.Row key={index}>
                                            <Table.Cell textAlign='center' > {index + 1} </Table.Cell>
                                            <Table.Cell singleLine textAlign='center' > {duty.name} </Table.Cell>
                                            {
                                                perLiveHospital.map((personD,index) => (
                                                    <Table.Cell error={checkSatSun(personD.dayOfWeek)} key={index}>
                                                        { personD.name === duty.name ? 'X' : null }
                                                    </Table.Cell>
                                                ))
                                            }
                                        </Table.Row>
                                    ))
                                }
                            </Table.Body>
                        </Table>

                    </div>
                    :
                    null
                }
                
            </Modal.Content>
            <Modal.Actions>
                <Button 
                    primary 
                    disabled={!!!perLiveHospital.length}
                    onClick={() => uploadNewLiveHospital(whatMonth,perLiveHospital,personsInDuty) }
                >
                    Proceed <Icon name='right chevron' />
                </Button>
            </Modal.Actions>
        </Modal>
    )
};

SumamryIDModal.propTypes = {
    whatMonth : PropTypes.shape({
        name : PropTypes.string,
        daties : PropTypes.number,
        color : PropTypes.string,
        firstDate : PropTypes.string 
    }),
    personsInDuty : PropTypes.array
};

export default SumamryIDModal