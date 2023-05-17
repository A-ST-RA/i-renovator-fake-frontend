import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM18.7071 0.707107C19.0976 0.316582 19.0976 -0.316582 18.7071 -0.707107L12.3431 -7.07107C11.9526 -7.46159 11.3195 -7.46159 10.9289 -7.07107C10.5384 -6.68054 10.5384 -6.04738 10.9289 -5.65685L16.5858 0L10.9289 5.65685C10.5384 6.04738 10.5384 6.68054 10.9289 7.07107C11.3195 7.46159 11.9526 7.46159 12.3431 7.07107L18.7071 0.707107ZM0 1L18 1V-1L0 -1L0 1Z'
      fill='#E9E9E9'
    />
  </svg>
);
const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };
