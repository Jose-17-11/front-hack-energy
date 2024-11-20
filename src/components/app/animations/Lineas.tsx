import { LineChart } from "@mui/x-charts/LineChart";

export default function DifferentLength() {
  const legendItems = [
    { color: "#FF5733", label: "Semana 1" },
    { color: "#8a2be2", label: "Semana 2" },
    { color: "#008080", label: "Semana 3" },
    { color: "#0000FF", label: "Semana 4" },
  ];

  return (
    <div className="flex flex-col items-center">
      <LineChart
        xAxis={[
          {
            data: [1, 2, 3, 4, 5, 6, 7],
            label: "Días de la semana",
            labelStyle: { fontSize: 14 },
          },
        ]}
        yAxis={[
          {
            data: [0, 20, 40, 60, 80, 100],
            label: "Potencia (KW)",
            labelStyle: { fontSize: 14 },
          },
        ]}
        series={[
          {
            data: [30, 45, 50, 55, 60, 50, 40], // Semana 1
            color: "#FF5733",
          },
          {
            data: [35, 50, 70, 60, 80, 75, 55], // Semana 2 (evento)
            color: "#8a2be2",
          },
          {
            data: [25, 40, 35, 30, 45, 40, 30], // Semana 3 (menos actividad)
            color: "#008080",
          },
          {
            data: [40, 60, 65, 70, 85, 80, 60], // Semana 4 (uso especial)
            color: "#0000FF",
          },
        ]}
        height={300}
        margin={{ top: 20, bottom: 60 }}
      />

      <div className="flex flex-wrap justify-center mt-6">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center mx-4">
            <div
              className="w-2 h-2"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="ml-2">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
