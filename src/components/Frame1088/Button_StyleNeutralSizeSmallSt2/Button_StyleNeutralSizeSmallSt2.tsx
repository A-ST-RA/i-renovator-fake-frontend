import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StyleNeutralSizeSmallSt2.module.css';

interface Props {
  className?: string;
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 1:167 */
export const Button_StyleNeutralSizeSmallSt2: FC<Props> = memo(function Button_StyleNeutralSizeSmallSt2(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Button</div>}
    </button>
  );
});
