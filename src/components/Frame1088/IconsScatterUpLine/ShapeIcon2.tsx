import { memo, SVGProps } from 'react';

const ShapeIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19 6C17.3431 6 16 4.65685 16 3C16 1.34315 17.3431 0 19 0C20.6569 0 22 1.34315 22 3C22 4.65685 20.6569 6 19 6ZM19 4C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2C19.5523 2 20 2.44772 20 3C20 3.55228 19.5523 4 19 4Z'
      fill='#777E91'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11 10C9.34315 10 8 8.65685 8 7C8 5.34315 9.34315 4 11 4C12.6569 4 14 5.34315 14 7C14 8.65685 12.6569 10 11 10ZM11 8C10.4477 8 10 7.55228 10 7C10 6.44772 10.4477 6 11 6C11.5523 6 12 6.44772 12 7C12 7.55228 11.5523 8 11 8Z'
      fill='#777E91'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 11C0 12.6569 1.34315 14 3 14C4.65685 14 6 12.6569 6 11C6 9.34315 4.65685 8 3 8C1.34315 8 0 9.34315 0 11ZM2 11C2 11.5523 2.44772 12 3 12C3.55228 12 4 11.5523 4 11C4 10.4477 3.55228 10 3 10C2.44772 10 2 10.4477 2 11Z'
      fill='#777E91'
    />
  </svg>
);
const Memo = memo(ShapeIcon2);
export { Memo as ShapeIcon2 };
