import { Layout } from "../common/_Layout";
import Paper from "@mui/material/Paper";
import React from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { DataGridCommon } from "../common/DataGridCommon";
const baseURL = "/data/users.json";

const UsersPage = () => {
  const [error, setError] = useState(null);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
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
    {
      field: "address",
      headerName: "Address",
      width: 200,
      valueGetter: (params) => `${params.row.address.address || ""}`,
    },
  ];

  const [users, setUsers] = React.useState(null);
  const [loaded, setLoaded] = useState(false);
  React.useEffect(() => {
    axios.get(baseURL).then(
      (response) => {
        setLoaded(true);
        setUsers(response.data.users);
      },
      (error) => {
        setLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (!users) return null;
  return (
    <Layout
      body={
        error ? (
          <h1>Error occured...</h1>
        ) : loaded ? (
          <>
            <h1>Users</h1>
            <DataGridCommon rows={users} columns={columns} />
          </>
        ) : (
          <SkeletonLoader />
        )
      }
    />
  );
};
export default UsersPage;

function SkeletonLoader() {
  const columns = Array.from({ length: 9 }, (_, index) => ({
    field: `column${index + 1}`,
    headerName: ``,
    width: 200,
  }));

  const rows = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    ...Object.fromEntries(
      columns.map((column) => {
        return [column.field, ""];
      })
    ),
  }));
}
