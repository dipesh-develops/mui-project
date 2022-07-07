import { Feeds } from "./components/Feeds";
import { Navbar } from "./components/Navbar";
import {Rightbar} from "./components/Rightbar";
import {Sidebar} from "./components/Sidebar"
import {Box,Container,Stack} from "@mui/material"


function App() {
  // custom MUI component
  
  return (
    <Box >
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feeds/>
        <Rightbar/>
      </Stack>
     
    </Box>
  );
}

export default App;
