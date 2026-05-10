import { useState } from "react";

function parsePoly(coords) {
  const nums = coords.split(",").map(Number);
  const pts = [];
  for (let i = 0; i < nums.length; i += 2)
    pts.push(`${nums[i]},${nums[i + 1]}`);
  return pts.join(" ");
}

function parseRect(coords) {
  const [x1, y1, x2, y2] = coords.split(",").map(Number);
  return { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
}

function centroid(shape, coords) {
  const nums = coords.split(",").map(Number);
  if (shape === "rect") {
    return { x: (nums[0] + nums[2]) / 2, y: (nums[1] + nums[3]) / 2 };
  }
  let sx = 0,
    sy = 0;
  for (let i = 0; i < nums.length; i += 2) {
    sx += nums[i];
    sy += nums[i + 1];
  }
  return { x: sx / (nums.length / 2), y: sy / (nums.length / 2) };
}

export default function ImageMap({
  src,
  naturalWidth,
  naturalHeight,
  areas,
  activeId,
  onAreaClick,
}) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <svg
      viewBox={`0 0 ${naturalWidth} ${naturalHeight}`}
      className="w-full h-auto block rounded"
    >
      <image href={src} width={naturalWidth} height={naturalHeight} />
      {areas.map((area) => {
        const isActive = area.id === activeId;
        const isHovered = area.id === hoveredId && !isActive;
        const c = centroid(area.shape, area.coords);

        // const num = area.label.replace(/\bSpawn\s*/i, "");

        const fill = isActive
          ? "rgba(255,165,0,0.45)"
          : isHovered
            ? "rgba(255,255,255,0.3)"
            : "rgba(255,255,255,0.15)";
        const stroke = isActive ? "rgb(255,165,0)" : "rgba(255,255,255,0.8)";

        return (
          <g
            key={area.id}
            onClick={() => onAreaClick(area.id)}
            onMouseEnter={() => setHoveredId(area.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{ cursor: "pointer" }}
          >
            {area.shape === "rect" ? (
              <rect
                {...parseRect(area.coords)}
                fill={fill}
                stroke={stroke}
                strokeWidth={6}
              />
            ) : (
              <polygon
                points={parsePoly(area.coords)}
                fill={fill}
                stroke={stroke}
                strokeWidth={6}
              />
            )}
            <text
              x={c.x}
              y={c.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={32}
              fontWeight="bold"
              fill={isActive ? "rgb(255,165,0)" : "white"}
              stroke="rgba(0,0,0,0.8)"
              strokeWidth={6}
              paintOrder="stroke"
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              {/* TODO: get new images that don't have the text written on it already*/}
              {/* {num} */}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
