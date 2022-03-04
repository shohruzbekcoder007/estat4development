import React, { useState, useEffect } from 'react'
import { List, ListItem } from './styles-list'
import { observer } from "mobx-react";
import config from './../../config/config.json';
import names from './local-list.json';
import { globalState as gls, setLanguage } from './../../globalState';

const ListComp = () => {

    const [name, setName] = useState(names[gls.language]);

    useEffect(()=>{
        setName(names[gls.language])
    },[gls.language])

    return (
        <div>
            <List>
                {
                    config.language.map(elem => {
                        return <ListItem
                                key={elem.name}
                                onClick={() => {
                                    setLanguage(elem.abbreviation)
                                }}
                            >
                                {elem.name}
                            </ListItem>
                    })
                }
            </List>
            <List>
                <ListItem>{name.list1}</ListItem>
                <ListItem>{name.list1}</ListItem>
                <ListItem>{name.list1}</ListItem>
                <ListItem>{name.list1}</ListItem>
                <ListItem>{name.list1}</ListItem>
            </List>
        </div>
    )
}

export default observer(ListComp);