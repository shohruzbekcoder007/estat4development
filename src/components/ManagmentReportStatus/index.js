import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Reports from '../Reports';

export default function ManagmentReportStatus({management}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <div style={{ textAlign: 'center' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'inline-block'}} >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="ҲИСОБОТ ТОПШИРИШ" value="1" />
              <Tab label="ТОПШИРИЛГАН ҲИСОБОТЛАР" value="2" />
            </TabList>
          </Box>
        </div>
        <TabPanel value="1">
          <Reports management={management}/>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}