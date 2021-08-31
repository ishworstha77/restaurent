import React from "react";
import Cards from "./Cards";
import Navbar1 from "./Navbar1";
import axios from "axios";
import DataForm from "./DataForm";
import { Row, Col } from "react-bootstrap";

const Restaurant = () => {
  const [menudata, setMenudata] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:8000/menu").then((res) => {
      setMenudata(res.data);
    });
  }, []);

  React.useEffect(() => {
    const data = {
      title: "aa",
      id: "8",
      name: "xdvsd",
      price: "dfs",
      detail: "dd",
      category: "dfs",
    };
    axios
      .post("http://localhost:8000/menu", data)
      .then((response) => setMenudata(response.data));
  }, []);

  console.log("menudata", menudata);

  const deleteCards = (id) => {
    axios.delete(`http://localhost:8000/menu/${id}`).then((res) => {
      axios.get("http://localhost:8000/menu/").then((res) => {
        setMenudata(res.data);
      });
      console.log(res.data);
    });
  };
  // setMenudata(updatedList);
  // console.log("update", updatedList);
  // localStorage.setItem("list", JSON.stringify(menudata));
  // };

  const filterData = (fastfood) => {
    const updatedData = menudata.filter((cur) => {
      return cur.Category === fastfood;
    });
    setMenudata(updatedData);
  };
  return (
    <>
      <Navbar1 filterData={filterData} />

      <Row>
        <Col>
          <DataForm />
        </Col>
        <Col>
          <Cards menudata={menudata} deleteCards={deleteCards} />
        </Col>
      </Row>
    </>
  );
};

export default Restaurant;
