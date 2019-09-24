import React, {useState} from 'react';
import {summaryPlayers} from './services';
import {updateDocument} from '../../../../services/api';
import {GamePlay} from '../../../../services/initObject';
import { Button, Modal, Icon, Table, Header, Divider } from 'semantic-ui-react';
import {withRouter} from 'react-router';

function GameTienLenPlayModal(props) {
    const {group, stages, match, history} = props;
    const [summary, setSummary] = useState([]);

    const summaryPlayerPoint = () => {
        let newSummary = summaryPlayers(stages, group.players);
        setSummary(newSummary);
    };

    const setDocumentGameplay = () => {
        let newGameplay = new GamePlay('TienLen',group,stages,summary); 

        updateDocument('groups', match.params.groupID , newGameplay )
        .then(() => {
            console.log('Update Group success');
            history.push('/game/finish');
        })
        .catch(err => console.log(err) );

    };

    if(!!Object.keys(group).length === false) {
        return null;
    } else {
        return (
            <Modal trigger={
                <Button
                    color='orange'
                    content='Finish'
                    icon='tasks'
                    labelPosition='right'
                />
            }>
                <Modal.Header> <Icon name='chess' /> Game Play </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Header> <Icon name='dollar sign' /> Stages Point </Header>
                        <Table celled padded>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell singleLine>
                                        <Header as='h3' textAlign='center' > Players </Header>
                                    </Table.HeaderCell>
                                    {
                                        group.players.map((player,index) => (
                                            <Table.HeaderCell key={index}>
                                                <Header as='h4' textAlign='center' >
                                                    <strong> {player.name} </strong> 
                                                </Header>
                                            </Table.HeaderCell>
                                        ))
                                    }
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    stages.map((stage,index) => (
                                        <Table.Row key={index} >
                                            <Table.Cell> 
                                                <Header as='h4' textAlign='center'>
                                                    <Icon name='chess pawn'/> Stage: {stage.stage}
                                                </Header> 
                                            </Table.Cell>
                                            {
                                                stage.gameplay.map((game,index) => (
                                                    <Table.Cell key={index}>
                                                        <Header as='h4' textAlign='center' > {game.point} </Header>
                                                    </Table.Cell>
                                                ))
                                            }
                                        </Table.Row>
                                    ))
                                }
                            </Table.Body>
                        </Table>

                        <Divider/>   
                        <Header>
                            <Button
                                color='teal'
                                basic
                                onClick={() => summaryPlayerPoint()}
                            >
                            Summary Point 
                            </Button> 
                        </Header>
                        {/* Error Save Data */}
                        {/* <Message negative hidden={error} >
                            <Message.Header> Sorry, cannot update Data !!!! </Message.Header>
                            <p> Try again later ! </p>
                        </Message> */}
                        <Table celled color='black' >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell singleLine>
                                        <Header as='h3' textAlign='center' > Players </Header>
                                    </Table.HeaderCell>
                                    {
                                        group.players.map((player,index) => (
                                            <Table.HeaderCell key={index}>
                                                <Header as='h4' textAlign='center' >
                                                    <strong> {player.name} </strong> 
                                                </Header>
                                            </Table.HeaderCell>
                                        ))
                                    }
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell> <Header as='h3' textAlign='center' > Total </Header> </Table.Cell>
                                    {
                                        summary.map((summaryPlayer,index) => (
                                            <Table.Cell key={index}> 
                                                <Header as='h4' textAlign='center' >
                                                    {
                                                        (summaryPlayer.isWin) ? 
                                                        <Icon name='winner' />
                                                        :
                                                        <Icon name='thumbs down outline' />
                                                    }
                                                    {summaryPlayer.point}
                                                </Header>
                                            </Table.Cell>
                                        ))
                                    }
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Modal.Description>
                </Modal.Content>
    
                <Modal.Actions>
                    <Button primary onClick={() => setDocumentGameplay()} >
                        Save <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>     
        )
    }
};

export default withRouter(GameTienLenPlayModal);