import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = uuid();
    let uniqueId = id.slice(0, 8);

    let a = name,
      b = salary;

    Employees.push({ id: uniqueId, Name: a, Salary: b });
    history("/");
  };

  return (
    <div>
      <Form className="d-grid gap-4" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            requried
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSalary">
          <Form.Control
            type="text"
            placeholder="Enter Salary"
            requried
            onChange={(e) => setSalary(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Add;
