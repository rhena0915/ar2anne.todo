import { Button, Card, CardActions, CardContent, Container, Link, Stack, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

function Create() {
    const router = useRouter();
    const [description,setDescription] = useState("");
    const [date,setDate] = useState(new Date());

    const create = async ()=> {
        await axios.post("/api/create-todo",{
            description,
            date
        });
        router.push("/");
    }
    return <>
        <Container>
            <Card>
                <CardContent>
                    <Typography variant="h4">Create todo</Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={5}
                        onChange={(e)=> setDescription(e.target.value)}
                        value={description}
                        label="Input your todo"
                        margin="normal" />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                            label="For mobile"
                            onChange={(e)=> setDate(e ?? new Date())}
                            value={date}
                            renderInput={(params) => <TextField margin="normal" fullWidth {...params} />}
                        />
                    </LocalizationProvider>
                </CardContent>

                <CardActions>
                    <Button 
                        onClick={create}
                        variant="contained"
                        color="secondary"
                        sx={{ color: "white" }}>Save</Button>
                    <Link href="/">
                        <Button>Cancel</Button>
                    </Link>
                </CardActions>
            </Card>
        </Container>
    </>;
}

export default Create;