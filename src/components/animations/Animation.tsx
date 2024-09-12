import { BarChart } from '@mui/x-charts/BarChart';

// Define una interfaz para los props
interface GridDemoProps {
  dataset: Array<{ london: number; paris: number; newYork: number; seoul: number; month: string }>;
  week: string;
}

const chartSetting = {
  xAxis: [
    {
      label: 'consumo (Kwh)',
    },
  ],
  width: 500,
  height: 250,
  margin: { top: 50, right: 20, bottom: 50, left: 100 }, // Ajusta los márgenes
};

const valueFormatter = (value: number | null) => `${value}Kwh`;

// Ahora tu componente recibe los props de acuerdo a la interfaz
export default function GridDemo({ dataset, week }: GridDemoProps) {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: `Consumo en Kwh ${week}`, valueFormatter }]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
    />
  );
}
