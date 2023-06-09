import { memo, SVGProps } from 'react';

const VectorStrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.09095 0.265202C9.49677 -0.109404 10.1294 -0.0841015 10.504 0.321717L13.7348 3.82168C14.0884 4.20474 14.0884 4.79517 13.7348 5.17824L10.504 8.67828C10.1294 9.0841 9.49678 9.10941 9.09096 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49996L1 5.49996C0.447719 5.49996 4.00422e-06 5.05225 3.98157e-06 4.49996C3.95893e-06 3.94768 0.447719 3.49996 1 3.49996L10.716 3.49996L9.03443 1.67829C8.65983 1.27247 8.68513 0.639808 9.09095 0.265202Z'
      fill='#777E91'
    />
  </svg>
);
const Memo = memo(VectorStrokeIcon);
export { Memo as VectorStrokeIcon };
