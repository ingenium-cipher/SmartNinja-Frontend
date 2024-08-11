import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const pages = ["Problems", "Profile"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff" }} elevation={1}>
      <Container maxWidth="xl" sx={{ p: "0!important" }}>
        <Toolbar sx={{ px: "0!important", minHeight: "48px!important" }}>
          <Grid container spacing={2} alignItems="center" width="100%">
            <Grid xs={1}></Grid>

            <Grid
              xs={8}
              display="flex"
              flexDirection="row"
              alignItems="center"
              color="primary.text"
            >
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  // letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                SmartNinja
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    variant="text"
                    onClick={() => console.log("Clicked")}
                    sx={{ color: "#1e1e1e", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Grid>

            <Grid
              xs={2.5}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="end"
            >
              <Box sx={{ flexGrow: 0 }}>
                <IconButton
                  onClick={handleOpenUserMenu}
                  size="small"
                  sx={{ p: 0 }}
                >
                  <Avatar
                    alt="Chirag"
                    src="/static/images/avatar/2.jpg"
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: "primary.main",
                      fontSize: "16px",
                    }}
                  />
                </IconButton>
                <Menu
                  sx={{ mt: "32px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Grid>

            <Grid xs={0.5} />
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
