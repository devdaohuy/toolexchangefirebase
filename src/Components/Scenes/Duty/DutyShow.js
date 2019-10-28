import React, {useState, useEffect} from 'react';
import {getAll} from '../../../services/api';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function DutyShow() {
    const [liveHospitals, setLiveHospitals] = useState([]);

    useEffect(() => {
        getAll('livehospital')
        .then(value => setLiveHospitals(value) )
        .catch(err => setLiveHospitals([]) )
    }, []);

    return (
        <div>
            {
                liveHospitals.map(live => (
                    <Button
                        color={live.color}
                        key={live.id}
                        as={Link} to={`/duty/show/${live.id}`}
                    > {live.tittle} </Button>
                ))
            } 
        </div>
    )
};

export default DutyShow;