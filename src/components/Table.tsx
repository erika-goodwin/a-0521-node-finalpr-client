import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import TableCompo from "./TableCompo";
import TableForm from "./TableForm";
import { prependListener } from "process";

interface TableType {
  _id: string;
  date: string;
  detail: string;
  price: number;
}

const TableComponent = styled.header`
  padding: 5rem 2rem;
  //   height: 60vh;
`;

const ExpenseTableContainer = styled.div`
  background-color: #dbeac2;
  margin-bottom: 1rem;
`;
export const Table = () => {
  const [tablesData, setTablesData] = useState<TableType[]>([]);

  const addRow = (table: TableType) => {
    setTablesData((tablesData) => [...tablesData, table]);
  };

  const deleteRow = (clickedId: string) => {
    const newTablesData = tablesData.filter((item) => item._id !== clickedId);
    setTablesData(newTablesData);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_API}/api/table`)
      .then((res) => res.json())
      .then((res) => setTablesData(res))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <>
      <TableComponent>
        <TableForm addRow={addRow} />
        <ExpenseTableContainer>
          <Row>
            <Col>Date</Col>
            <Col xs={6}>Expense detail</Col>

            <Col>Price</Col>
            <Col xs={1}></Col>
            <Col xs={1}></Col>
          </Row>
        </ExpenseTableContainer>
        {tablesData != null &&
          tablesData.map((table: any) => {
            return (
              <TableCompo key={table._id} data={table} deleteRow={deleteRow} />
            );
          })}
      </TableComponent>
    </>
  );
};
