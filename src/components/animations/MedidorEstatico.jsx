import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // Si no hay valor, no se muestra la aguja
    return null;
  }

  const target = {
    // Calculamos las coordenadas del punto donde termina la aguja
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      {/* Círculo en el centro */}
      <circle cx={cx} cy={cy} r={5} fill="red" />
      {/* Línea para la aguja */}
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

function GaugeText({ value, valueMax, cx, cy }) {
  return (
    <text
      x={cx} // Posiciona en el centro del Gauge
      y={cy + 40} // Ajusta la posición vertical para que aparezca debajo del centro
      textAnchor="middle" // Centra el texto horizontalmente
      fill="black" // Color del texto
      fontSize={20} // Tamaño del texto
    >
      {`${value} / ${valueMax}`}
    </text>
  );
}

export default function CompositionExample() {
  const value = 254;
  const valueMax = 265;

  return (
    <GaugeContainer
      width={250} // Ajusta el tamaño si es necesario
      height={250}
      startAngle={-110}
      endAngle={110}
      value={value} // Valor de ejemplo
      valueMin={10}
      valueMax={valueMax}
    >
      <GaugeReferenceArc />
      <GaugeValueArc />
      <GaugePointer /> {/* Incluimos la aguja */}
      <GaugeText value={value} valueMax={valueMax} cx={125} cy={155} />{" "}
      {/* Agregamos el texto debajo de la aguja */}
    </GaugeContainer>
  );
}
