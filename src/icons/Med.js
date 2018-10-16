import React from "react";
import Svg from "svgs";
const Med = props => (
  <svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#00B0FF" />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M24 12.061v8.915l-2.536 1.48v-5.95L16 19.776l-5.464-3.273v5.953L8 20.976V12.06l8 4.805 8-4.805zm-7.97 11.117l2.34-1.399 2.31 1.399L16.03 26l-4.648-2.822 2.31-1.399 2.339 1.399zm4.62-14.356l-2.311 1.399L16 8.822l-2.339 1.399-2.31-1.399L16 6l4.65 2.822z"
      />
    </g>
  </svg>
);

export default Med;
