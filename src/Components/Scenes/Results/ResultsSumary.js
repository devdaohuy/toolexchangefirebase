import React, {useState, useEffect} from 'react';
import {getOne} from '../../../services/api';
import ResultsGroupInfo from './ResultsSumaryGroupInfo';
import ResultsSumaryTableModal from './ResultsSumaryTableModal';
import { Segment, Container, Divider, Header, Icon } from 'semantic-ui-react';
import {withRouter} from 'react-router';

function ResultsSumary(props) {
    const {match} = props;
    const [group, setGroup] = useState({});

    useEffect(() => {
        getOne('groups', match.params.groupID)
        .then(value => setGroup(value) )
        .catch(err => setGroup({}));
    }, []);

    //console.log(group);

    return (
        <Segment>
            <Container>
                <Divider horizontal >
                    <Header as='h3'> <Icon name='plus' /> Summary Game </Header>    
                </Divider>
                <ResultsGroupInfo
                    group={group}
                />

                <Divider horizontal >
                    <Header as='h3'> <Icon name='calendar' /> Date Play Game </Header>    
                </Divider>
                <ResultsSumaryTableModal
                    games={group.games}
                />

            </Container>
        </Segment>
    )
};

export default withRouter(ResultsSumary);