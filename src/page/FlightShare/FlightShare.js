import React, { Component } from 'react';
import { NavBar, Button, Icon, WingBlank, WhiteSpace, ActionSheet, List, TextareaItem } from 'antd-mobile';

import styles from './FlightShare.css';

// icon
import pyqIcon from './../../img/icon/pyq.png';
import wechatIcon from './../../img/icon/wechat.png';
import qqIcon from './../../img/icon/qq.png';
import weiboIcon from './../../img/icon/weibo.png';
import qqzoneIcon from './../../img/icon/qqzone.png';

import avatarImg from './../../img/avatar.png';
import templateImg from './../../img/share/Flight.png';
import ctripLogoImg from './../../img/ctrip_logo.png';
import codeImg from './../../img/share/ecode.jpg';

import cxx from './../../img/share/cxx.png';
import dqxx_d from './../../img/share/dqxx_d.png';
import xfj from './../../img/share/xfj.png';
import djtsx_d from './../../img/share/djtsx_d.png';

const Item = List.Item;
const Brief = Item.Brief;


class FlightShare extends Component {
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
      global.props.generateImg("template_flight");
      setTimeout(function(){
        let a = document.createElement("a");
        a.href="#FriendGroup";
        a.click();
      },0)
      return;
    });
  }

  textareaChange = (txt) => {
    document.getElementById("textInput_flight").innerHTML = txt;
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
        <div id="template_flight" className={styles["template"]}>
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
          <span className={styles["textInput"]} id="textInput_flight"></span>
          <WhiteSpace />
          <WhiteSpace />

          <div className={styles["header"]}>
            <div className={styles["fromTime"]}>
              <span className={styles["time"]}>6月20日<br/>15:20/Fri</span>
            </div>
            <div className={styles["fromAir1"]}>
              <span className={styles["air"]}>上海航空<br/>FM9135</span>
            </div>
            <div className={styles["fromAir2"]}>
              <span className={styles["air"]}>日本航空<br/>FM9125</span>
            </div>
            <div className={styles["toTime"]}>
              <span className={styles["time"]}>6月22日<br/>08:30/Mon</span>
            </div>

            <div className={styles["startToMidImg"]}>
              <img src={dqxx_d}/>
            </div>
            <div className={styles["firstFlightImg"]} >
              <img src={xfj}/>
            </div>
            <div className={styles["secFlightImg"]} >
              <img src={xfj} />
            </div>
            <div className={styles["middleCityImg"]} >
              <img src={cxx} />
            </div>
            <div className={styles["midToEndImg"]} >
              <img src={djtsx_d} />
            </div>
            <div className={styles["fromCity"]} >
              <span className={styles["city"]}>上海</span>
            </div>
           <div className={styles["middleCity"]} >
             <span className={styles["air"]}>转日本<br/>停留5h</span>
           </div>
           <div className={styles["toCity"]} >
              <span className={styles["city"]}>巴黎</span>
            </div>
            <div className={styles["fromCityEn"]} >
              <span className={styles["cityEn"]}>ShangHai</span>
            </div>
            <div className={styles["toCityEn"]} >
              <span className={styles["cityEn"]}>Paris</span>
            </div>
            <div className={styles["otherInfo"]} >
              <span className={styles["time"]} style={{"letterSpacing":"2px"}}>三人 / 15h32min</span>
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

export default FlightShare;
