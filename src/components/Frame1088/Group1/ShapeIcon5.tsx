import { memo, SVGProps } from 'react';

const ShapeIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3 0C2.63181 0 2.33333 0.298477 2.33333 0.666667V2.66667H1C0.63181 2.66667 0.333333 2.96514 0.333333 3.33333C0.333333 3.70152 0.63181 4 1 4H5C5.36819 4 5.66667 3.70152 5.66667 3.33333C5.66667 2.96514 5.36819 2.66667 5 2.66667H3.66667V0.666667C3.66667 0.298477 3.36819 0 3 0Z'
      fill='#E9E9E9'
    />
  </svg>
);
const Memo = memo(ShapeIcon5);
export { Memo as ShapeIcon5 };
