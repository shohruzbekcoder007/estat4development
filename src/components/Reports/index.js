import * as React from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import axios from './../../baseUrl';
import { globalState } from '../../globalState';

export default function Reports({management}) {

  const [reports, setReports] = React.useState([])

  const getReports = () => {
      axios.get(`/formtype/active?management_id=${management}`,{
          headers: {
            'x-auth-token': globalState.token
          }
        }
      ).then((res) => {
          setReports(res.data);
        })
        .catch((error) => {
            console.error(error);
        })
  };

  React.useEffect(() => {
    getReports();
  },[management]);

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">T/R</TableCell>
            <TableCell>Ҳисобот номи</TableCell>
            <TableCell align="right">Ҳисобот даври</TableCell>
            <TableCell align="right">Ҳисобот топшириш вақти</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell component="th" scope="row">
                {row.report_type_id.title}
              </TableCell>
              <TableCell align="right">{row.period_id.title_ru}</TableCell>
              <TableCell align="right">{row.report_type_id.deadline_ru}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
