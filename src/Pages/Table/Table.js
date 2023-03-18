import * as React from "react";

import "./Table.css";
import Table from 'react-bootstrap/Table';
import { useState } from "react";
import Orders from "../Orders/Orders";


function createData(name, trackingId, date, status,number) {
  return { name, trackingId, date, status,number };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved",1),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending",2),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved",3),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered",4),
  createData("Roubina", 18908431, "2 March 2022", "Delivered",5),
  createData("Monika", 18908428, "2 March 2022", "Delivered",6),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  
  return (
      <div className="Table Cards bg-light  ">
     
        {/* <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          m={5}
        >
          <Table sx={{ minWidth: 500 }} aria-label="simple table" >
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">Tracking ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" mb={5} className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
        <Table  hover>
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>TrackingId</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      {rows.map((row) => (  <tbody>
        <tr>
          <td>{row.number}</td>
          <td > {row.name}</td>
          <td>{row.trackingId}</td>
          <td>{row.date}</td>
          <td>{row.status}</td>
          
        </tr>
      
      </tbody>
       ))}
    </Table>
      </div>
  );
}