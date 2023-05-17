import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconsBellLine } from '../IconsBellLine/IconsBellLine';
import { Notification2Line1Icon } from './Notification2Line1Icon.js';
import classes from './Notification_StatusNew.module.css';

interface Props {
  className?: string;
  classes?: {
    statusNew?: string;
  };
  swap?: {
    notification2Line1?: ReactNode;
  };
}
/* @figmaId 1:108 */
export const Notification_StatusNew: FC<Props> = memo(function Notification_StatusNew(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={`${props.classes?.statusNew || ''} ${classes.statusNew}`}></div>
      <IconsBellLine
        className={classes.iconsBellLine}
        swap={{
          notification2Line1: props.swap?.notification2Line1 || <Notification2Line1Icon className={classes.icon} />,
        }}
      />
    </div>
  );
});
