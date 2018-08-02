import React, { Component } from 'react';
import { NavBar, Grid, List, WhiteSpace } from 'antd-mobile';
import _ from 'lodash';
import avatarImg from './../../img/order/robot.png';
import clkImg from './../../img/order/clk.png';
import hbdpImg from './../../img/order/hbdp.png';
import jdddfxImg from './../../img/order/jdddfx.png';
import jpddfxImg from './../../img/order/jpddfx.png';
import lyddfxImg from './../../img/order/lyddfx.png';
import wldImg from './../../img/order/wld.png';

const Item = List.Item;
const Brief = Item.Brief;

class Order extends Component {
  hrefTo = (id) => {
    if(!id) return;
    let idList = ["share", "order", "friend-group"];
    _.pull(idList, id);
    document.getElementById(id).style.display = "block";
    idList.map(function(id) {
      document.getElementById(id).style.display = "none";
    });
    return true;
  }

  render() {
    const menus = [
      {
        icon:  hbdpImg,
        text: '航班点评',
        href: ''
      },{
        icon:  wldImg,
        text: '微领队',
        href: ''
      },{
        icon:  clkImg,
        text: '常旅卡',
        href: ''
      },{
        icon: jpddfxImg,
        text: '机票订单分享',
        href: 'FlightShare'
      },{
        icon:  jdddfxImg,
        text: '酒店订单分享',
        href: 'HotelShare'
      },{
        icon:  lyddfxImg,
        text: '旅游订单分享',
        href: 'TravelShare'
      }
    ];

    const questions = [
      "我要报销", "需要电子版行程单", "可以开发票吗", "查询邮寄进度", "报销凭证未收到"
    ];
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          style={{backgroundColor:"#46ADFB"}}
        >我的订单</NavBar>

        <Grid data={menus}
          columnNum={3}
          renderItem={dataItem => (
            <a href={'#'+ dataItem.href}>
              <div style={{ padding: '12.5px' }}  key={dataItem.href}>
                <img src={dataItem.icon} style={{ width: '40px', height: '40px' }} alt="" />
                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                  <span>{dataItem.text}</span>
                </div>
              </div>
            </a>
          )}
        />

        <WhiteSpace />

        <List>
          <Item
            arrow="horizontal"
            thumb={<img src={avatarImg} style={{width: "45px", height: "45px", verticalAlign: "middle"}} alt="" />}
          >
            我的服务管家 <Brief>一对一地贴心服务您的行程</Brief>
          </Item>
        </List>

        <WhiteSpace />
        <List renderHeader={() => '常见问题'} className="my-list">
          {
            questions.map(function(data, index){
              return <Item arrow="horizontal" key={index}>{data}</Item>
            })
          }
        </List>
      </div>
    );
  }
}

export default Order;
