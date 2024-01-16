import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import HomePage from "./pages/HomePage";
import "./index.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F8EDFF",
      light: "#e1d5e8",
      dark: "#e1d5e8",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <div className="test">Dashboard</div>,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
