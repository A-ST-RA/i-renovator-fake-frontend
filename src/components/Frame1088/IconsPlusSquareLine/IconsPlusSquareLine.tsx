import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsPlusSquareLine.module.css';
import { ShapeIcon2 } from './ShapeIcon2.js';
import { ShapeIcon } from './ShapeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    shape?: ReactNode;
    shape2?: ReactNode;
  };
}
/* @figmaId 1:1587 */
export const IconsPlusSquareLine: FC<Props> = memo(function IconsPlusSquareLine(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.shape}>{props.swap?.shape || <ShapeIcon className={classes.icon} />}</div>
      <div className={classes.shape2}>{props.swap?.shape2 || <ShapeIcon2 className={classes.icon2} />}</div>
    </div>
  );
});
