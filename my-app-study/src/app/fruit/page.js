"use client"; // 이 컴포넌트는 클라이언트 측에서 실행됨을 명시

import { useState } from "react"; // React의 useState 훅을 불러옴

export default function Fruit() { // Fruit 컴포넌트 정의
  let fruits = ["banana", "apple", "peach"]; // fruits 배열에 과일 목록 저장

  const [selectFruit, setSelectFruit] = useState(""); // 선택된 과일을 저장하는 상태 선언, 초기값은 빈 문자열

  // Click 함수: 클릭된 과일을 선택된 과일로 상태 업데이트
  const Click = (fruit) => {
    setSelectFruit(fruit); // 클릭된 과일을 상태로 저장
  };

  return (
    <div>
      <h4 className="title">상품목록</h4> {/* 제목 표시 */}
      <div className="fruit-container"> {/* 버튼들을 감싸는 부모 div */}
        {fruits.map((item, index) => {
          return (
            // 각 과일에 대해 버튼 생성
            <div className="fruit-B" key={index}> {/* 각 과일에 고유한 key를 부여하여 렌더링 */}
              <button type="button" className="buttons" onClick={() => Click(item)}> {/* 버튼 클릭 시 해당 과일을 Click 함수에 전달 */}
                {item} {/* 버튼 텍스트로 과일 이름 표시 */}
              </button>
            </div>
          );
        })}
      </div>
      <p className="ppp">{selectFruit ? selectFruit : "?"}</p> {/* 선택된 과일을 표시. 선택된 과일이 없으면 "?" 표시 */}
    </div>
  );
}
