//import ModalPlayer from './ModalPlayer';
import React, {useState,useEffect} from 'react';
import {getAll,deleteDocument} from '../../../services/api'; 
import {List,Icon,Segment,Loader,Button} from 'semantic-ui-react';

function GroupList() {
    const [groups, setGroups] = useState([]);

    const refreshList = () => {
        getAll('groups')
        .then(value => setGroups(value))
        .catch(err => setGroups(err))
    };

    useEffect(() => {
        getAll('groups')
        .then(value => setGroups(value))
        .catch(err => setGroups(err))
    },[]);
    
    if (groups.length) {
        return (
            <List divided verticalAlign='middle' size='big' >
                <List.Item onClick={() => refreshList() } > <Button basic color='blue'> Refresh </Button> </List.Item>
                {
                    groups.map(group => (
                        <List.Item key={group.id} >
                            <List.Content floated='right' >
                                <Button 
                                    icon 
                                    color='red' 
                                    size='mini' 
                                    onClick={() => {
                                        deleteDocument('groups',group.id)
                                        .then(() => {
                                            console.log(`Delete Document ${group.id}`);
                                            refreshList();
                                        })
                                        .catch(err => console.log(err) );
                                    }}
                                > <Icon name='delete' /> </Button>
                            </List.Content>
                            <Icon name='user' />
                            <List.Content verticalAlign='middle' > {group.name} </List.Content>
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

export default GroupList;