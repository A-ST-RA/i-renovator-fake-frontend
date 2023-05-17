import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 65 65' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={32.5} cy={32.5} r={32.5} fill='#ABD0CF' />
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
