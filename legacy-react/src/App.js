import React from 'react';

class OneTimeButton extends React.Component {
  // stateの初期化...
  state = {
    clicked: false
  }

  // クリックハンドラの作成
  handleClick = () => {
    // ハンドラはボタンが使用不可であれば呼ばれないため、
    // ここでクリックを発火しても安心です。
    console.log("Click!!")

    // OK。もうクリックする必要はありません。
    this.setState({ clicked: true });
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        disabled={this.state.clicked}
      >
        You Can Only Click Me Once
      </button>
    );
  }
}

export default OneTimeButton;