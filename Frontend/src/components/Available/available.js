import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import "./available.css";
// import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import CancelPresentationFilledIcon from "@mui/icons-material/CancelPresentationTwoTone";
import Button from "@mui/material/Button";
// import { blue,red } from "@mui/material/colors";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, age, prescription, bloodgroup, acceptreject) {
  return { name, age, prescription, bloodgroup, acceptreject };
}

const rows = [
  createData(
    "Fortis",
    56,
    <div>
      <Button className="upload">
        <FileUploadOutlinedIcon style={{ color: "black" }} />
      </Button>
    </div>,
    "B+",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ color: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    65,
    <div>
      <Button className="upload">
        <FileUploadOutlinedIcon style={{ color: "black" }} />
      </Button>
    </div>,
    "O-",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ color: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    80,
    <div>
      <Button className="upload">
        <FileUploadOutlinedIcon style={{ color: "black" }} />
      </Button>
    </div>,
    "AB+",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ color: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    28,
    <div>
      <Button className="upload">
        <FileUploadOutlinedIcon style={{ color: "black" }} />
      </Button>
    </div>,
    "A+",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ color: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
  createData(
    "Fortis",
    25,
    <div>
      <Button className="upload">
        <FileUploadOutlinedIcon style={{ color: "black" }} />
      </Button>
    </div>,
    "O+",
    <div>
      <Button className="accept">
        <CheckBoxRoundedIcon style={{ color: "#08E72B" }} />
      </Button>
      <Button className="reject">
        <CancelPresentationFilledIcon style={{ fill: "#B11005" }} />
      </Button>
    </div>
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Hospital Name</StyledTableCell>
            <StyledTableCell align="center">Donor Age</StyledTableCell>
            <StyledTableCell align="center">Prescription</StyledTableCell>
            <StyledTableCell align="center">Blood Group</StyledTableCell>
            <StyledTableCell align="center">Accept/Reject</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.age}</StyledTableCell>
              <StyledTableCell align="center">
                {row.prescription}
              </StyledTableCell>
              <StyledTableCell align="center">{row.bloodgroup}</StyledTableCell>
              <StyledTableCell align="center">
                {row.acceptreject}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
