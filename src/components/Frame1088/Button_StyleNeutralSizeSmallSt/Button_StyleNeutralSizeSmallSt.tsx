import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconsStarFilled } from '../IconsStarFilled/IconsStarFilled';
import classes from './Button_StyleNeutralSizeSmallSt.module.css';
import { ShapeIcon } from './ShapeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    iconsStarFilled?: ReactNode;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 1:153 */
export const Button_StyleNeutralSizeSmallSt: FC<Props> = memo(function Button_StyleNeutralSizeSmallSt(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Button</div>}
      {props.swap?.iconsStarFilled || (
        <IconsStarFilled
          className={classes.iconsStarFilled}
          swap={{
            shape: <ShapeIcon className={classes.icon} />,
          }}
        />
      )}
    </button>
  );
});
