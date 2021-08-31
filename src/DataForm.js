import axios from "axios";
import React from "react";
import { Col, Row, Form, Container, Button } from "react-bootstrap";

const DataForm = (props) => {
  const initialData = {
    title: "",
    name: "",
    Category: "",
    price: "",
    detail: "",
    id: "",
  };
  const { setMenudata } = props;
  const [FormData, setFormData] = React.useState(initialData);

  const submitting = (e) => {
    e.preventDefault();
    if (
      !FormData.title ||
      !FormData.name ||
      !FormData.Category ||
      !FormData.detail ||
      !FormData.price
    ) {
    } else {
      axios.post("http://localhost:8000/menu", FormData).then((res) => {
        axios.get("http://localhost:8000/menu").then((res) => {
          setMenudata(res.data);
        });
      });
      setFormData(initialData);
    }

    console.log(FormData);
  };

  const handle = (e) => {
    const { name, value } = e.target;
    const previousItems = FormData;
    const newItems = { ...previousItems, [name]: value };
    setFormData(newItems);
  };
  return (
    <>
      <Container>
        <Form onSubmit={submitting}>
          <Row>
            <Col>
              <Col xs={12}>
                <Form.Group className="mb-3" controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    autoComplete="off"
                    onChange={handle}
                    value={FormData.title}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    autoComplete="off"
                    onChange={handle}
                    value={FormData.name}
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group className="mb-3" controlId="formAmount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Amount"
                    name="price"
                    onChange={handle}
                    value={FormData.price}
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group className="mb-3" controlId="formAmount">
                  <Form.Label>select Category</Form.Label>

                  <select
                    placeholder="select category"
                    name="Category"
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    onChange={handle}
                    value={FormData.Category}
                  >
                    <option selected></option>
                    <option value="fastfood">Fastfood</option>
                    <option value="food">Food</option>
                    <option value="lunch">Lunch</option>
                    <option value="drink">Drink</option>
                  </select>
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group className="mb-3" controlId="formAmount">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Details</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Write your message here"
                      name="detail"
                      onChange={handle}
                      value={FormData.detail}
                    />
                  </Form.Group>
                </Form.Group>
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default DataForm;
