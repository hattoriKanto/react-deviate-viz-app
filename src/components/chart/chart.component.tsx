import { Box, Skeleton, Typography, useTheme } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type React from "react";
import type { DeviationWithMetadata } from "../../types";

type ChartProps = {
  deviation: DeviationWithMetadata[];
  currentVesselIMONo: number | null;
  isLoading: boolean;
};

export const Chart: React.FC<ChartProps> = ({
  deviation,
  currentVesselIMONo,
  isLoading,
}) => {
  const theme = useTheme();

  const deviationValues = deviation.map((item) => Number(item.deviation));
  const dateValues = deviation.map((item) => `${item.quarter} ${item.year}`);

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

  if (deviation.length === 0) {
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
