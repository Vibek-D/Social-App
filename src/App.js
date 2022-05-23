import makeTheme from "./theme";
import Box from "@mui/material/Box";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ThemeProvider } from "@mui/material";
import Dashboard from "./components/Dashboard";
import { StyledEngineProvider } from "@mui/material";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={makeTheme()}>
          <BrowserRouter>
            <Box
              flex={1}
              width="100%"
              height="100%"
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ background: "cadetblue" }}
            >
              <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route element={<ProtectedRoute />}>
                  <Route path="/dashboard" element={<Dashboard />}></Route>
                </Route>
              </Routes>
            </Box>
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
