import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow1Icon } from './Arrow1Icon.js';
import { Arrows } from './Arrows/Arrows';
import { AuctionImg1 } from './AuctionImg1/AuctionImg1';
import { Avatar1 } from './Avatar1/Avatar1';
import { Button_StyleLightSizeMediumSta } from './Button_StyleLightSizeMediumSta/Button_StyleLightSizeMediumSta';
import { Button_StyleLightSizeSmallStat } from './Button_StyleLightSizeSmallStat/Button_StyleLightSizeSmallStat';
import { Button_StyleNeutralSizeMediumS } from './Button_StyleNeutralSizeMediumS/Button_StyleNeutralSizeMediumS';
import { Button_StyleNeutralSizeSmallSt2 } from './Button_StyleNeutralSizeSmallSt2/Button_StyleNeutralSizeSmallSt2';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import classes from './Frame1088.module.css';
import { Group1 } from './Group1/Group1';
import { IconsStopLine } from './IconsStopLine/IconsStopLine';
import { ItemCard_StateHoverDarkModeOff } from './ItemCard_StateHoverDarkModeOff/ItemCard_StateHoverDarkModeOff';
import { Notification2Line1Icon } from './Notification2Line1Icon.js';
import { Notification_StatusNew } from './Notification_StatusNew/Notification_StatusNew';
import { ShapeIcon2 } from './ShapeIcon2.js';
import { ShapeIcon3 } from './ShapeIcon3.js';
import { ShapeIcon4 } from './ShapeIcon4.js';
import { ShapeIcon5 } from './ShapeIcon5.js';
import { ShapeIcon6 } from './ShapeIcon6.js';
import { ShapeIcon7 } from './ShapeIcon7.js';
import { ShapeIcon8 } from './ShapeIcon8.js';
import { ShapeIcon9 } from './ShapeIcon9.js';
import { ShapeIcon10 } from './ShapeIcon10.js';
import { ShapeIcon11 } from './ShapeIcon11.js';
import { ShapeIcon12 } from './ShapeIcon12.js';
import { ShapeIcon13 } from './ShapeIcon13.js';
import { ShapeIcon14 } from './ShapeIcon14.js';
import { ShapeIcon15 } from './ShapeIcon15.js';
import { ShapeIcon16 } from './ShapeIcon16.js';
import { ShapeIcon17 } from './ShapeIcon17.js';
import { ShapeIcon18 } from './ShapeIcon18.js';
import { ShapeIcon19 } from './ShapeIcon19.js';
import { ShapeIcon20 } from './ShapeIcon20.js';
import { ShapeIcon21 } from './ShapeIcon21.js';
import { ShapeIcon22 } from './ShapeIcon22.js';
import { ShapeIcon23 } from './ShapeIcon23.js';
import { ShapeIcon24 } from './ShapeIcon24.js';
import { ShapeIcon25 } from './ShapeIcon25.js';
import { ShapeIcon26 } from './ShapeIcon26.js';
import { ShapeIcon27 } from './ShapeIcon27.js';
import { ShapeIcon28 } from './ShapeIcon28.js';
import { ShapeIcon29 } from './ShapeIcon29.js';
import { ShapeIcon30 } from './ShapeIcon30.js';
import { ShapeIcon31 } from './ShapeIcon31.js';
import { ShapeIcon32 } from './ShapeIcon32.js';
import { ShapeIcon } from './ShapeIcon.js';
import { SmallSearchBox_StateDefault } from './SmallSearchBox_StateDefault/SmallSearchBox_StateDefault';

