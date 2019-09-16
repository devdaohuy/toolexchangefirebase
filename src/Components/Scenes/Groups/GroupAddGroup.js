import React, {useState, useEffect} from 'react';
import MessageAddPlayer from '../../MessageAddPlayer';
import {Group} from '../../../services/initObject';
import {getAll} from '../../../services/api';
import {setDocument} from '../../../services/api';
import {Form,Header,Button,Icon} from 'semantic-ui-react';

const backgrounds = ['Zeus','Poseidon','Hades'];

function GroupAddGroup() {
    const [name,setName] = useState(''); // create Group
    const [background, setBackground] = useState('Zeus');  // create Group
    const [arrPlayers, setArrPlayers] = useState([]); // create Group
    const [successAddGroup, setSuccessAddGroup] = useState(null);

    const [players,setPlayers] = useState([]);

    const handleChange = (event) => {
        event.persist();
        setName(event.target.value);
    };  

    const checkPlayer = (arrPlayer,data,player) => {
        if (data.checked === true) {
            arrPlayer.push({name : player.name, idPlayer : player.id});
        } else {
            arrPlayer.splice(arrPlayer.findIndex(play => play.idPlayer === data.value ),1);
        }
    };

    const addGroup = (name,background,arrPlayers) => {
        let newGroup = new Group(name,background,arrPlayers);
        setDocument('groups',newGroup)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            setSuccessAddGroup(true);
            setName('');
            setBackground('Zeus');
            setArrPlayers([]);
            document.getElementById('FormAddGroup').reset();
        })
        .catch(error => {
            console.error("Error adding document: ", error);
            setSuccessAddGroup(false);
        });
    };

    useEffect(() => {
        getAll('players')
        .then(value => setPlayers(value) )
        .catch(err => setPlayers([]) )
    }, []);

    return (
        <Form id="FormAddGroup" >
            <MessageAddPlayer success={successAddGroup} />
            <Form.Field>
                <Form.Input
                    label={'Name'}
                    placeholder='Name Group '
                    value={name}
                    onChange={(event) => handleChange(event) }
                />
            </Form.Field>

            <Form.Group grouped >
                <Header as='h4'> Choose Background: </Header>
                {
                    backgrounds.map((bg,index) => (
                        <Form.Radio
                            key={index}
                            label={bg}
                            value={bg}
                            checked={bg === background}
                            onChange={() => setBackground(bg) }
                        />
                    ))
                }
            </Form.Group>

            <Form.Group grouped >
                <Header as='h4' > Choose Player: </Header>
                {
                    players.map(player => (
                        <Form.Checkbox 
                            key={player.id}
                            value={player.id} 
                            label={player.name}
                            onChange={(event,data) => checkPlayer(arrPlayers,data,player) }
                        />
                    ))
                }
            </Form.Group>
            {/* Btn submit add group */}
            <Button 
                primary
                type='submit'
                onClick={() => addGroup(name,background,arrPlayers) }
                
            > <Icon name='check' /> Submit</Button>
        </Form>
    )
};

export default GroupAddGroup;