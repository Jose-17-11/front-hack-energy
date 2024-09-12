import { LineChart } from "@mui/x-charts/LineChart";

export default function DifferentLength() {
  const legendItems = [
    { color: "#FF5733", label: "Refrigerador" },
    { color: "#8a2be2", label: "Monitor MSI" },
    { color: "#008080", label: "Proyector" },
  ];

  return (
    <div className="flex flex-col items-center">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
        yAxis={[{ data: [0, 5, 10, 15] }]} // Ajustado para acomodar el rango de valores
        series={[
          {
            data: [0, 5, 10, 5, 0, 10, 0, 15, 3, 0],
            valueFormatter: (value) =>
              value == null ? "NaN" : value.toString(),
            color: "#FF5733",
          },
          {
            data: [0, 15, 0, 15, 0, 10, 15, 0, 10, 0],
            color: "#8a2be2",
          },
          {
            data: [0, 10, 15, 0, 6, 5, 15, 10, 3, 0],
            valueFormatter: (value) => (value == null ? "?" : value.toString()),
            color: "#008080",
          },
        ]}
        height={300}
        margin={{ top: 20, bottom: 30 }}
      />

      <div className="flex flex-wrap justify-center mt-4">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center mx-4">
            <div
              className="w-6 h-6"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="ml-2">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