interface Props {
  className?: string;
}
/* @figmaId 7:4796 */
export const Frame1088: FC<Props> = memo(function Frame1088(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame765}>
        <div className={classes.unnamed}>Создавай, голосуй и измени свой город</div>
        <div className={classes.unnamed2}>Новая креативная платформа.</div>
      </div>
      <Button_StyleLightSizeMediumSta
        className={classes.button}
        text={{
          label: <div className={classes.label}>Начать поиск</div>,
        }}
      />
      <AuctionImg1
        className={classes.auctionImg1}
        classes={{ fuuJLo7venJ_ywMUnsplash1: classes.fuuJLo7venJ_ywMUnsplash1 }}
      />
      <div className={classes.frame1035}>
        <div className={classes.unnamed3}>Остановка </div>
        <div className={classes.creatorPrice}>
          <div className={classes.frame1031}>
            <div className={classes.user}>
              <Avatar1 className={classes.avatar1} />
            </div>
            <div className={classes.frame1033}>
              <div className={classes.creator}>Создатель</div>
              <div className={classes.unnamed4}>Мария Третьякова</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame1030}>
        <div className={classes.frame1026}>
          <div className={classes.unnamed5}>Количество голосов</div>
          <div className={classes._26879}>26 879</div>
          <div className={classes.unnamed6}>голосов</div>
        </div>
        <div className={classes.frame10262}>
          <div className={classes.unnamed7}>Голосование заканчивается через:</div>
          <div className={classes.frame1028}>
            <div className={classes.frame1027}>
              <div className={classes._19}>19</div>
              <div className={classes.unnamed8}>Часов</div>
            </div>
            <div className={classes.frame10272}>
              <div className={classes._24}>24</div>
              <div className={classes.unnamed9}>минуты</div>
            </div>
            <div className={classes.frame10273}>
              <div className={classes._192}>19</div>
              <div className={classes.unnamed10}>секунд</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame1032}>
        <Button_StyleNeutralSizeMediumS
          className={classes.button2}
          text={{
            label: <div className={classes.label2}>Голосовать</div>,
          }}
        />
        <Button_StyleLightSizeMediumSta
          className={classes.button3}
          text={{
            label: <div className={classes.label3}>Подробнее</div>,
          }}
        />
      </div>
      <div className={classes.frame913}>
        <div className={classes.unnamed11}>Горячие проекты</div>
        <Arrows />
      </div>
      <ItemCard_StateHoverDarkModeOff
        className={classes.itemCard}
        classes={{
          overlay: classes.overlay,
          label: classes.label4,
          addToWishlist: classes.addToWishlist,
          label3: classes.label6,
          avatar1: classes.avatar12,
          avatar2: classes.avatar2,
          avatar3: classes.avatar3,
          divider: classes.divider,
          update: classes.update,
        }}
        swap={{
          shape: <ShapeIcon2 className={classes.icon2} />,
          shape2: <ShapeIcon3 className={classes.icon3} />,
          shape3: <ShapeIcon4 className={classes.icon4} />,
          shape4: <ShapeIcon5 className={classes.icon5} />,
          shape5: <ShapeIcon6 className={classes.icon6} />,
        }}
        text={{
          default: <div className={classes.default}>топ 10</div>,
          label: <div className={classes.label5}>Голосовать</div>,
          amazingDigitalArt: <div className={classes.amazingDigitalArt}>Проект остановок</div>,
          popular: <div className={classes.popular}>15 895</div>,
          _3InStock: <div className={classes._3InStock}>Ростов-на-Дону</div>,
          highestBid: <div className={classes.highestBid}>Подробнее</div>,
        }}
      />
      <ItemCard_StateHoverDarkModeOff
        className={classes.itemCard2}
        classes={{
          overlay: classes.overlay2,
          label: classes.label7,
          addToWishlist: classes.addToWishlist2,
          label3: classes.label9,
          avatar1: classes.avatar13,
          avatar2: classes.avatar22,
          avatar3: classes.avatar32,
          divider: classes.divider2,
          update: classes.update2,
        }}
        swap={{
          shape: <ShapeIcon7 className={classes.icon7} />,
          shape2: <ShapeIcon8 className={classes.icon8} />,
          shape3: <ShapeIcon9 className={classes.icon9} />,
          shape4: <ShapeIcon10 className={classes.icon10} />,
          shape5: <ShapeIcon11 className={classes.icon11} />,
        }}
        text={{
          default: <div className={classes.default2}>топ 10</div>,
          label: <div className={classes.label8}>Голосовать</div>,
          amazingDigitalArt: <div className={classes.amazingDigitalArt2}>Проект остановок</div>,
          popular: <div className={classes.popular2}>15 895</div>,
          _3InStock: <div className={classes._3InStock2}>Ростов-на-Дону</div>,
          highestBid: <div className={classes.highestBid2}>Подробнее</div>,
        }}
      />
      <ItemCard_StateHoverDarkModeOff
        className={classes.itemCard3}
        classes={{
          overlay: classes.overlay3,
          label: classes.label10,
          addToWishlist: classes.addToWishlist3,
          label3: classes.label12,
          avatar1: classes.avatar14,
          avatar2: classes.avatar23,
          avatar3: classes.avatar33,
          divider: classes.divider3,
          update: classes.update3,
        }}
        swap={{
          shape: <ShapeIcon12 className={classes.icon12} />,
          shape2: <ShapeIcon13 className={classes.icon13} />,
          shape3: <ShapeIcon14 className={classes.icon14} />,
          shape4: <ShapeIcon15 className={classes.icon15} />,
          shape5: <ShapeIcon16 className={classes.icon16} />,
        }}
        text={{
          default: <div className={classes.default3}>топ 10</div>,
          label: <div className={classes.label11}>Голосовать</div>,
          amazingDigitalArt: <div className={classes.amazingDigitalArt3}>Проект остановок</div>,
          popular: <div className={classes.popular3}>15 895</div>,
          _3InStock: <div className={classes._3InStock3}>Ростов-на-Дону</div>,
          highestBid: <div className={classes.highestBid3}>Подробнее</div>,
        }}
      />
      <ItemCard_StateHoverDarkModeOff
        className={classes.itemCard4}
        classes={{
          overlay: classes.overlay4,
          label: classes.label13,
          addToWishlist: classes.addToWishlist4,
          label3: classes.label15,
          avatar1: classes.avatar15,
          avatar2: classes.avatar24,
          avatar3: classes.avatar34,
          divider: classes.divider4,
          update: classes.update4,
        }}
        swap={{
          shape: <ShapeIcon17 className={classes.icon17} />,
          shape2: <ShapeIcon18 className={classes.icon18} />,
          shape3: <ShapeIcon19 className={classes.icon19} />,
          shape4: <ShapeIcon20 className={classes.icon20} />,
          shape5: <ShapeIcon21 className={classes.icon21} />,
        }}
        text={{
          default: <div className={classes.default4}>топ 10</div>,
          label: <div className={classes.label14}>Голосовать</div>,
          amazingDigitalArt: <div className={classes.amazingDigitalArt4}>Проект остановок</div>,
          popular: <div className={classes.popular4}>15 895</div>,
          _3InStock: <div className={classes._3InStock4}>Ростов-на-Дону</div>,
          highestBid: <div className={classes.highestBid4}>Подробнее</div>,
        }}
      />
      <Group1 />
      <Group1
        swap={{
          shape: <ShapeIcon22 className={classes.icon22} />,
          shape2: <ShapeIcon23 className={classes.icon23} />,
        }}
      />
      <Group1
        className={classes.group3}
        swap={{
          shape: <ShapeIcon24 className={classes.icon24} />,
          shape2: <ShapeIcon25 className={classes.icon25} />,
        }}
      />
      <Group1
        className={classes.group4}
        swap={{
          shape: <ShapeIcon26 className={classes.icon26} />,
          shape2: <ShapeIcon27 className={classes.icon27} />,
        }}
      />
      <Group1
        className={classes.group5}
        swap={{
          shape: <ShapeIcon28 className={classes.icon28} />,
          shape2: <ShapeIcon29 className={classes.icon29} />,
        }}
      />
      <Group1
        className={classes.group6}
        swap={{
          shape: <ShapeIcon30 className={classes.icon30} />,
          shape2: <ShapeIcon31 className={classes.icon31} />,
        }}
      />
      <div className={classes.unnamed12}>Топ авторов:</div>
      {/* <div className={classes.img}>
        <div className={classes.base}></div>
        <div className={classes._1}>
          <div className={classes.colorsSwitcher}>
            <div className={classes.changeColorsHere}>
              <div className={classes.bg}></div>
              <div className={classes._3}></div>
              <div className={classes._2}></div>
              <div className={classes._12}></div>
            </div>
          </div>
        </div>
        <div className={classes._13}>
          <div className={classes.colorsSwitcher2}>
            <div className={classes.changeColorsHere2}>
              <div className={classes.bg2}></div>
              <div className={classes._32}></div>
              <div className={classes._22}></div>
              <div className={classes._14}></div>
            </div>
          </div>
        </div>
        <div className={classes._23}>
          <div className={classes.colorsSwitcher3}>
            <div className={classes.changeColorsHere3}>
              <div className={classes.bg3}></div>
              <div className={classes._33}></div>
              <div className={classes._25}></div>
              <div className={classes._15}></div>
            </div>
          </div>
        </div>
        <div className={classes._26}>
          <div className={classes.colorsSwitcher4}>
            <div className={classes.changeColorsHere4}>
              <div className={classes.bg4}></div>
              <div className={classes._34}></div>
              <div className={classes._27}></div>
              <div className={classes._16}></div>
            </div>
          </div>
        </div>
        <div className={classes._35}>
          <div className={classes.colorsSwitcher5}>
            <div className={classes.changeColorsHere5}>
              <div className={classes.bg5}></div>
              <div className={classes._36}></div>
              <div className={classes._28}></div>
              <div className={classes._17}></div>
            </div>
          </div>
        </div>
        <div className={classes._37}>
          <div className={classes.colorsSwitcher6}>
            <div className={classes.changeColorsHere6}>
              <div className={classes.bg6}></div>
              <div className={classes._38}></div>
              <div className={classes._29}></div>
              <div className={classes._18}></div>
            </div>
          </div>
        </div>
        <div className={classes.specular}></div>
        <div className={classes.specular2}></div>
        <div className={classes.specular3}></div>
        <div className={classes.shadow}></div>
        <div className={classes.base2}></div>
        <div className={classes._110}>
          <div className={classes.colorsSwitcher7}>
            <div className={classes.changeColorsHere7}>
              <div className={classes.bg7}></div>
              <div className={classes._39}></div>
              <div className={classes._210}></div>
              <div className={classes._111}></div>
            </div>
          </div>
        </div>
        <div className={classes._112}>
          <div className={classes.colorsSwitcher8}>
            <div className={classes.changeColorsHere8}>
              <div className={classes.bg8}></div>
              <div className={classes._310}></div>
              <div className={classes._211}></div>
              <div className={classes._113}></div>
            </div>
          </div>
        </div>
        <div className={classes.specular4}></div>
        <div className={classes.specular5}></div>
        <div className={classes.shadow2}></div>
        <div className={classes.coin}></div>
        <div className={classes.shadow3}></div>
        <div className={classes.coin2}></div>
        <div className={classes.shadow4}></div>
        <div className={classes.coin3}></div>
        <div className={classes.shadow5}></div>
        <div className={classes.base3}></div>
        <div className={classes._114}>
          <div className={classes.colorsSwitcher9}>
            <div className={classes.changeColorsHere9}>
              <div className={classes.bg9}></div>
              <div className={classes._311}></div>
              <div className={classes._212}></div>
              <div className={classes._115}></div>
            </div>
          </div>
        </div>
        <div className={classes._116}>
          <div className={classes.colorsSwitcher10}>
            <div className={classes.changeColorsHere10}>
              <div className={classes.bg10}></div>
              <div className={classes._312}></div>
              <div className={classes._213}></div>
              <div className={classes._117}></div>
            </div>
          </div>
        </div>
        <div className={classes.specular6}></div>
        <div className={classes.specular7}></div>
      </div> */}
      <div className={classes.unnamed13}>Меняй свой город в лучшую сторону</div>
      <div className={classes.unnamed14}>Креативная платформа, которая вдохнавляет</div>
      <div className={classes.unnamed15}>Присоединяйся к нам</div>
      <div className={classes.rectangle6}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.unnamed16}>Присоедениться</div>
      <div className={classes.unnamed17}>Стать автором</div>
      <div className={classes.unnamed18}>Я реноватор</div>
      <div className={classes.unnamed19}>Я реноватор</div>
      <div className={classes.unnamed20}>Проекты</div>
      <div className={classes.unnamed21}>Авторы</div>
      <div className={classes.unnamed22}>Как это работает?</div>
      <div className={classes.actions}>
        <SmallSearchBox_StateDefault
          className={classes.smallSearchBox}
          swap={{
            shape: <ShapeIcon32 className={classes.icon32} />,
          }}
          text={{
            search: <div className={classes.search}>Поиск</div>,
          }}
        />
        <Notification_StatusNew
          classes={{ statusNew: classes.statusNew }}
          swap={{
            notification2Line1: <Notification2Line1Icon className={classes.icon33} />,
          }}
        />
        <div className={classes.buttons}>
          <Button_StyleNeutralSizeSmallSt2
            text={{
              label: <div className={classes.label16}>Создать</div>,
            }}
          />
          <Button_StyleLightSizeSmallStat
            className={classes.button4}
            text={{
              label: <div className={classes.label17}>Регистрация</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.unnamed23}>Новая креативная платформа</div>
      <div className={classes.unnamed24}>Инфо</div>
      <div className={classes.unnamed25}>Присоединяйся к рассылке новостей</div>
      <div className={classes.unnamed26}>Скачать</div>
      <div className={classes.unnamed27}>Поддержка</div>
      <div className={classes.unnamed28}>Демо-версия</div>
      <div className={classes.unnamed29}>Подпишись на рассылку что бы получать больше бесплатных ресурсов</div>
      <div className={classes.rectangle8}></div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon34} />
      </div>
      <div className={classes.arrow1}>
        <Arrow1Icon className={classes.icon35} />
      </div>
      <div className={classes.unnamed30}>Адрес электронной почты...</div>
    </div>
  );
});
