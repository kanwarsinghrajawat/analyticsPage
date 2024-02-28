import { useEffect, useRef } from "react";
import Chart, { ChartTypeRegistry } from "chart.js/auto";
import { months } from "../utils";

interface ChartGraphProps {
  types?: keyof ChartTypeRegistry;
  datasets?: any[];
}

const ChartGraph = ({ types, datasets }: ChartGraphProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"line" | "bar" | "pie" | any> | null>(
    null
  );

  useEffect(() => {
    if (!types || !chartRef.current || !datasets) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: types,
        data: {
          labels: months,
          datasets: datasets,
        },
        options: {
          aspectRatio: 1,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "white",
              },
            },
            x: {
              ticks: {
                color: "white",
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [types, datasets]);

  return (
    <div className="w-[30%] bg-[rgb(48,55,68)] shadow-xl p-6 rounded-md max-xl:w-[40%] max-md:w-[70%] max-sm:w-[90%]">
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartGraph;
