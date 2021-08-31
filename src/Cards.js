import React from "react";
import { Card, Button, Row, Container } from "react-bootstrap";

const Cards = (props) => {
  // console.log("menudata", menudata);
  const { menudata, deleteCards } = props;

  return (
    <div>
      <Row xs={3}>
        {menudata?.map((curr, index) => {
          // console.log("curr", curr);
          const { id, title, name, price, Category, detail } = curr;

          return (
            <>
              <Container>
                <Card className="bg-danger">
                  <Card.Header>{title}</Card.Header>
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <Card.Text>{Category}</Card.Text>
                    <Card.Text>{price}</Card.Text>

                    <Card.Text>{detail}</Card.Text>
                    <Button variant="primary" onClick={() => deleteCards(id)}>
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Container>
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default Cards;
