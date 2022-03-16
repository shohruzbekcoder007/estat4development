import React from 'react';
import axios from "../../baseUrl";
import { observer } from "mobx-react";
import { globalState } from "../../globalState";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {
    Link
  } from "react-router-dom";

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
                <Link
                    to={`/management`} 
                    state={{ management: element }}
                    style={{
                        color: "inherit",
                    }}
                    key={element._id}
                >
                    <ListItem button>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                            <ListItemText primary={element["name_" + globalState.language]} />
                    </ListItem>
                </Link>
            ))}
        </List>
    </>
    // </Divider>
  );
}


export default observer(Sidebar);
