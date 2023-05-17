import { memo, SVGProps } from 'react';

const ShapeIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4 0C3.44772 0 3 0.447716 3 1V4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H7C7.55228 6 8 5.55228 8 5C8 4.44772 7.55229 4 7 4H5V1C5 0.447716 4.55228 0 4 0Z'
      fill='#777E91'
    />
  </svg>
);
const Memo = memo(ShapeIcon3);
export { Memo as ShapeIcon3 };
