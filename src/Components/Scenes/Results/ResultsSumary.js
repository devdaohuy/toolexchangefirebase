import React from 'react';
import ResultsGroupInfo from './ResultsGroupInfo';
import { Segment, Container } from 'semantic-ui-react';

function ResultsSumary() {
    return (
        <Segment>
            <Container>
                <Divider horizontal >
                    <Header as='h3'> <Icon name='plus' /> Summary Game </Header>    
                </Divider>
                <ResultsGroupInfo
                
                />

                <Divider horizontal >
                    <Header as='h3'> <Icon name='calendar' /> Date Play Game </Header>    
                </Divider>
                


            </Container>
        </Segment>
    )
};

export default ResultsSumary;