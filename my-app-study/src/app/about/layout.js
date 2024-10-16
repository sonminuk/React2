// src/app/about/layout.js

// 부모 layout의 metadata를 가져오되 다른 이름을 사용합니다
const { metadata: parentMetadata } = require("../layout");

export const metadata = {
  ...parentMetadata, // 부모 metadata를 상속
  title: "About",
  description: "About...",
};

export default function AboutLayout({ children }) {
  return <>
    <h3>*** Rayout ***</h3>
    {children}
    </>;
}