import React from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
const baseURL = "/data/users.json";

const UsersPage = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "image",
      headerName: "Image",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 80,
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
    {
      field: "firstName",
      headerName: "Full Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    { field: "birthDate", headerName: "DOB", width: 100 },
    {
      field: "age",
      headerName: "Age",
      //type: 'number',
      width: 100,
    },    
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "ip", headerName: "IP", width: 150 },
    { field: "address", headerName: "Address", width:200,
    valueGetter: (params) =>
        `${params.row.address.address || ""}`,
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
      <section className="body">
        <h1>Users</h1>

        <DataGrid
          className="bg-box"
          rows={users}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          checkboxSelection
        />
      </section>

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
