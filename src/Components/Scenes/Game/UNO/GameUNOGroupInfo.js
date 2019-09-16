import React from 'react';
import * as moment from 'moment';
import {Table,Icon} from 'semantic-ui-react';

function GameUNOGroupInfo(props) {
    return (
        <Table definition color='black' >
                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={2}> <Icon name='group'/> Group Play </Table.Cell>
                        <Table.Cell> {props.group.name} </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell> <Icon name='calendar alternate'/> Date </Table.Cell>
                        <Table.Cell> {moment().format('MMMM Do YYYY, h:mm:ss a')} </Table.Cell>
                    </Table.Row>
                </Table.Body>
        </Table>
    )
};

export default GameUNOGroupInfo;