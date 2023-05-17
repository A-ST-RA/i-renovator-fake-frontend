import { memo, SVGProps } from 'react';

const ShapeIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.16667 0C9.6269 0 10 0.373096 10 0.833333V2.5C10 2.96024 9.6269 3.33333 9.16667 3.33333C8.70643 3.33333 8.33333 2.96024 8.33333 2.5V0.833333C8.33333 0.373096 8.70643 0 9.16667 0Z'
      fill='#777E91'
    />
    <path
      d='M9.16667 10C9.6269 10 10 10.3731 10 10.8333V15.8333C10 16.2936 9.6269 16.6667 9.16667 16.6667C8.70643 16.6667 8.33333 16.2936 8.33333 15.8333V10.8333C8.33333 10.3731 8.70643 10 9.16667 10Z'
      fill='#777E91'
    />
    <path
      d='M0.833333 3.33333C1.29357 3.33333 1.66667 3.70643 1.66667 4.16667V10.8333C1.66667 11.2936 1.29357 11.6667 0.833333 11.6667C0.373096 11.6667 0 11.2936 0 10.8333V4.16667C0 3.70643 0.373096 3.33333 0.833333 3.33333Z'
      fill='#777E91'
    />
    <path
      d='M0.833333 15C1.29357 15 1.66667 15.3731 1.66667 15.8333V19.1667C1.66667 19.6269 1.29357 20 0.833333 20C0.373096 20 0 19.6269 0 19.1667V15.8333C0 15.3731 0.373096 15 0.833333 15Z'
      fill='#777E91'
    />
  </svg>
);
const Memo = memo(ShapeIcon3);
export { Memo as ShapeIcon3 };
