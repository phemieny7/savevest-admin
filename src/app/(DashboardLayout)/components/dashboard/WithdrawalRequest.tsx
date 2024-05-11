import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Stack, Typography, Avatar, Fab } from "@mui/material";
import { IconArrowDownRight, IconBuildingBank } from "@tabler/icons-react";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

const WithdrawalRequest = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const errorlight = "#fdede8";

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: [primary],
      type: "solid",
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
    },
  };
  const seriescolumnchart: any = [
    {
      name: "",
      color: primary,
      data: [15, 66, 20, 30, 10, 28, 30],
    },
  ];

  return (
    <DashboardCard
      title="Withdrawal Requests"
      action={
        <Fab color="primary" size="medium" sx={{ color: "#ffffff" }}>
          <IconBuildingBank width={24} />
        </Fab>
      }
      footer={
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type="area"
          width={"100%"}
          height="55px"
        />
      }
    >
      <>
        <Typography variant="h3" fontWeight="700" mt="-20px">
          554 this week
        </Typography>
        <Stack direction="row" spacing={1} my={1} alignItems="center">
          <Avatar sx={{ bgcolor: errorlight, width: 21, height: 21 }}>
            <IconArrowDownRight width={18} color="#FA896B" />
          </Avatar>
          <Typography variant="subtitle2" fontWeight="600">
            +9%
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            last week
          </Typography>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default WithdrawalRequest;