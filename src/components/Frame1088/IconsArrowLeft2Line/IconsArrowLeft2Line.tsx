import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsArrowLeft2Line.module.css';
import { VectorStrokeIcon } from './VectorStrokeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:1170 */
export const IconsArrowLeft2Line: FC<Props> = memo(function IconsArrowLeft2Line(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vectorStroke}>
        <VectorStrokeIcon className={classes.icon} />
      </div>
    </div>
  );
});
