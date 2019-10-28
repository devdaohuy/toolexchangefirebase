import React, {useState, useEffect} from 'react';
import SummaryIDModal from './DutySummaryIDModal';
import {newNumericalPersonsInNextMonth} from './services';
import {MonthOfYear2019} from './containers';
import {MonthOfYear2020} from './containers';
import {getOne} from '../../../services/api'; 
import {Divider,Dropdown, Header } from 'semantic-ui-react';
import {useParams} from 'react-router-dom';

function SummaryDutyID() {
    let {dutyID} = useParams();

    const [duties, setDuties] = useState([]); // total person in  duty to order
    const [persons, setPersons] = useState([]); // list person in dropdown
    const [personsInDuty, setPersonsInDuty] = useState([]); // list person in duty
    const [year2019] = useState(MonthOfYear2019); // month and date will be convert
    const [year2020] = useState(MonthOfYear2020); // month and date will be convert

    const createNumericalDuties = (duties, firstPerson) => {
        let newNumericalDutiesArr = newNumericalPersonsInNextMonth(duties, firstPerson);
        setPersonsInDuty([...newNumericalDutiesArr]);
    };  
    
    useEffect(() => {
        getOne('duty', dutyID)
        .then(value => {
            setDuties([...value.data]);
            let personsDropdown = value.data.map(val => ({
                key: val.name,
                text: val.name,
                value: val.name,
                image: { avatar: true, src: '/images/person.jpg' }
            }));
            setPersons([...personsDropdown]);
        })
        .catch(err => setDuties([]) )
    }, []);

    return (
        <div>
            <Divider/>
            <Dropdown
                placeholder='Select Last Person Month'
                fluid
                selection
                options={persons}
                onChange={(event,data) => createNumericalDuties(duties, data.value) }
            />
            <Divider/>
            {
                (!!personsInDuty.length) ? 
                <div>
                    <Header> Year 2019 </Header>
                    {
                        year2019.map((month,index) => (
                            <SummaryIDModal  
                                whatMonth={month}
                                personsInDuty={personsInDuty}
                                key={index}
                            />
                        ))
                    }
                    <Divider/>
                    <Header> Year 2020 </Header>
                    {
                        year2020.map((month,index) => (
                            <SummaryIDModal  
                                whatMonth={month}
                                personsInDuty={personsInDuty}
                                key={index}
                            />
                        ))
                    }
                </div>
                : 
                null
            }
        </div>
    )
};

export default SummaryDutyID;