import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { AddToWishlist_StatusOffDarkmod } from '../AddToWishlist_StatusOffDarkmod/AddToWishlist_StatusOffDarkmod';
import { Avatar1 } from '../Avatar1/Avatar1';
import { Avatar2 } from '../Avatar2/Avatar2';
import { Button_StyleNeutralSizeSmallSt } from '../Button_StyleNeutralSizeSmallSt/Button_StyleNeutralSizeSmallSt';
import { IconsCandlesticksUpLine } from '../IconsCandlesticksUpLine/IconsCandlesticksUpLine';
import { IconsScatterUpLine } from '../IconsScatterUpLine/IconsScatterUpLine';
import { Label_StyleGhostRulePopular } from '../Label_StyleGhostRulePopular/Label_StyleGhostRulePopular';
import { Label_StyleSolidRuleDefault } from '../Label_StyleSolidRuleDefault/Label_StyleSolidRuleDefault';
import { MediaPlaceholder } from '../MediaPlaceholder/MediaPlaceholder';
import classes from './ItemCard_StateHoverDarkModeOff.module.css';
import { ShapeIcon2 } from './ShapeIcon2.js';
import { ShapeIcon3 } from './ShapeIcon3.js';
import { ShapeIcon4 } from './ShapeIcon4.js';
import { ShapeIcon } from './ShapeIcon.js';

interface Props {
  className?: string;
  classes?: {
    overlay?: string;
    label?: string;
    addToWishlist?: string;
    label3?: string;
    avatar1?: string;
    avatar2?: string;
    avatar3?: string;
    divider?: string;
    update?: string;
    root?: string;
  };
  swap?: {
    shape?: ReactNode;
    shape2?: ReactNode;
    shape3?: ReactNode;
    shape4?: ReactNode;
    shape5?: ReactNode;
  };
  text?: {
    default?: ReactNode;
    label?: ReactNode;
    amazingDigitalArt?: ReactNode;
    popular?: ReactNode;
    _3InStock?: ReactNode;
    highestBid?: ReactNode;
  };
}
/* @figmaId 1:1693 */
export const ItemCard_StateHoverDarkModeOff: FC<Props> = memo(function ItemCard_StateHoverDarkModeOff(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.productImg}>
        <MediaPlaceholder />
        <div className={`${props.classes?.overlay || ''} ${classes.overlay}`}></div>
        <div className={classes.labelAddToWishlist}>
          <Label_StyleSolidRuleDefault
            className={`${props.classes?.label || ''} ${classes.label}`}
            text={{
              default: props.text?.default || <div className={classes.default}>purchasing !</div>,
            }}
          />
          <AddToWishlist_StatusOffDarkmod
            className={props.classes?.addToWishlist || ''}
            swap={{
              shape: props.swap?.shape,
            }}
          />
        </div>
        <Button_StyleNeutralSizeSmallSt
          className={classes.button}
          swap={{
            iconsStarFilled: (
              <IconsScatterUpLine
                className={classes.iconsScatterUpLine}
                swap={{
                  shape: <ShapeIcon className={classes.icon} />,
                  shape2: <ShapeIcon2 className={classes.icon2} />,
                }}
              />
            ),
          }}
          text={{
            label: props.text?.label || <div className={classes.label2}>Place a bid</div>,
          }}
        />
      </div>
      <div className={classes.itemInfo}>
        <div className={classes.titlePrice}>
          {props.text?.amazingDigitalArt != null ? (
            props.text?.amazingDigitalArt
          ) : (
            <div className={classes.amazingDigitalArt}>Amazing digital art</div>
          )}
          <Label_StyleGhostRulePopular
            className={props.classes?.label3 || ''}
            text={{
              popular: props.text?.popular || <div className={classes.popular}>2.45 ETH</div>,
            }}
          />
        </div>
        <div className={classes.ownerCreatorCollection}>
          <div className={classes.avatars}>
            <Avatar1
              className={`${props.classes?.avatar1 || ''} ${classes.avatar1}`}
              classes={{ austinWadeX6Uj51n5CE8Unsplash1: classes.austinWadeX6Uj51n5CE8Unsplash1 }}
            />
            <Avatar2
              className={`${props.classes?.avatar2 || ''} ${classes.avatar2}`}
              classes={{ pexelsGabbyK52737171: classes.pexelsGabbyK52737171 }}
            />
            <Avatar1
              className={`${props.classes?.avatar3 || ''} ${classes.avatar3}`}
              classes={{ austinWadeX6Uj51n5CE8Unsplash1: classes.austinWadeX6Uj51n5CE8Unsplash12 }}
            />
          </div>
          {props.text?._3InStock != null ? props.text?._3InStock : <div className={classes._3InStock}>3 in stock</div>}
        </div>
        <div className={`${props.classes?.divider || ''} ${classes.divider}`}></div>
        <div className={classes.bid}>
          <div className={classes.highestBid}>
            <IconsCandlesticksUpLine
              className={classes.iconsCandlesticksUpLine}
              swap={{
                shape: props.swap?.shape4 || <ShapeIcon3 className={classes.icon3} />,
                shape2: props.swap?.shape5 || <ShapeIcon4 className={classes.icon4} />,
              }}
            />
            {props.text?.highestBid != null ? (
              props.text?.highestBid
            ) : (
              <div className={classes.highestBid2}>Highest bid</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
