const AmericanFlagIcon = props => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" fill="black" />
      <path fill="white" d="M0 5.333H48V10.666H0z" />
      <path fill="white" d="M0 16H48V21.333H0z" />
      <path fill="white" d="M0 26.667H48V32H0z" />
      <path fill="white" d="M0 37.334H48V42.667H0z" />
      <rect width="19.2" height="21.333" fill="black" />
      <g fill="white">
        <circle cx="3.84" cy="4.267" r="1.067" />
        <circle cx="7.68" cy="7.467" r="1.067" />
        <circle cx="11.52" cy="4.267" r="1.067" />
        <circle cx="15.36" cy="7.467" r="1.067" />
        <circle cx="3.84" cy="10.667" r="1.067" />
        <circle cx="7.68" cy="13.867" r="1.067" />
        <circle cx="11.52" cy="10.667" r="1.067" />
        <circle cx="15.36" cy="13.867" r="1.067" />
      </g>
    </svg>
  )
}

export default AmericanFlagIcon
