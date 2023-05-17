import { memo, SVGProps } from 'react';

const ShapeIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.66667 1.33333H2.33333C1.96514 1.33333 1.66667 1.63181 1.66667 2V4.66667C1.66667 6.50762 3.15905 8 5 8C6.84095 8 8.33333 6.50762 8.33333 4.66667V2C8.33333 1.63181 8.03486 1.33333 7.66667 1.33333ZM2.33333 0C1.22876 0 0.333333 0.895431 0.333333 2V4.66667C0.333333 7.244 2.42267 9.33333 5 9.33333C7.57733 9.33333 9.66667 7.244 9.66667 4.66667V2C9.66667 0.895431 8.77124 0 7.66667 0H2.33333Z'
      fill='#E9E9E9'
    />
  </svg>
);
const Memo = memo(ShapeIcon3);
export { Memo as ShapeIcon3 };
