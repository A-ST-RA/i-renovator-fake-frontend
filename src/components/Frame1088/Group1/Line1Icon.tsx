import { memo, SVGProps } from 'react';

const Line1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 168 0.5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H168' stroke='#ABD0CF' strokeWidth={0.5} strokeLinecap='round' />
  </svg>
);
const Memo = memo(Line1Icon);
export { Memo as Line1Icon };
