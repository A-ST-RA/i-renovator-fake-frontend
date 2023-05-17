import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Label_StyleSolidRuleDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    default?: ReactNode;
  };
}
/* @figmaId 1:416 */
export const Label_StyleSolidRuleDefault: FC<Props> = memo(function Label_StyleSolidRuleDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.default != null ? props.text?.default : <div className={classes.default}>default</div>}
    </div>
  );
});
