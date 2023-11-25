import React from "react";
//import Navbar from "../components/navbar";
import {Box} from "@mui/material";
import ToolbarComponent from "../components/toolbar";
import DrawerComponent from "../components/drawer";


export function Layout(props) {
  const { body } = props;
  return (
    <Box className="bg-gray" style={{ display: "grid", gridTemplateRows: "auto 1fr" }}>
      <Navbar />
      <section className="body" style={{ padding: 20}}>{body}</section>
    </Box>
  );
}




class Navbar extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = () => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    this.setState({
      left: false,
    });
  };

  openDrawer = () => {
    this.setState({
      left: true,
    });
  };

  render() {
    return (
      <div className="App">
        <ToolbarComponent openDrawerHandler={this.openDrawer} />
        <DrawerComponent
          left={this.state.left}
          toggleDrawerHandler={this.toggleDrawer}
        />
      </div>
    );
  }
}
export default Navbar;
