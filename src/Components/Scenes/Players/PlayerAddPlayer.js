import React, {useState} from 'react';
import MessageAddPlayer from '../../MessageAddPlayer';
import {Player} from '../../../services/initObject';
import {setDocument} from '../../../services/api';
import {Form,Icon,Button} from 'semantic-ui-react';

function PlayerAddPlayer() {
    const [name,setName] = useState('');
    const [successAddPlayer, setSuccessAddPlayer] = useState(null);

    const handleChange = (event) => {
        event.persist();
        setName(event.target.value);
    };

    const addPlayer = (name) => {
        const newPlayer = new Player(name);
        //debugger;
        setDocument('players',newPlayer)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            setSuccessAddPlayer(true);
            setName('');
        })
        .catch(error => {
            console.error("Error adding document: ", error);
            setSuccessAddPlayer(false);
        });
    };

    return (
        <Form>
            <MessageAddPlayer success={successAddPlayer} />
            <Form.Field>
                <label> <Icon name='address card' /> Name : </label>
                <input
                    value={name}
                    placeholder='Name Player ' 
                    onChange={(event) => handleChange(event) }
                />
            </Form.Field>
            <Button 
                type='submit' 
                primary 
                onClick={() => addPlayer(name) }
            > <Icon name='check' /> Submit</Button>
        </Form>
    )
};

export default PlayerAddPlayer;