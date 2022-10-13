import { Button, Card, CardContent, Container, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import Link from "next/link";

export default function Index() {

  return <>
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Todo List
          </Typography>
          <Link href="/create">
            <Button color="primary" variant="contained">Add Todo</Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  </>
}