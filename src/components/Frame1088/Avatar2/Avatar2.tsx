import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatar2.module.css';

interface Props {
  className?: string;
  classes?: {
    pexelsGabbyK52737171?: string;
    root?: string;
  };
}
/* @figmaId 1:441 */
export const Avatar2: FC<Props> = memo(function Avatar2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.pexelsGabbyK52737171 || ''} ${classes.pexelsGabbyK52737171}`}></div>
    </div>
  );
});
