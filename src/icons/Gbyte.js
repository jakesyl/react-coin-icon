import React from "react";
import Svg from "svgs";
const Gbyte = props => (
  <svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#302C2C" fillRule="nonzero" />
      <circle cx={16} cy={16} r={11} fill="#FFF" />
    </g>
  </svg>
);

export default Gbyte;
