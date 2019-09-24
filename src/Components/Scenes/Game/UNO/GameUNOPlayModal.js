import React from 'react';
import {GamePlay} from '../../../../services/initObject';
import {updateDocument} from '../../../../services/api';
import {summaryStages,pointWinner} from './services';
import {Modal,Button,Icon,Header,Table} from 'semantic-ui-react';
import {withRouter} from 'react-router';

function GameUNOPlayModal(props) {
    const {group, stages, history, match} = props;
    //debugger;
    //console.log(match);
    const setDocumentGameplay = () => {
        let newSummary = summaryStages(stages, group.players); // create total summary game is play
        let newGameplay = new GamePlay('UNO',group,stages,newSummary); 

        updateDocument('groups', match.params.groupID , newGameplay )
        .then(() => {
            console.log('Update Group success');
            history.push('/game/finish');
        })
        .catch(err => console.log(err) );

    };

    if(!!Object.keys(group).length === false) {
        return null;
    } else{
        return (
            <Modal trigger={<Button primary > <Icon name='paint brush' /> Finish Game</Button>}>
                <Modal.Header> <Icon name='chess' /> Game Play </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Header> <Icon name='dollar sign' /> Summary Point </Header>
                        {/* Error Save Data */}
                        {/* <Message negative hidden={error} >
                            <Message.Header> Sorry, cannot update Data !!!! </Message.Header>
                            <p> Try again later ! </p>
                        </Message> */}
                        <Table celled color='black' >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell> Player </Table.HeaderCell>
                                        {
                                        group.players.map((player,index) => (
                                            <Table.HeaderCell key={index} > {player.name} </Table.HeaderCell>
                                            ))
                                        }
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell> Total </Table.Cell>
                                        {
                                        group.players.map((player,index) => (
                                            <Table.Cell key={index}> {pointWinner(stages,player.name)} </Table.Cell>
                                            ))
                                        }
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Modal.Description>
                </Modal.Content>
    
                <Modal.Actions>
                    <Button primary onClick={() => setDocumentGameplay() }>
                        Save <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>     
        )
    }
};

export default withRouter(GameUNOPlayModal);