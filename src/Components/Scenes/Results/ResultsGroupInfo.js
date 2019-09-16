import React from 'react';
import * as moment from 'moment';
import { Table, Icon, Image, List } from 'semantic-ui-react';

function ResultsGroupInfo(props) {
    const {group} = props;
    if(!!Object.keys(group).length === false) {
        return null;
    } else {
        return (
            <Table definition color='black' >
                <Table.Body>
                    <Table.Row>
                        <Table.Cell> <Icon name="address book" /> Name Group </Table.Cell>
                        {/* <Table.Cell> <Image src={`${url.server}/image/${group.background}.jpg`} avatar /> {group.name} </Table.Cell> */}
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell> <Icon name="address book outline" /> ID Group </Table.Cell>
                        <Table.Cell> {group.id} </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell> <Icon name="calendar" /> Date Create </Table.Cell>
                        <Table.Cell> {moment(group.createAt).format('MMMM Do YYYY, h:mm:ss a')} </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell> <Icon name="user outline " /> Players </Table.Cell>
                        <Table.Cell>
                            <List horizontal >
                            {
                                group.players.map(player => (
                                    <List.Item key={player.idPlayer} >
                                        <List.Content>
                                            <List.Header> <Icon name='user' />{player.name} </List.Header>
                                        </List.Content>
                                    </List.Item>
                                ))
                            }  
                            </List>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
};

export default ResultsGroupInfo;