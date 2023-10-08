import { Button, Card, Divider } from "antd";
import { useContext } from "react";
import { AuthDispatchContext } from "../data/context";

const HomePage = () => {
  return (
    <div>
      <Divider orientation="left" plain>
        Form list
      </Divider>
      <div>
        <Card style={{ width: 150, height: 150 }}></Card>
      </div>
      <Divider orientation="left" plain>
        Report list
      </Divider>
      <div></div>
    </div>
  );
};

export default HomePage;
