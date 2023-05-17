import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Label_StyleGhostRulePopular.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    popular?: ReactNode;
  };
}
/* @figmaId 1:406 */
export const Label_StyleGhostRulePopular: FC<Props> = memo(function Label_StyleGhostRulePopular(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.popular != null ? props.text?.popular : <div className={classes.popular}>popular</div>}
    </div>
  );
});
