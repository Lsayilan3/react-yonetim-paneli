import React from "react";
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import HbarChart from "../charts/HbarChart";
import CountUp from 'react-countup';

export default function Analytics() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack direction="row" spacing={2}>
                  <Box sx={{ width: "50%" }}>
                    <Card sx={{ height: 19 + "vh" }} className="gradient">
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#f0fcfc", padding: "7px 0px" }}
                        >
                          Vistors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#f0fcfc" }}
                        >
                          <CountUp delay={0.2} end={22000} duration={0.3}/>
                        </Typography>
                        <Typography
                          variant="body"
                          color="text.secondary"
                          sx={{ color: "#ccd1d1" }}
                        >
                          since last week
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ height: 19 + "vh", marginTop: "16px" }}
                      className="gradient"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#f0fcfc", padding: "7px 0px" }}
                        >
                          Vistors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#f0fcfc" }}
                        >
                          <CountUp delay={0.4} end={32000} duration={0.6}/>
                        </Typography>
                        <Typography
                          variant="body"
                          color="text.secondary"
                          sx={{ color: "#ccd1d1" }}
                        >
                          since last week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box sx={{ width: "50%", height: "50%" }}>
                    <Card sx={{ height: 19 + "vh" }} className="gradientlight">
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#f0fcfc", padding: "7px 0px" }}
                        >
                          Vistors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#f0fcfc" }}
                        >
                          <CountUp delay={0.4} end={12000} duration={0.6}/>
                        </Typography>
                        <Typography
                          variant="body"
                          color="text.secondary"
                          sx={{ color: "#ccd1d1" }}
                        >
                          since last week
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ height: 19 + "vh", marginTop: "16px" }}
                      className="gradientlight"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#f0fcfc", padding: "7px 0px" }}
                        >
                          Vistors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "#f0fcfc" }}
                        >
                          <CountUp delay={0.2} end={22500} duration={0.3}/>
                        </Typography>
                        <Typography
                          variant="body"
                          color="text.secondary"
                          sx={{ color: "#ccd1d1" }}
                        >
                          since last week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <HbarChart/>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box height={16} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <GeoChart/>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <PieChart/>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
