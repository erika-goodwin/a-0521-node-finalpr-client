import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import { RiDeleteBinFill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";

interface TableCompoProps {
  data: any;
  deleteRow: Function;
}

const ExpenseTableContainer = styled.div`
  background-color: #FDD2B5;
  margin-bottom: 0.7rem;
`;

const TableCompo = ({ data, deleteRow }: TableCompoProps) => {
  const handleDelete = () => {
    const clickedId = data._id;
    console.log("handleDelete clicked/ id: ", clickedId);
    fetch(`${process.env.REACT_APP_SERVER_API}/api/table/${data._id}`, { method: "DELETE" })
      .then()
      .catch((err: any) => console.log(err));

    deleteRow(clickedId);
  };
  return (
    <>
      <ExpenseTableContainer>
        <Row>
          <Col>{data.date}</Col>
          <Col xs={6}>{data.detail}</Col>
          <Col>${data.price}</Col>
          <Col xs={1}>
            <Button variant="light">
              <AiFillEdit />
            </Button>
          </Col>
          <Col xs={1}>
            <Button variant="light">
              <RiDeleteBinFill onClick={() => handleDelete()} />
            </Button>
          </Col>
        </Row>
      </ExpenseTableContainer>
    </>
  );
};

export default TableCompo;
