import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function Day45_MuiFormElements() {
  const [course, setCourse] = useState("react");
  const [agreed, setAgreed] = useState(false);

  return (
    <Box
      sx={{
        padding: 3,
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        mb: 3,
        backgroundColor: "#ffffff",
        color: "#111827",
        textAlign: "left",
      }}
    >
      <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
        2. Form Elements (TextField, Select, Checkbox)
      </Typography>

      <Typography variant="h6" sx={{ mt: 1, mb: 1, color: "#111827" }}>
        TextField Variants:
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
        <TextField label="Student Name" variant="outlined" fullWidth />
        <TextField label="Student Name" variant="filled" fullWidth />
        <TextField label="Student Name" variant="standard" fullWidth />
      </Stack>

      <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#111827" }}>
        Input Types & Required Field:
      </Typography>
      <Stack spacing={2} sx={{ mb: 2 }}>
        <TextField label="Student Name" required fullWidth />
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Password" type="password" fullWidth />
        <TextField label="Age" type="number" fullWidth />
      </Stack>

      <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#111827" }}>
        Select Dropdown & Checkbox:
      </Typography>
      <Stack spacing={2} direction={{ xs: "column", sm: "row" }} alignItems="center">
        <FormControl fullWidth>
          <InputLabel id="course-select-label">Course</InputLabel>
          <Select
            labelId="course-select-label"
            label="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <MenuItem value="dotnet">.NET</MenuItem>
            <MenuItem value="react">React</MenuItem>
            <MenuItem value="python">Python</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
          }
          label="I agree to the terms"
          sx={{ color: "#111827", minWidth: 200 }}
        />
      </Stack>
    </Box>
  );
}
