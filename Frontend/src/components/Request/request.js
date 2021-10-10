import React from "react";
import { getCurrentUser } from "../../utils/auth";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import "./request.css";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
const RequestPage = () => {
  const { name } = getCurrentUser();

  return (
    <div class="container">
      <div class="request form">
        <h2>Request an Organ</h2>
        <h3>Donor details</h3>

        <FormControl action="no action.php" id="Donate">
          <div class="form-group">
            <TextField
              id="donor-name"
              className="full-width"
              label="Donor Name"
              variant="filled"
            />
          </div>
          <div class="form-group flex ">
            <TextField id="donor-age" label="Donor Age" variant="filled" />
            <TextField id="blood-group" label="Blood Group" variant="filled" />
          </div>
          <div class="form-group ">
            {/* <InputLabel  id="organ-select">Select an organ</InputLabel> */}
            <Select
              labelId="organ-select"
              id="organs"
              className="full-width"
              variant="filled"
            >
              <MenuItem value="kidney">Kidney</MenuItem>
              <MenuItem value="liver">Liver</MenuItem>
              <MenuItem value="heart">Heart</MenuItem>
              <MenuItem value="eyes">Eyes</MenuItem>
            </Select>
          </div>
          <div class="form-group">
            <TextField
              className="full-width"
              id="condition"
              label="Condition of organ"
              variant="filled"
            />
          </div>
          <div class="form-group">
            <Button variant="outlined" component="span" startIcon={<FileUploadOutlinedIcon />}>
              Upload Prescription
            </Button>
          </div>
          <div class="form-group">
            <Button variant="filled" component="span">
              Next
            </Button>
          </div>
          {/* <button class="btn">Next</button> */}
        </FormControl>
      </div>
    </div>
  );
};
export default RequestPage;
