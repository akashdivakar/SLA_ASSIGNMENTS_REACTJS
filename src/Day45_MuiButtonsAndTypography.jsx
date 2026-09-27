import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

export default function Day45_MuiButtonsAndTypography() {
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
        1. Typography & Buttons
      </Typography>

      <Typography variant="h4" sx={{ color: "#111827" }}>
        H4 Heading: Student Management
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#4b5563" }} gutterBottom>
        Subtitle: Manage student information efficiently with MUI components.
      </Typography>
      <Typography variant="body1" sx={{ color: "#374151" }} paragraph>
        Body1: MUI (Material UI) provides ready-made components customized using props and the sx styling system.
      </Typography>

      <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#111827" }}>
        Button Variants & Colors:
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
      </Stack>

      <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#111827" }}>
        Button Sizes & Icons:
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        <Button variant="contained" size="small" startIcon={<AddIcon />}>
          Small Add
        </Button>
        <Button variant="contained" size="medium" startIcon={<EditIcon />}>
          Medium Edit
        </Button>
        <Button variant="contained" size="large" color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="outlined" startIcon={<HomeIcon />}>
          Home
        </Button>
      </Stack>
    </Box>
  );
}
