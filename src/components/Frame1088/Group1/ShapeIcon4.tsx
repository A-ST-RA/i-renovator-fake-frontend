import { memo, SVGProps } from 'react';

const ShapeIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.666667 2.33333C0.666667 1.22876 1.5621 0.333333 2.66667 0.333333H4.66667V5.66667H3.33333C1.86057 5.66667 0.666667 4.47276 0.666667 3V2.33333ZM2.66667 1.66667H3.33333V4.33333C2.59695 4.33333 2 3.73638 2 3V2.33333C2 1.96514 2.29848 1.66667 2.66667 1.66667Z'
      fill='#E9E9E9'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.3333 2.33333C15.3333 1.22876 14.4379 0.333333 13.3333 0.333333H11.3333V5.66667H12.6667C14.1394 5.66667 15.3333 4.47276 15.3333 3V2.33333ZM13.3333 1.66667H12.6667V4.33333C13.403 4.33333 14 3.73638 14 3V2.33333C14 1.96514 13.7015 1.66667 13.3333 1.66667Z'
      fill='#E9E9E9'
    />
  </svg>
);
const Memo = memo(ShapeIcon4);
export { Memo as ShapeIcon4 };
