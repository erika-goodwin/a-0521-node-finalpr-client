import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface TableFunction {
  addRow: Function;
}

const ExpenseTableContainer = styled.div`
  margin-bottom: 0.7rem;
`;

const TableForm = ({ addRow }: TableFunction) => {
  const [date, setDate] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const formRef = useRef();

  const handleClick = async () => {
    try {
      console.log("handleclicked");
      const { data: tableData } = await axios.post(
        "http://localhost:8001/api/table/add",
        {
          date,
          detail,
          price,
        }
      );
      const response = tableData.data.table;
      console.log(response);

      addRow(response);

      setDate("");
      setDetail("");
      setPrice("");
    } catch (error) {
      // setErrorMsg(response.errors[0].msg);
      console.log(error);
    }
  };
  return (
    <>
      <ExpenseTableContainer>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text>Date</InputGroup.Text>
              <FormControl
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Expense Detail</InputGroup.Text>
              <FormControl
                type="text"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />
            </InputGroup>
          </Col>

          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text>Price</InputGroup.Text>
              <FormControl
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col xs={1}>
            <Button variant="outline-secondary" onClick={handleClick}>
              Submit
            </Button>
          </Col>
        </Row>
      </ExpenseTableContainer>
    </>
  );
};

export default TableForm;
