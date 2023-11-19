import React from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Avatar from "@mui/material/Avatar";

import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
const baseURL = "https://dummyjson.com/users";

const UsersPage = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "image",
      headerName: "Image",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      //valueGetter: (params) =>`<img src="{${params.row.image}"/>}`,
      renderCell: (params) => {
        return (
          <>
            <Avatar src={params.value} />
            {params.image}
          </>
        );
      },
    },
    { field: "username", headerName: "Username", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "age",
      headerName: "Age",
      //type: 'number',
      width: 100,
    },
    {
      field: "firstName",
      headerName: "Full Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const [users, setUsers] = React.useState(null);
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLoading(false);
      setUsers(response.data.users);
    });
  }, []);

  if (!users) return null;
  return (
    <>
      <Navbar />
      <h1>Users</h1>
      
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      {/*
      <table style={{ display: "none" }}>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Firstname</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </table>
       */}
    </>
  );
};
export default UsersPage;
