import React from 'react';
import { Table, Icon, Header, Label } from 'semantic-ui-react';

function GameTienLenStagesOnlyMobile(props) {
    const {stages} = props;
    return (
        <Table celled>
            <Table.Body>
                {
                    stages.map((stage,index) => (
                        <Table.Row key={index}>
                            <Table.Cell>
                                <Header as='h4' dividing>
                                    <Icon name='chess pawn'/> Stage: {stage.stage}
                                </Header>
                            </Table.Cell>
                            {
                                stage.gameplay.map((game,index) => (
                                    <Table.Cell key={index}>
                                        <Icon name='user'/> <strong> {game.name} </strong>
                                        <Header floated='right'>
                                            <Label>
                                                <Icon name='winner' /> {game.point}
                                            </Label>
                                        </Header>
                                    </Table.Cell>
                                ))
                            }
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
};

function GameTienLenStagesOnlyComputer(props) {
    const {stages,players} = props;
    if ( players === undefined ) {
        return null
    } else {
        return (
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>
                            <Header as='h3' textAlign='center' > Players </Header>
                        </Table.HeaderCell>
                        {
                            players.map((player,index) => (
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
        )
    }
};

function GameTienLenStages(props) {
    const {isMobile,stages,players} = props;
    if (isMobile === true) {
        return <GameTienLenStagesOnlyMobile stages={stages} />
    } else {
        return <GameTienLenStagesOnlyComputer stages={stages} players={players} />
    }
}; 

export default GameTienLenStages;