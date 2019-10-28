import React, {useState} from 'react';
import MessageAddPlayer from '../../MessageAddPlayer';
import {Person} from '../../../services/initObject';
import {setDocument} from '../../../services/api';
import {Form,Icon,Button} from 'semantic-ui-react';

function AddPerson() {
    const [person, setPerson] = useState('');
    const [successAddPerson, setSuccessAddPerson] = useState(null);

    const handleChange = (event) => {
        event.persist();
        setPerson(event.target.value);
    };

    const addPerson = (name) => {
        const newPerson = new Person(name);
        //debugger;
        setDocument('person',newPerson)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            setSuccessAddPerson(true);
            setPerson('');
        })
        .catch(error => {
            console.error("Error adding document: ", error);
            setSuccessAddPerson(false);
        });
    };

    return (
        <Form>
            <MessageAddPlayer success={successAddPerson} />
            <Form.Field>
                <label> <Icon name='address card' /> Person Name : </label>
                <input
                    value={person}
                    placeholder='Name Person' 
                    onChange={(event) => handleChange(event) }
                />
            </Form.Field>
            <Button 
                type='submit' 
                primary 
                onClick={() => addPerson(person) }
            > <Icon name='check' /> Submit</Button>
        </Form>
    )
};

export default AddPerson;