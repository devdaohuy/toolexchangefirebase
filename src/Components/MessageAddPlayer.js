import React from 'react';
import { Message } from 'semantic-ui-react';

function MessageAddPlayer(props) {
    const {success} = props;
    if (success === null) {
        return null;
    }
    if (success === true ) {
        return (
            <Message positive>
                <Message.Header> Add Success ! </Message.Header>
            </Message>
        )
    } else {
        return (
            <Message negative>
                <Message.Header>We're sorry we can't apply the Player ! </Message.Header>
            </Message>
        )
    }
};

export default MessageAddPlayer;

