import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsSearchLine.module.css';
import { ShapeIcon } from './ShapeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    shape?: ReactNode;
  };
}
/* @figmaId 1:64 */
export const IconsSearchLine: FC<Props> = memo(function IconsSearchLine(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.shape}>{props.swap?.shape || <ShapeIcon className={classes.icon} />}</div>
    </div>
  );
});
