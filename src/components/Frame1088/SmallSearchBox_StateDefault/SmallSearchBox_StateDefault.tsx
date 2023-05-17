import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconsSearchLine } from '../IconsSearchLine/IconsSearchLine';
import { ShapeIcon } from './ShapeIcon.js';
import classes from './SmallSearchBox_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    shape?: ReactNode;
  };
  text?: {
    search?: ReactNode;
  };
}
/* @figmaId 1:73 */
export const SmallSearchBox_StateDefault: FC<Props> = memo(function SmallSearchBox_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.search != null ? props.text?.search : <div className={classes.search}>Search</div>}
      <IconsSearchLine
        className={classes.iconsSearchLine}
        swap={{
          shape: props.swap?.shape || <ShapeIcon className={classes.icon} />,
        }}
      />
    </div>
  );
});
