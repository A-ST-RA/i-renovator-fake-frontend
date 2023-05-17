import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsStopLine.module.css';
import { ShapeIcon } from './ShapeIcon.js';

interface Props {
  className?: string;
  classes?: {
    shape?: string;
    root?: string;
  };
  swap?: {
    shape?: ReactNode;
  };
}
/* @figmaId 1:1163 */
export const IconsStopLine: FC<Props> = memo(function IconsStopLine(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.shape || ''} ${classes.shape}`}>
        {props.swap?.shape || <ShapeIcon className={classes.icon} />}
      </div>
    </div>
  );
});
