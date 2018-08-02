import React, { Component } from 'react';
import { NavBar, Icon,  List, TextareaItem, ImagePicker } from 'antd-mobile';

class FriendGroup extends Component {
  getImage = (index, fs) => {
    let a = document.createElement("a");
    a.href="#BigImage";
    a.click();
  }
  render() {
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          mode="light"
          icon={<Icon type="left" style={{color:"black"}}/>}
          onLeftClick={() => {
            let a = document.createElement("a");
            a.href="#Order";
            a.click();
          }}
          rightContent={"发表"}
        ></NavBar>

        {/* Input */}
        <List>
          <TextareaItem
            placeholder="这一刻的想法……"
            rows={3}
            onChange = {this.textareaChange}
          />
        </List>

        <ImagePicker
          files={this.props.imgData}
          onImageClick={this.getImage}
        />

      </div>
    );
  }
}

export default FriendGroup;
