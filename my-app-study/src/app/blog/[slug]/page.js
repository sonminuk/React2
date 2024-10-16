// src/app/blog/[slug]/page.js

"use client";

export default function Page(props) {
  const { slug } = props.params; // URL에서 슬러그 가져오기
  const { id, name } = props.searchParams; // 쿼리 파라미터 가져오기

  return (
    <div>
      <h1>Post Slug: {slug}</h1> {/* slug를 화면에 출력 */}
      <h1>ID: {id}</h1>
      <h1>Name: {name}</h1>
    </div>
  );
}

// http://localhost:3000/blog/slug?id=234&name=2345
