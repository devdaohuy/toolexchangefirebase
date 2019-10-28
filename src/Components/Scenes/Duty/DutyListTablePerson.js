import React from 'react';
import {slicePersonToLineOf4} from './services';
import {Table, Image} from 'semantic-ui-react';

function ListTablePerson(props) {
    const {persons,callback} = props;
    return (
        <Table.Body>
            {
                slicePersonToLineOf4(persons).map((personSlice,index) => (
                    <Table.Row key={index}>
                        {
                            personSlice.map((person,index) => (
                                <Table.Cell
                                    key={index}
                                    onClick={() => callback(person) }
                                    >
                                    <Image avatar src='/images/person.jpg' />
                                    {person.name}
                                    
                                </Table.Cell>
                            ))
                        }
                    </Table.Row>
                ))
            }
        </Table.Body>
    )
};

export default ListTablePerson;