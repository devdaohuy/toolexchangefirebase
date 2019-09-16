import React,{useState,useEffect} from 'react';
import {getAll} from '../../../services/api';
import {Segment,Loader,Card,Image,Icon,List,Button} from 'semantic-ui-react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';

function GameGroup(props) {
    const {match} = props;
    const [groups,setGroups] = useState([]);

    useEffect(() => {
        getAll('groups')
        .then(value => setGroups(value) )
        .catch(err => setGroups([]) )
    },[]);

    if ( groups === undefined || !!groups.length === false) {
        return (
            <Segment>
                <Loader active inline='centered' />
            </Segment>
        )
    } else {
        return (
            <Card.Group>
                {
                    groups.map((group,index) => (
                        <Card key={index} color='black' >
                            <Image 
                                src={`/images/${group.background}.jpg`} 
                                wrapped 
                                ui={false}
                            />
                            <Card.Content>
                                <Card.Header> <Icon name='group' circular /> {group.name} </Card.Header>
                                <Card.Description>
                                    <List ordered >
                                        {
                                            group.players.map((player,index) => (
                                                <List.Item key={index} >
                                                    <Icon name='user' />
                                                    <List.Content>
                                                        <List.Header> {player.name} </List.Header>
                                                     
                                                    </List.Content>
                                                </List.Item>
                                            ))
                                        }
                                    </List>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra >
                                <Button color='orange' as={Link} to={`${props.match.url}/${group.id}`} > Go {group.name} Page </Button>
                            </Card.Content>
                        </Card>
                    ))
                }
            </Card.Group>
        )
    }
};

export default withRouter(GameGroup);