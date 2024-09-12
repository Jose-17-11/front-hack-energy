import { red } from '@mui/material/colors';
import { BarChart } from '@mui/x-charts/BarChart';
import { AiOutlineBgColors } from 'react-icons/ai';
import { TbBackground } from 'react-icons/tb';

export const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 201,
    month: 'Enero',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 180,
    month: 'Febrero',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 110,
    month: 'Marzo',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Abril',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'Mayo',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'Junio',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'Julio',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Agosto',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Septiembre',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Octubre',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Noviembre',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Diciembre',
  },
];

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

export default function GridDemo() {
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