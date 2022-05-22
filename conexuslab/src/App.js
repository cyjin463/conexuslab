import React from "react";

const App = () => {
  const [num, setNum] = React.useState([]);

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

  return (
    <div>
      <button onClick={() => Start()}>시작하기</button>
    </div>
  );
};

export default App;
