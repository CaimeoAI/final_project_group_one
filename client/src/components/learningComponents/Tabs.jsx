import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Item from "./Item";
import Search from "./Search";
import Resources from "./Resources";
import Quizzes from "./Quizzes";

/* import { fontSize, margin } from "@mui/system"; */

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
    id: `simple-tab-${6}`,
    "aria-controls": `simple-tabpanel-${index}`,
    style: {
      fontSize: "1,5rem",
      fontWeight: "lighter",
    },

    sx: {
      color: "rgba(85, 255, 111, 0.5)",
      Selected: "white",
      "&.Mui-selected": {
        color: "white",
      },
    },
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    /* Main Page */

    <Box className="w-full h-full bg-primary">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ sx: { backgroundColor: "white" } }}
          sx={{ color: "red" }}
          aria-label="basic tabs example"
        >
          <Tab label="Classes" {...a11yProps(0)} />
          <Tab label="Resources" {...a11yProps(1)} />
          <Tab label="Quizzes & Challenges" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Search />

      {/* Classes */}
      <TabPanel value={value} index={0}>
        {<Item />}
      </TabPanel>

      {/* Resources */}
      <TabPanel value={value} index={1}>
        <strong className="text-xl">Resource Components</strong>
        <hr className="w-[50%] my-4"/>
        <h2 className="my-4">Contains all the resources available based on your module, helping you to understand difficult topics or directing you to your next topic you might wanna learn!</h2>
        <Resources />
        
        
      </TabPanel>

      <TabPanel value={value} index={4}></TabPanel>

      <TabPanel value={value} index={2}>
        <strong className="text-xl">Your Challenges</strong>
        <hr className="w-[50%] my-4"/>
        <h2 className="my-4">Contains all the quizzes available in order to test your level</h2>
        <Quizzes />
      </TabPanel>
    </Box>
  );
}
