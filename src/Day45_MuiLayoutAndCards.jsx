import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

export default function Day45_MuiLayoutAndCards() {
  const students = [
    { name: "Johnson", course: "React", bg: "#e3f2fd" },
    { name: "Sophia", course: "Full Stack Development", bg: "#f3e5f5" },
    { name: "Alexander", course: "Python & AI", bg: "#e8f5e9" },
  ];

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
        3. Layouts, Cards, Grid & Alerts
      </Typography>

      <Typography variant="h6" sx={{ mt: 1, mb: 1, color: "#111827" }}>
        Box with sx Styling:
      </Typography>
      <Box sx={{ backgroundColor: "#e0f2fe", padding: 3, borderRadius: 2, mb: 2, border: "1px solid #bae6fd" }}>
        <Typography variant="body1" fontWeight="bold" color="#0369a1">
          Student Information Container (Styled with Box and sx prop)
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#111827" }}>
        Alert Components:
      </Typography>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Alert severity="success">Student added successfully!</Alert>
        <Alert severity="error">Something went wrong.</Alert>
        <Alert severity="warning">Please check your information.</Alert>
        <Alert severity="info">Please complete the form.</Alert>
      </Stack>

      <Typography variant="h6" sx={{ mt: 2, mb: 1, color: "#111827" }}>
        Responsive Grid & Cards:
      </Typography>
      <Grid container spacing={2}>
        {students.map((student, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card sx={{ height: "100%", backgroundColor: student.bg, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h5" component="div" fontWeight="bold" color="#111827">
                  {student.name}
                </Typography>
                <Typography variant="body2" color="#4b5563" sx={{ mb: 1.5 }}>
                  Course: {student.course}
                </Typography>
                <Button variant="contained" size="small" sx={{ marginTop: 2 }}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
