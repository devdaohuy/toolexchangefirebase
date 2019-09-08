//import ModalPlayer from './ModalPlayer';
import React, {useState,useEffect} from 'react';
import {getAll,deleteDocument} from '../../../services/api'; 
import {List,Icon,Segment,Loader,Button} from 'semantic-ui-react';

function PlayerList() {
    const [players, setPlayers] = useState([]);

    const refreshList = () => {
        getAll('players')
        .then(value => setPlayers(value))
        .catch(err => setPlayers(err))
    };

    useEffect(() => {
        getAll('players')
        .then(value => setPlayers(value))
        .catch(err => setPlayers(err))
    },[]);
    
    if (players.length) {
        return (
            <List divided verticalAlign='middle' size='big' >
                <List.Item onClick={() => refreshList() } > <Button basic color='blue'> Refresh </Button> </List.Item>
                {
                    players.map(player => (
                        <List.Item key={player.id} >
                            <List.Content floated='right' >
                                <Button 
                                    icon 
                                    color='red' 
                                    size='mini' 
                                    onClick={() => {
                                        deleteDocument('players',player.id)
                                        .then(() => {
                                            console.log(`Delete Document ${player.id}`);
                                            refreshList();
                                        })
                                        .catch(err => console.log(err) );
                                    }}
                                > <Icon name='delete' /> </Button>
                            </List.Content>
                            <Icon name='user' />
                            <List.Content verticalAlign='middle' > {player.name} </List.Content>
                        </List.Item>
                    ))
                }
            </List>
        )
    } else {
        return (
            <Segment>
                <Loader active inline='centered' />
            </Segment>
        )
    }

};

export default PlayerList;