import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Item from "./Item";
import Search from "./Search";
import Resources from "./Resources";
import QuizCard from "./QuizCard";

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
    
    sx:{
      color: "rgba(85, 255, 111, 0.5)",
      Selected: "white",
      "&.Mui-selected": {
        color: "white",
        
      }
      
    }
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
          TabIndicatorProps={{sx: {backgroundColor: "white"}}}
          sx={{ color: "red" }}
          aria-label="basic tabs example"
          
        >
          <Tab label="Classes" {...a11yProps(0)} />
          <Tab label="Resources" {...a11yProps(1)} />
          <Tab label="Quizzes" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Search />

      {/* Classes */}
      <TabPanel value={value} index={0}>
        {<Item />}
      </TabPanel>

      {/* Resources */}
      <TabPanel value={value} index={1}>
        <strong>Resources component here</strong>
      <Resources />
        <br />
        Contains all the resources available based on your module Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nesciunt, quod
        exercitationem vitae rerum animi, voluptates incidunt quibusdam
        accusamus corporis sint consequuntur est! Id iste dolore rem molestiae
        enim alias hic dolorum distinctio aliquid obcaecati minima, eos, porro
        ab dolores, maiores quasi culpa quas doloremque eligendi consectetur
        quos harum. Fugiat ad vitae amet est tempore laborum, doloremque quasi
        quidem ipsum ipsam in non enim similique illum omnis inventore
        blanditiis accusamus porro alias ex suscipit deserunt harum aperiam.
        Officiis libero deleniti corrupti! Culpa sint, earum non explicabo
        accusamus, recusandae vitae ea enim, ut provident vel adipisci officia
        error molestiae pariatur nihil voluptatem!
        <hr />
      </TabPanel>

      
      <TabPanel value={value} index={4}>
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <strong>Quizzes component here</strong>
        <br />
        Contains all the quizzes available in order to test your level
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
          aspernatur recusandae voluptas libero ex voluptates nemo illum
          tenetur, obcaecati quidem mollitia. Animi rerum dolore quasi sit
          aliquid beatae cumque accusamus iste repellendus dolorum, quod, vel
          veritatis. Recusandae hic nemo eligendi! Iste autem repellendus esse
          hic dignissimos magnam earum aspernatur temporibus reprehenderit
          nostrum. Error doloremque vitae esse iusto labore sint! Esse explicabo
          laborum enim suscipit! Corrupti dolor inventore ipsa sit similique.{" "}
        </p>
        <button className="my-6 bg-accent-secondary text-text-primary hover:bg-hover-primary px-6 py-2">
          Start the Quizz
        </button>
      </TabPanel>
      
    </Box>
  );
}
