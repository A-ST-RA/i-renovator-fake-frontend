import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatar1.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    austinWadeX6Uj51n5CE8Unsplash1?: string;
  };
}
/* @figmaId 1:339 */
export const Avatar1: FC<Props> = memo(function Avatar1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div
        className={`${props.classes?.austinWadeX6Uj51n5CE8Unsplash1 || ''} ${classes.austinWadeX6Uj51n5CE8Unsplash1}`}
      ></div>
    </div>
  );
});
