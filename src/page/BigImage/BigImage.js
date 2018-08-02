import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class BigImage extends Component {
  render() {
    console.log(this.props);
    let imgSrc = this.props.imgSrc;
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            let a = document.createElement("a");
            a.href="#FriendGroup";
            a.click();
          }}
        ></NavBar>

        <img src={imgSrc} style={{width:"100%"}} alt={'result'}/>

      </div>
    );
  }
}

export default BigImage;
