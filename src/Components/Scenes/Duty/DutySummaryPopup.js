import React from 'react';
import ListTablePerson from './DutyListTablePerson';
import { Button, Popup, Table } from 'semantic-ui-react'
 
const SummaryPopup = (props) => (
  <Popup content={<Table>
      <ListTablePerson
        persons={props.duties}
      />
  </Table>} trigger={<Button icon='bity' />} />
);

export default SummaryPopup