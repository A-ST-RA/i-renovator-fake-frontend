import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11 2H3C2.44772 2 2 2.44772 2 3V7C2 9.76142 4.23858 12 7 12C9.76142 12 12 9.76142 12 7V3C12 2.44772 11.5523 2 11 2ZM3 0C1.34315 0 0 1.34315 0 3V7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7V3C14 1.34315 12.6569 0 11 0H3Z'
      fill='#777E91'
    />
  </svg>
);
const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };
