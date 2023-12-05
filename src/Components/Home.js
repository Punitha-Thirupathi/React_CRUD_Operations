import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, salary) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Salary", salary);
    localStorage.setItem("Id", id);
  };

  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
    history("/");
  };
  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Salary}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button
                            variant="warning"
                            onClick={() =>
                              handleEdit(item.id, item.Name, item.Salary)
                            }
                          >
                            EDIT
                          </Button>
                        </Link>
                        &nbsp;
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2" to={"/create"}>
          <Button size="lg">CREATE</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
