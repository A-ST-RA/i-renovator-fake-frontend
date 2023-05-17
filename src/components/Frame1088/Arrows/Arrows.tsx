import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconsArrowLeft2Line } from '../IconsArrowLeft2Line/IconsArrowLeft2Line';
import { IconsArrowRight2Line } from '../IconsArrowRight2Line/IconsArrowRight2Line';
import classes from './Arrows.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:1165 */
export const Arrows: FC<Props> = memo(function Arrows(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.leftArrow}>
        <IconsArrowLeft2Line />
      </div>
      <div className={classes.rightArrow}>
        <IconsArrowRight2Line className={classes.iconsArrowRight2Line} />
      </div>
    </div>
  );
});
