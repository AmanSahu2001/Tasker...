import { Container, Button, Stack, TextField, Typography } from "@mui/material";
import LogoImg from "../assets/logo.png";
import ImageEI from "../components/utils/ImageEI";

const HomePage = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 13 }}>
      <form noValidate>
        <Stack
          spacing={2}
          textAlign={"center"}
          sx={{ width: "-webkit-fill-available" }}
        >
          <ImageEI src={LogoImg} alt="Tasker..." sx={{ ms: 5 }} />
          <br />
          <TextField id="email" name="email" label="Email" variant="outlined" />
          <TextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
          />
          <br />
          <Button type={"submit"} variant="contained">
            Login
          </Button>
          ,
          <Typography sx={{ cursor: "pointer" }} color={"white"}>
            Do not have an account?
          </Typography>
        </Stack>
      </form>
    </Container>
  );
};

export default HomePage;
