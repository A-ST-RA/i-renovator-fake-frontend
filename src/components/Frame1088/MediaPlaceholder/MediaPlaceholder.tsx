import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './MediaPlaceholder.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:1685 */
export const MediaPlaceholder: FC<Props> = memo(function MediaPlaceholder(props = {}) {
  return <div className={`${resets.storybrainResets} ${classes.root}`}></div>;
});
