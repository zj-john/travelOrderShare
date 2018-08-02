import React, { Component } from 'react';
import { NavBar, Button, Icon, WingBlank, WhiteSpace, ActionSheet, List, TextareaItem} from 'antd-mobile';

import styles from './HotelShare.css';

// icon
import pyqIcon from './../../img/icon/pyq.png';
import wechatIcon from './../../img/icon/wechat.png';
import qqIcon from './../../img/icon/qq.png';
import weiboIcon from './../../img/icon/weibo.png';
import qqzoneIcon from './../../img/icon/qqzone.png';

import avatarImg from './../../img/avatar.png';
import templateImg from './../../img/share/Hotel.png';
import ctripLogoImg from './../../img/ctrip_logo.png';
import codeImg from './../../img/code.png';
import hotel_icon from './../../img/share/hotel_icon.png';
import dqxx_d from './../../img/share/dqxx_d.png';

const Item = List.Item;
const Brief = Item.Brief;

class HotelShare extends Component {
  iconDataList = [
    { url: pyqIcon, title: '朋友圈' },
    { url: wechatIcon, title: '微信好友' },
    { url: weiboIcon, title: '新浪微博' },
    { url: qqIcon, title: 'QQ' },
    { url: qqzoneIcon, title: 'QQ空间' },
  ].map(obj => ({
    icon: <img src={`${obj.url}`} alt={obj.title} style={{ width: 45 }} />,
    title: obj.title,
  }));


  showShareActionSheet = () => {
    let global = this;
    ActionSheet.showShareActionSheetWithOptions({
      options: this.iconDataList,
      title: '分享到',
      // message: 'I am description, description, description',
    },
    (buttonIndex) => {
      let type = buttonIndex > -1 ? this.iconDataList[buttonIndex].title : 'cancel';
      if(type==='cancel') return;
      global.props.generateImg("template_hotel");
      setTimeout(function(){
        let a = document.createElement("a");
        a.href="#FriendGroup";
        a.click();
      },0)
      return;
    });
  }

  textareaChange = (txt) => {
    document.getElementById("textInput_hotel").innerText = txt;
  }
  render() {
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          style={{backgroundColor:"#46ADFB"}}
          icon={<Icon type="left" />}
          onLeftClick={() => {
            let a = document.createElement("a");
            a.href="#Order";
            a.click();
          }}
        >订单分享</NavBar>



        {/* Input */}
        <List>
          <TextareaItem
            placeholder="说说你现在的感想吧……"
            rows={3}
            count={100}
            onChange = {this.textareaChange}
          />
        </List>

        <WhiteSpace />

        {/* Template */}
        <div id="template_hotel" className={styles["template"]}>
          <WingBlank>
          {/* Header */}
          <List>
            <Item
              thumb={<img src={avatarImg} style={{width: "45px", height: "45px", verticalAlign: "middle"}} alt="" />}
            >
              Iris <Brief>05-28 来自携程Ctrip.com</Brief>
            </Item>
          </List>
          </WingBlank>
          <hr size="1" className={styles["hr"]}/>
          <WhiteSpace />

          <WingBlank>
          <span className={styles["textInput"]} id="textInput_hotel"></span>
          <WhiteSpace />
          <WhiteSpace />

          <div className={styles["header"]}>
            <div className={styles["hotelIcons"]}>
                <img src={hotel_icon}></img>
            </div>
            <div className={styles["connectlines"]}>
                <img src={dqxx_d} />
            </div>
            <div className={styles["hotelDetails"]}>
                <span className={styles["date"]}>6月20日 / Fri</span>
                <span className={styles["starlevel"]}>★★★★</span>
                <span className={styles["title"]}>美国 / 丽思卡尔特酒店</span>
                <span className={styles["countryEn"]}>America</span>
                <span className={styles["hotelEn"]}>Ritz-Carlton</span>
            </div>
          </div>

          <img src={templateImg} className={styles["templateImg"]} />

          <div className={styles["footer"]}>
            <div className={styles["logo"]}>
              <img src={ctripLogoImg} alt="" />
            </div>

            <div className={styles["ecode"]}>
              <img src={codeImg} alt="" />
            </div>

            <div className={styles["logoText"]}>
                <span>长按图片[识别二维码]</span><br />
                <span>说走就走</span>
            </div>
          </div>

        </WingBlank>
        </div>

        <WhiteSpace />
        <WhiteSpace />

        <Button type="primary" onClick={this.showShareActionSheet} style={{backgroundColor:"#46ADFB","borderRadius": "0px"}}>分享</Button>
      </div>
    );
  }
}

export default HotelShare;
