import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsArrowRight2Line.module.css';
import { VectorStrokeIcon } from './VectorStrokeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:592 */
export const IconsArrowRight2Line: FC<Props> = memo(function IconsArrowRight2Line(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vectorStroke}>
        <VectorStrokeIcon className={classes.icon} />
      </div>
    </div>
  );
});
