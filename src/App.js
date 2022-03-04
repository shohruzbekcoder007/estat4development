import React from 'react';
import { observer } from "mobx-react";
import ListComp from "./components/List"

const  App = () => {
  return (
    <div>
      <ListComp/>
    </div>
  );
}

export default observer(App);
