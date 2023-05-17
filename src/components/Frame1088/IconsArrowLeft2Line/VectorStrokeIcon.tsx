import { memo, SVGProps } from 'react';

const VectorStrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.90905 0.265202C4.50323 -0.109404 3.87057 -0.0841015 3.49597 0.321717L0.265197 3.82168C-0.0884001 4.20474 -0.0884038 4.79517 0.26519 5.17824L3.49596 8.67828C3.87056 9.0841 4.50322 9.10941 4.90905 8.73481C5.31487 8.36021 5.34018 7.72755 4.96558 7.32173L3.28397 5.49996L13 5.49996C13.5523 5.49996 14 5.05225 14 4.49996C14 3.94768 13.5523 3.49996 13 3.49996L3.284 3.49996L4.96557 1.67829C5.34017 1.27247 5.31487 0.639808 4.90905 0.265202Z'
      fill='#777E91'
    />
  </svg>
);
const Memo = memo(VectorStrokeIcon);
export { Memo as VectorStrokeIcon };
