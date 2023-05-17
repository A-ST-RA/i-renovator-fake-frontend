import { memo, SVGProps } from 'react';

const ShapeIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 3C10 1.34315 11.3431 0 13 0C14.6569 0 16 1.34315 16 3V9C16 10.6569 14.6569 12 13 12C11.3431 12 10 10.6569 10 9V3ZM14 3V9C14 9.55229 13.5523 10 13 10C12.4477 10 12 9.55229 12 9V3C12 2.44772 12.4477 2 13 2C13.5523 2 14 2.44772 14 3Z'
      fill='#777E91'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13V15C6 16.6569 4.65685 18 3 18C1.34315 18 0 16.6569 0 15V13ZM4 13V15C4 15.5523 3.55228 16 3 16C2.44772 16 2 15.5523 2 15V13C2 12.4477 2.44772 12 3 12C3.55228 12 4 12.4477 4 13Z'
      fill='#777E91'
    />
  </svg>
);
const Memo = memo(ShapeIcon2);
export { Memo as ShapeIcon2 };
