import React from "react";
import Cards from "./Cards";
import Navbar1 from "./Navbar1";
import axios from "axios";
import DataForm from "./DataForm";
import { Row, Col } from "react-bootstrap";

const Restaurant = () => {
  const [menudata, setMenudata] = React.useState();
  console.log("menudata", menudata);

  React.useEffect(() => {
    axios.get("http://localhost:8000/menu").then((res) => {
      setMenudata(res.data);
    });
  }, []);

  // put
  // post
  // get
  // delete

  console.log("menudata", menudata);

  const deleteCards = (id) => {
    axios.delete(`http://localhost:8000/menu/${id}`).then((res) => {
      axios.get("http://localhost:8000/menu/").then((res) => {
        setMenudata(res.data);
      });
      console.log(res.data);
    });
  };

  const filterData = (Category) => {
    axios
      .get("http://localhost:8000/menu/", {
        params: {
          Category: "fastfood",
        },
      })
      .then((res) => {
        setMenudata(res.data);
      });
    // const updatedData = menudata.filter((cur) => {
    //   return cur.Category === fastfood;
    // });
    // setMenudata(updatedData);
  };
  return (
    <>
      <Navbar1 filterData={filterData} />

      <Row>
        <Col>
          <DataForm setMenudata={setMenudata} />
        </Col>
        <Col>
          <Cards menudata={menudata} deleteCards={deleteCards} />
        </Col>
      </Row>
    </>
  );
};

export default Restaurant;
