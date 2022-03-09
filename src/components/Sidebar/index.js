import React from 'react';
import axios from "../../baseUrl";
import { observer } from "mobx-react";
import { globalState } from "../../globalState";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';


function Sidebar(props) {

    const [management, setManagement] = React.useState([])

    const getManagement = () => {
        axios.get(`/management`, {
            headers: {
              'x-auth-token': globalState.token
            }})
            .then((res) => {
                setManagement(res.data);
            })
            .catch((error) => {
                console.error(error);
            })
    };

    React.useEffect(() => {
        getManagement();
      },[]);

  return (
    <>
        <List>
            {management.map((element,index) => (
                <ListItem button key={element._id}>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={element["name_" + globalState.language]} />
                </ListItem>
            ))}
        </List>
    </>
    // </Divider>
  );
}


export default observer(Sidebar);
