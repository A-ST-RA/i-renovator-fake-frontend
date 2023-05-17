import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StyleNeutralSizeMediumS.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 1:267 */
export const Button_StyleNeutralSizeMediumS: FC<Props> = memo(function Button_StyleNeutralSizeMediumS(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Button</div>}
    </button>
  );
});
