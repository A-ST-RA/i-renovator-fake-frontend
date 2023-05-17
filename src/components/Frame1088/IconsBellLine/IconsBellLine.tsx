import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsBellLine.module.css';
import { Notification2Line1Icon } from './Notification2Line1Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    notification2Line1?: ReactNode;
  };
}
/* @figmaId 1:101 */
export const IconsBellLine: FC<Props> = memo(function IconsBellLine(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.notification2Line1}>
        {props.swap?.notification2Line1 || <Notification2Line1Icon className={classes.icon} />}
      </div>
    </div>
  );
});
