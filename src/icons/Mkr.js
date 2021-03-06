import React from "react";
import Svg from "svgs";
const Mkr = props => (
  <svg viewBox="0 0 32 32" height={32} width={32} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#1abc9c" r={16} />
      <path
        d="M7.838 12.056V22.5H6v-14l9.708 7.027V22.5H13.87v-6.077zm10.292 4.367V22.5h-1.838v-6.973L26 8.5v14h-1.838V12.056z"
        fill="#fff"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default Mkr;
