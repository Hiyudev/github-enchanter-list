import { SVGProps } from 'react';

interface ILogoIconProps extends SVGProps<SVGSVGElement> {
  size: number;
}

const LogoIcon = (props: ILogoIconProps) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="Github enchanter list logo"
    {...props}
  >
    <title>Github enchanter list logo</title>
    <path
      d="M256 0L85 170.667L256 341.333L213.25 384L85 256V341.333V512H256H427L341.5 426.667H427V384L256 170.667L427 256V170.667L256 0Z"
      fill="currentColor"
    />
  </svg>
);

export default LogoIcon;
