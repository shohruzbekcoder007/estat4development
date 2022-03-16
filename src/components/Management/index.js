import React from 'react'
import { useLocation } from 'react-router-dom'
import ManagmentReportStatus from '../ManagmentReportStatus';

export default function Managment() {
    const location = useLocation();
    const { state } = location;
  return (
    <div>
        {state.management.name_uz} {state.management._id}
        <ManagmentReportStatus management={state.management._id}/>
    </div>
  )
}
