import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AuctionImg1.module.css';

interface Props {
  className?: string;
  classes?: {
    fuuJLo7venJ_ywMUnsplash1?: string;
    root?: string;
  };
}
/* @figmaId 1:1153 */
export const AuctionImg1: FC<Props> = memo(function AuctionImg1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.fuuJLo7venJ_ywMUnsplash1 || ''} ${classes.fuuJLo7venJ_ywMUnsplash1}`}></div>
    </div>
  );
});
