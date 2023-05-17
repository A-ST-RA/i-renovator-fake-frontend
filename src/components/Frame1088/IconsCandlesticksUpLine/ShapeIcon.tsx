import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11 0C11.5523 0 12 0.447715 12 1V3C12 3.55228 11.5523 4 11 4C10.4477 4 10 3.55228 10 3V1C10 0.447715 10.4477 0 11 0Z'
      fill='#777E91'
    />
    <path
      d='M11 12C11.5523 12 12 12.4477 12 13V19C12 19.5523 11.5523 20 11 20C10.4477 20 10 19.5523 10 19V13C10 12.4477 10.4477 12 11 12Z'
      fill='#777E91'
    />
    <path
      d='M1 4C1.55228 4 2 4.44772 2 5V13C2 13.5523 1.55228 14 1 14C0.447715 14 0 13.5523 0 13V5C0 4.44772 0.447715 4 1 4Z'
      fill='#777E91'
    />
    <path
      d='M1 18C1.55228 18 2 18.4477 2 19V23C2 23.5523 1.55228 24 1 24C0.447715 24 0 23.5523 0 23V19C0 18.4477 0.447715 18 1 18Z'
      fill='#777E91'
    />
  </svg>
);
const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };
