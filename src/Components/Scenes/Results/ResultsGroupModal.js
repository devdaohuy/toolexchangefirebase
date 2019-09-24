import React from 'react';
import * as moment from 'moment';
import {Responsive, Table, Icon, Header, Divider, Modal, Button} from 'semantic-ui-react';

function ResponsiveStagesModalComputer(props) {
    const {game} = props;
    return (
        <Responsive
            {...Responsive.onlyComputer}
            as={Table}
            celled color='black'
            >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell> <Icon name='user' circular /> Player </Table.HeaderCell>
                    {
                        game.summary.map((player,index) => (
                            <Table.HeaderCell key={index} > <Icon name='user outline' /> {player.name} </Table.HeaderCell>
                        ))
                    }
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    game.stages.map((stage,index) => (
                        <Table.Row key={index} >
                            <Table.Cell> <Icon name='winner' /> {stage.stage} </Table.Cell>
                            {
                                stage.gameplay.map((gamepl,index) => (
                                    <Table.Cell key={index}>
                                        {
                                            (gamepl.isWin) ? 
                                            <Icon name='winner' />
                                            :
                                            <Icon name='thumbs down outline' />
                                        }  
                                    {gamepl.point}  
                                    </Table.Cell>
                                ))
                            }
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Responsive>
    )
};

function ResponsiveSummaryModalComputer(props) {
    const {game} = props;
    return (
        <Responsive
            {...Responsive.onlyComputer}
            as={Table}
            celled color='black'
            >
                <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell> <Icon name='user' circular /> Player </Table.HeaderCell>
                            {
                                game.summary.map((player,index) => (
                                    <Table.HeaderCell key={index} > <Icon name='user outline' /> {player.name} </Table.HeaderCell>
                                ))
                            }
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell> <Icon name='coffee' circular /> Point </Table.Cell>
                            {
                                game.summary.map((player,index) => (
                                    <Table.Cell key={index} >  
                                    {
                                        (player.isWin) ? 
                                        <Icon name='winner' />
                                        :
                                        <Icon name='thumbs down outline' />
                                    }
                                    {player.point} 
                                    </Table.Cell>
                                ))
                            }
                        </Table.Row>
                    </Table.Body>
        </Responsive>
    )
};

function ResultsGroupModal(props) {
    const {game} = props;
    //debugger;
    //console.log(game);
    return (
        <Modal trigger={<Button> {moment(game.playAt).format('MMMM Do YYYY, h:mm:ss a')} </Button>} >
            <Modal.Content>
                <Divider horizontal >
                    <Header as='h3'> <Icon name='chess pawn' /> Point Match </Header>  
                    <Header as='h4'> <Icon name='chess pawn' /> Game : {game.game} </Header>        
                </Divider>
                <ResponsiveStagesModalComputer
                    game={game}
                />

                <Divider horizontal >
                    <Header as='h3'> <Icon name='winner' /> Total Point </Header>    
                </Divider>
                <ResponsiveSummaryModalComputer
                    game={game}
                />
                <Responsive
                    {...Responsive.onlyMobile}
                    as={Table}
                    celled color='black'
                >
                    <Table.Body>
                        {
                            game.summary.map((player,index) => (
                                <Table.Row key={index} >
                                    <Table.Cell> {player.name} </Table.Cell>
                                    <Table.Cell> <Icon name='winner' /> {player.point} </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Responsive>
            </Modal.Content>

            <Modal.Actions>
                <Button primary > OK </Button>
            </Modal.Actions>
        </Modal>
    )
};

export default ResultsGroupModal;