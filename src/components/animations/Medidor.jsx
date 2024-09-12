import React, { useState, useEffect } from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

// Componente para la aguja del medidor
function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) return null;

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

const mapValueToGauge = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

export default function CompositionExample({ width = 200, height = 200 }) {
  const [referenceValue, setReferenceValue] = useState(200);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setReferenceValue((prevRef) => {
        let newRefValue = prevRef + direction * 5;
        if (newRefValue >= 265 || newRefValue <= 200) {
          setDirection((prevDirection) => -prevDirection);
        }
        return newRefValue;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [direction]);

  const mappedValue = mapValueToGauge(referenceValue, 200, 265);

  return (
    <GaugeContainer
      width={width}
      height={height}
      startAngle={-110}
      endAngle={110}
      value={mappedValue}
    >
      <GaugeReferenceArc />
      <GaugeValueArc />
      <GaugePointer />
      {}
      <text x="50%" y="90%" textAnchor="middle" fontSize="16" fill="black">
        {referenceValue} / 265
      </text>
    </GaugeContainer>
  );
}
