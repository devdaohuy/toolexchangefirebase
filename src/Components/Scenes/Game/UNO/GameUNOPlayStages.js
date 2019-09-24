import React from 'react';
import {Table, Divider,Header,Icon} from 'semantic-ui-react';

function GameUNOPlayStages(props) {
    const {gameplay, stages} = props;
    //debugger;
    if (!!stages.length === false ) {
        return null
    } else {
        return(
            <Table>
                <Table.Header>
                <Divider horizontal >
                    <Header as='h4'> <Icon name='coffee' /> Stages already play : </Header>
                </Divider>
                    <Table.Row>
                        <Table.HeaderCell> <Icon name='user' circular /> Player </Table.HeaderCell>
                        {
                            gameplay.map((player,index) => (
                                <Table.HeaderCell key={index} > <Icon name='user outline' /> {player.name} </Table.HeaderCell>
                            ))
                        }
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        stages.map((inStage,index) => (
                            <Table.Row key={index} >
                                <Table.Cell> <Icon name='coffee'/> Stage : {inStage.stage} </Table.Cell>
                                {
                                    inStage.gameplay.map((game,index) => (
                                        <Table.Cell key={index} > <Icon name='winner' /> {game.point} </Table.Cell>
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

export default GameUNOPlayStages;