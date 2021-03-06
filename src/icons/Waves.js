import React from "react";
import Svg from "svgs";
const Waves = props => (
  <svg viewBox="0 0 32 32" height={32} width={32} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#0155ff" r={16} />
      <path d="M16 6l10 10-10 10L6 16z" fill="#fff" />
    </g>
  </svg>
);

export default Waves;
