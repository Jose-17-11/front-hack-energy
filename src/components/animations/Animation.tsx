import { red } from '@mui/material/colors';
import { BarChart } from '@mui/x-charts/BarChart';
import { AiOutlineBgColors } from 'react-icons/ai';
import { TbBackground } from 'react-icons/tb';

// Define una interfaz para los props
interface GridDemoProps {
  dataset: Array<{ london: number; paris: number; newYork: number; seoul: number; month: string }>;
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
export default function GridDemo({ dataset }: GridDemoProps) {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Consumo en Kwh', valueFormatter }]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
    />
  );
}
