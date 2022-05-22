import React from "react";

const App = () => {
  const [num, setNum] = React.useState([]);
  const [checkNum, setCheckNum] = React.useState([]);

  // 난수 생성
  const Start = () => {
    let num2 = [];
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * 9) + 1;
      if (num2.includes(random) === false) {
        num2.push(random);
      } else i--;
    }
    setNum(num2);
    console.log(num2); // 콘솔에 정답
  };

  //입력값 저장
  const InputNum = (e) => {
    const check = e.target.value;
    if (check.length === 3) {
      const firstCheck = +check.slice(0, 1);
      const middleCheck = +check.slice(1, 2);
      const lastCheck = +check.slice(2);
      setCheckNum([firstCheck, middleCheck, lastCheck]);
    }
  };

  return (
    <div>
      <input type='text' placeholder='답입력' maxLength={3} onChange={(e) => InputNum(e)}></input>
      <button onClick={() => Start()}>시작하기</button>
    </div>
  );
};

export default App;
