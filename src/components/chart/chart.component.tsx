import { Box, Skeleton, Typography, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useVesselsStore } from "../../stores";
import { calculateDeviationForVessel } from "../../api";

export const Chart = () => {
  const theme = useTheme();
  const { currentVesselIMONo } = useVesselsStore();
  const { data = [], isLoading } = useQuery({
    queryFn: async () => {
      if (!currentVesselIMONo) {
        return [];
      }
      return await calculateDeviationForVessel(currentVesselIMONo);
    },
    queryKey: ["deviation", currentVesselIMONo],
  });
  const deviationValues = data.map((item) => Number(item.deviation));
  const dateValues = data.map((item) => `${item.quarter} ${item.year}`);

  const options = {
    title: {
      text: "Deviation by Quarter",
    },
    plotOptions: {
      line: {
        lineColor: theme.palette.secondary.main,
        marker: {
          enabled: true,
          radius: 4,
          fillColor: theme.palette.secondary.main,
        },
      },
    },
    xAxis: {
      categories: dateValues,
      title: {
        text: "Quarter",
      },
    },
    yAxis: {
      min: Math.min(...deviationValues),
      max: Math.max(...deviationValues),
      title: {
        text: "Deviation",
      },
    },
    series: [
      {
        name: "Deviation, %",
        data: deviationValues,
      },
    ],
  };

  if (!currentVesselIMONo || isLoading) {
    return (
      <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </Box>
    );
  }

  if (data.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Typography variant="body1">No data found</Typography>
      </Box>
    );
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
