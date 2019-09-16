import React from 'react';

function ResponsiveComputer(props) {
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
                        game.idGameplay.summary.map((player,index) => (
                            <Table.HeaderCell key={index} > <Icon name='user outline' /> {player.name} </Table.HeaderCell>
                        ))
                    }
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell> <Icon name='coffee' circular /> Point </Table.Cell>
                    {
                        game.idGameplay.summary.map((player,index) => (
                            <Table.Cell key={index} > <Icon name='winner' /> {player.point} </Table.Cell>
                        ))
                    }
                </Table.Row>
            </Table.Body>
        </Responsive>
    )
};

function ResponsiveMobile(props) {
    return (
        <Responsive
            {...Responsive.onlyMobile}
            as={Table}
            celled color='black'
            >
            <Table.Body>
                {
                    game.idGameplay.summary.map((player,index) => (
                        <Table.Row key={index} >
                            <Table.Cell> {player.name} </Table.Cell>
                            <Table.Cell> <Icon name='winner' /> {player.point} </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Responsive>
    )
};

function ResultsGroupModal(props) {
    const {game} = props;
    return (
        <Modal trigger={<Button> {moment(game.idGameplay.playAt).format('MMMM Do YYYY, h:mm:ss a')} </Button>} >
            <Modal.Content>
                <Divider horizontal >
                    <Header as='h3'> <Icon name='chess pawn' /> Point Match </Header>    
                </Divider>
                <Table celled color='black' >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell> <Icon name='user' circular /> Player </Table.HeaderCell>
                            {
                                game.idGameplay.summary.map((player,index) => (
                                    <Table.HeaderCell key={index} > <Icon name='user outline' /> {player.name} </Table.HeaderCell>
                                ))
                            }
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            game.idGameplay.stages.map((inStage,index) => (
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
            

                <Divider horizontal >
                    <Header as='h3'> <Icon name='winner' /> Total Point </Header>    
                </Divider>
                <ResponsiveComputer/>

                <ResponsiveMobile/>
                
            </Modal.Content>

            <Modal.Actions>
                <Button primary > Edit </Button>
            </Modal.Actions>
        </Modal>
    )
};

export default ResultsGroupModal;