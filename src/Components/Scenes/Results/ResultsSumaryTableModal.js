import React from 'react';
import ResultsGroupModal from './ResultsGroupModal';
import {Table, Icon} from 'semantic-ui-react';

function ResultsSumaryTableModal(props) {
    const {games} = props;
    //debugger;
    //console.log(games);
    if ( games === undefined || !!games.length === false  ) {
        return null;
    } else {
        return (
            <Table definition color={'black'} >
                <Table.Body>
                    {
                        games.map((game,index) => (
                            <Table.Row key={index} >
                                <Table.Cell> <Icon name='calendar' /> Date {index + 1 } </Table.Cell>
                                <Table.Cell>
                                    <ResultsGroupModal
                                        game={game}
                                    />
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        )
    }
};

export default ResultsSumaryTableModal;