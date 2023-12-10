import React from "react";
import { Layout } from "../common/_Layout";
import axios from "axios";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { DataGridCommon } from "../common/DataGridCommon";

import Skeleton from "@mui/material/Skeleton";
const baseURL = "/data/users.json";
export default function UsersPage() {
  return (
    <Layout
      body={
        <>
          <h1>Users</h1>
          <SectionTable />
        </>
      }
    />
  );
}

const SectionTable = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  React.useEffect(() => {
    axios.get(baseURL).then(
      (response) => {
        sleep(2000).then(() => {
          setData(response.data.users);
          setLoader(false);
        });
      },
      (error) => {
        setError(error);
        setLoader(false);
      }
    );
  }, []);

  return error ? (
    <h6>Error occured...</h6>
  ) : loader ? (
    <SkeletonLoader />
  ) : (
    <DataGridCommon rows={data} columns={columns} />
  );
};

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
          {/* {params.row.image} */}
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
    //type: 'number',
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "birthDate", headerName: "DOB", width: 100 },
  { field: "age", headerName: "Age", width: 100 },
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
const columns1 = [];

caller();
function caller() {
  console.log(columns);
  const renderCell = (params) => {
    return (
      <>
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ fontSize: "1rem", width: "100%" }}
        />
      </>
    );
  };
  for (var i = 0; i < columns.length; i++) {
    var obj = {};
    obj["field"] = columns[i]["field"];
    obj["headerName"] = columns[i]["headerName"];
    obj["width"] = columns[i]["width"];
    obj["renderCell"] = renderCell;
    columns1.push(obj);
  }
  console.log(columns1);
}

function SkeletonLoader() {
  const rows = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    ...Object.fromEntries(
      columns1.map((column) => {
        return [column.field, <></>];
      })
    ),
  }));
  return <DataGridCommon rows={rows} columns={columns1} />;
}
