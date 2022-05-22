import React from "react";

const App = () => {
  const [gameView, setGameView] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [strike, setStrike] = React.useState(0);
  const [ball, setBall] = React.useState(0);
  const [numRule, setNumRule] = React.useState(false);
  const [text, setText] = React.useState("");
  const [num, setNum] = React.useState([]);
  const [checkNum, setCheckNum] = React.useState([]);

  const Start = () => {
    let num2 = [];
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * 9) + 1;
      if (num2.includes(random) === false) {
        num2.push(random);
      } else i--;
    }
    setNum(num2);
    setGameView(true);
    setStrike(0);
    setBall(0);
    setCheckNum([]);
    console.log(num2);
  };

  const InputNum = (e) => {
    const rule = /^[1-9]{3}$/;
    const check = e.target.value;
    setText(e.target.value);
    rule.test(check) ? setNumRule(true) : setNumRule(false);
    if (check.length === 3) {
      const firstCheck = +check.slice(0, 1);
      const middleCheck = +check.slice(1, 2);
      const lastCheck = +check.slice(2);
      setCheckNum([firstCheck, middleCheck, lastCheck]);
    }
  };

  const StrikeCheck = () => {
    let strikecheck = 0;
    if (numRule === true) {
      if (num[0] === checkNum[0]) {
        strikecheck += 1;
      }
      if (num[1] === checkNum[1]) {
        strikecheck += 1;
      }
      if (num[2] === checkNum[2]) {
        strikecheck += 1;
      }
    } else if (numRule !== true) {
      window.alert("0이아닌 숫자3자리 모두 입력해주세요.");
    }
    setStrike(strikecheck);
    setStart(true);
    BallCheck();
  };

  const BallCheck = () => {
    let ballcheck = 0;
    num.map((x) => {
      {
        checkNum.includes(x) ? (ballcheck += 1) : (ballcheck += 0);
      }
    });
    setBall(ballcheck);
  };

  const End = () => {
    if (window.confirm("홈런!!! 게임을 다시 시작하시겠습니까?")) {
      setNum([]);
      setText("");
      Start();
      setStart(false);
    } else {
      window.location.reload("./App.js");
    }
  };

  return (
    <div>
      {gameView ? (
        <div>
          <div>
            <input
              type='text'
              value={text}
              placeholder='답입력'
              maxLength={3}
              onChange={(e) => InputNum(e)}></input>
            <button onClick={() => StrikeCheck()}>확인</button>
          </div>
          {start === false ? (
            <div>게임을 시작합니다!</div>
          ) : strike === 0 && ball === 0 && start === true ? (
            <div>낫싱</div>
          ) : strike === 3 ? (
            End()
          ) : (
            <div>
              {strike}스트라이크, {`${ball}` - `${strike}`}볼 입니다!
            </div>
          )}
        </div>
      ) : (
        <button onClick={() => Start()}>시작하기</button>
      )}
    </div>
  );
};

export default App;
