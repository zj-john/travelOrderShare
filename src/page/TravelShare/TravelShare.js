import React, { Component } from 'react';
import { NavBar, Button, Icon, WingBlank, WhiteSpace, ActionSheet, List, TextareaItem } from 'antd-mobile';
import styles from './TravelShare.css';

// icon
import pyqIcon from './../../img/icon/pyq.png';
import wechatIcon from './../../img/icon/wechat.png';
import qqIcon from './../../img/icon/qq.png';
import weiboIcon from './../../img/icon/weibo.png';
import qqzoneIcon from './../../img/icon/qqzone.png';

import avatarImg from './../../img/avatar.png';
import templateImg from './../../img/share/Travel.png';
import ctripLogoImg from './../../img/ctrip_logo.png';
import codeImg from './../../img/code.png';


import left from './../../img/share/dqxx_c.png';
import right from './../../img/share/ddqx_d_right.png';
import haiou from './../../img/share/haiou.png';

const Item = List.Item;
const Brief = Item.Brief;

class TravelShare extends Component {
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
      title: '分享到'
    },
    (buttonIndex) => {
      let type = buttonIndex > -1 ? this.iconDataList[buttonIndex].title : 'cancel';
      if(type==='cancel') return;
      global.props.generateImg("template_travel");
      setTimeout(function(){
        let a = document.createElement("a");
        a.href="#FriendGroup";
        a.click();
      },0)
      return;
    });
  }

  textareaChange = (txt) => {
    document.getElementById("textInput_travel").innerHTML = txt;
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
        <div id="template_travel" className={styles["template"]}>
          <WingBlank>
          {/* Header */}
          <List>
            <Item
              thumb={<img src={avatarImg} style={{width: "45px", height: "45px", verticalAlign: "middle"}} alt="" />}
            >
              Iris <Brief className={styles["user_brief"]}>06-15 来自携程Ctrip.com</Brief>
            </Item>
          </List>
          </WingBlank>
          <hr size="1" className={styles["hr"]}/>
          <WhiteSpace />
          <WingBlank>
          <span className={styles["textInput"]} id="textInput_travel"></span>
          <WhiteSpace />
          <WhiteSpace />

          <div className={styles["header"]}>
            <div className={styles["leftImg"]}>
              <img src={left} />
            </div>
            <div className={styles["time"]}>
              <span>6月20日 / Fri 出发</span>
            </div>
            <div className={styles["rightImg"]}>
              <img src={right} />
            </div>

            <div className={styles["title"]}>
              <span>马尔代夫 / 康迪马岛7日5晚自由行</span>
            </div>
            <div className={styles["subtitle"]} >
              <span>Maldives</span>
            </div>
           <div className={styles["animalImg"]} >
             <img src={haiou} />
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

export default TravelShare;
