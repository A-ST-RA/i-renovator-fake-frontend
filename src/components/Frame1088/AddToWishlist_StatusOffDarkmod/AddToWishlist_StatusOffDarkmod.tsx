import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconsHeartLine } from '../IconsHeartLine/IconsHeartLine';
import classes from './AddToWishlist_StatusOffDarkmod.module.css';
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
/* @figmaId 1:1196 */
export const AddToWishlist_StatusOffDarkmod: FC<Props> = memo(function AddToWishlist_StatusOffDarkmod(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <IconsHeartLine
        className={classes.iconsHeartLine}
        swap={{
          shape: props.swap?.shape || <ShapeIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
