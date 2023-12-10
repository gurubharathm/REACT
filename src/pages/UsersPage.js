import React from "react";
import { Layout } from "../common/_Layout";
import axios from "axios";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { DataGridCommon } from "../common/DataGridCommon";

import Skeleton from "@mui/material/Skeleton";
const baseURL = "https://api.omniguru.in/query";
const body = "SELECT *,U.Id from User U left join UserData UD on U.Id = UD.UserId left join UserAddress UA ON U.Id = UA.UserId";
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
    axios.post(baseURL, body).then(
      (response) => {
  
          console.log(response.data.dats);
          setData(response.data.data);
          setLoader(false);
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
  { field: "Id", headerName: "ID", width: 70 },
  {
    field: "Picture",
    headerName: "DP",
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
  { field: "Username", headerName: "Username" },
  {
    field: "firstName",
    headerName: "Full Name",
    valueGetter: (params) =>
      `${params.row.FirstName || ""} ${params.row.LastName || ""}`,
  },
  { field: "Gender", headerName: "Gender"},
  { field: "Email", headerName: "Email" },
  // { field: "birthDate", headerName: "DOB", width: 100 },
  // { field: "age", headerName: "Age", width: 100 },
 { field: "Mobile", headerName: "Mobile"},
  {
    field: "address",
    headerName: "Address",
    valueGetter: (params) => `${params.row.AddressLine1 || ""}, ${params.row.AddressLine2 || ""}`,
  },
  { field: "Landmark", headerName: "Landmark" },
  { field: "Location", headerName: "Location" },
  { field: "City", headerName: "City" },
  { field: "PinCode", headerName: "PinCode" },
  { field: "State", headerName: "State"},
  { field: "Country", headerName: "Country"},

  // { field: "ip", headerName: "IP", width: 150 },
  // {
  //   field: "address",
  //   headerName: "Address",
  //   width: 200,
      //sortable: false,
    //type: 'number',
    
   // description: "This column has a value getter and is not sortable.",
  //   valueGetter: (params) => `${params.row.address.address || ""}`,
  // },
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
   // obj["headerName"] = columns[i]["headerName"];
    obj["width"] = columns[i]["width"];
    //obj["renderCell"] = renderCell;
    columns1.push(obj);
  }
  console.log(columns1);
}

function SkeletonLoader() {
  const rows = Array.from({ length: 1 }, (_, index) => ({
    id: index,
    ...Object.fromEntries(
      columns1.map((column) => {
        return [column.field, <></>];
      })
    ),
  }));
  return <DataGridCommon rows={rows} columns={columns1} />;
}
