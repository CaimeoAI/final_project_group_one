import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Classes" {...a11yProps(0)} />
          <Tab label="Resources" {...a11yProps(1)} />
          <Tab label="Quizzes" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <strong>Classes component here</strong> 
        <br />
        Contains an overvirew of all mandatory and optional classes and their respective time and date
      </TabPanel>
      <TabPanel value={value} index={1}>
        <strong>
          Resources component here
        </strong>
        <br />
        Contains all the resources available based on your module
      </TabPanel>
      <TabPanel value={value} index={2}>
        <strong>
          Quizzes component here
        </strong>
        <br />
        Contains all the quizzes available in order to test your level 
      </TabPanel>
    </Box>
  );
}