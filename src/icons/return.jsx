import * as React from "react"
const ReturnSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={105}
    height={54}
    fill="none"
    {...props}
  >
    <ellipse cx={52.5} cy={26} fill="#FF6B00" rx={25.5} ry={23} />
    <path
      fill="#000"
      d="M37.982 23.867a1.5 1.5 0 0 0-.081 2.12l9.176 9.902a1.5 1.5 0 1 0 2.2-2.04l-8.156-8.8 8.802-8.157a1.5 1.5 0 1 0-2.04-2.2l-9.901 9.175Zm29.074.667-27.998-1.066-.114 2.998 27.998 1.066.114-2.998Z"
    />
  </svg>
)
export default ReturnSvg
