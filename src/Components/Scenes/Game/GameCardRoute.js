import React from 'react';
import {Segment,Card,Image,Button} from 'semantic-ui-react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';

const routeGames = [
    {
        name : 'UNO',
        description : 'Input Point Player Game UNO',
        link : '/game/uno',
        background : '/images/UNO.png'
    },
    {
        name : 'Tiến Lên',
        description : 'Input Point Player Game Tiến Lên',
        link : '/game/tienlen',
        background : '/images/TienLen.jpg'
    }
];

function GameCardRoute(props) {
    const {history} = props;
    return (
        <Segment padded='very'>
            <Card.Group centered >
                {
                    routeGames.map((route,index) => (
                        <Card key={index} >
                            <Image src={route.background} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header> {route.name} </Card.Header>
                                <Card.Description> {route.description} </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button color='orange' as={ Link } to={route.link} > Go {route.name} Page </Button>
                            </Card.Content>
                        </Card>
                    ))
                }
            </Card.Group>
        </Segment>
    )
};

export default withRouter(GameCardRoute);