import { memo, SVGProps } from 'react';

const ShapeIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 3C0 1.34315 1.34315 0 3 0H6V8H4C1.79086 8 0 6.20914 0 4V3ZM3 2H4V6C2.89543 6 2 5.10457 2 4V3C2 2.44772 2.44772 2 3 2Z'
      fill='#777E91'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22 3C22 1.34315 20.6569 0 19 0H16V8H18C20.2091 8 22 6.20914 22 4V3ZM19 2H18V6C19.1046 6 20 5.10457 20 4V3C20 2.44772 19.5523 2 19 2Z'
      fill='#777E91'
    />
  </svg>
);
const Memo = memo(ShapeIcon2);
export { Memo as ShapeIcon2 };
