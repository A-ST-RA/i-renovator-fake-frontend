import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconsCupLine } from '../IconsCupLine/IconsCupLine';
import { IconsPlusSquareLine } from '../IconsPlusSquareLine/IconsPlusSquareLine';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import classes from './Group1.module.css';
import { Line1Icon } from './Line1Icon.js';
import { ShapeIcon2 } from './ShapeIcon2.js';
import { ShapeIcon3 } from './ShapeIcon3.js';
import { ShapeIcon4 } from './ShapeIcon4.js';
import { ShapeIcon5 } from './ShapeIcon5.js';
import { ShapeIcon } from './ShapeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    shape?: ReactNode;
    shape2?: ReactNode;
  };
}
/* @figmaId 12:6094 */
export const Group1: FC<Props> = memo(function Group1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle5}></div>
      <IconsPlusSquareLine
        className={classes.iconsPlusSquareLine}
        swap={{
          shape: props.swap?.shape || <ShapeIcon className={classes.icon} />,
          shape2: props.swap?.shape2 || <ShapeIcon2 className={classes.icon2} />,
        }}
      />
      <div className={classes.line1}>
        <Line1Icon className={classes.icon6} />
      </div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon7} />
      </div>
      <div className={classes.unnamed}>Владислав Бахмацкий</div>
      {/* <div className={classes._25777}>25 777 голосов</div> */}
      <div className={classes._1}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>#</span>
          <span className={classes.label2}>1</span>
        </p>
      </div>
      <IconsCupLine
        className={classes.iconsCupLine}
        swap={{
          shape: <ShapeIcon3 className={classes.icon3} />,
          shape2: <ShapeIcon4 className={classes.icon4} />,
          shape3: <ShapeIcon5 className={classes.icon5} />,
        }}
      />
    </div>
  );
});
