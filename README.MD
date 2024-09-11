# Next.js 프로젝트 문서

## 서버사이드 렌더링 (SSR)

서버사이드 렌더링(SSR)은 페이지 요청마다 서버에서 페이지를 미리 렌더링하여 클라이언트에게 전달하는 방식입니다. 이를 통해 SEO(검색 엔진 최적화)를 개선하고, 초기 페이지 로딩 속도를 빠르게 할 수 있습니다. Next.js에서는 `getServerSideProps` 함수를 사용하여 SSR을 구현합니다. 이 함수는 각 요청마다 호출되며, 데이터를 서버에서 가져와 페이지 컴포넌트에 전달합니다.

```javascript
// pages/example.js

export async function getServerSideProps(context) {
  // 서버에서 데이터를 가져오는 로직
  const data = await fetchDataFromAPI();

  return {
    props: {
      data, // 이 props는 페이지 컴포넌트에 전달됩니다.
    },
  };
}

function ExamplePage({ data }) {
  return (
    <div>
      <h1>서버사이드 렌더링 예제</h1>
      <p>{data}</p>
    </div>
  );
}

export default ExamplePage;
위 예제에서 getServerSideProps 함수는 API에서 데이터를 가져와 ExamplePage 컴포넌트에 전달합니다. 페이지는 클라이언트에 의해 로드되기 전에 서버에서 미리 렌더링됩니다.

클라이언트사이드 렌더링
클라이언트사이드 렌더링은 특정 컴포넌트가 클라이언트에서만 렌더링되도록 하는 방식입니다. 이를 통해 SSR이 필요하지 않은 컴포넌트를 클라이언트에서만 로드할 수 있습니다. 다음 두 가지 방법을 사용하여 클라이언트사이드 렌더링을 구현할 수 있습니다.

1. useEffect 훅을 사용하는 방법
useEffect 훅을 사용하면 컴포넌트가 클라이언트에서만 렌더링되도록 할 수 있습니다. 이 방법은 서버에서 렌더링될 때는 해당 컴포넌트를 건너뛰고, 클라이언트에서만 렌더링하게 만듭니다.

import { useEffect, useState } from 'react';

function ClientOnlyComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 컴포넌트가 클라이언트에서만 렌더링되도록 설정
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <div>이 컴포넌트는 클라이언트에서만 렌더링됩니다.</div>;
}

export default ClientOnlyComponent;
위 코드에서 useEffect는 클라이언트에서만 실행되므로, 컴포넌트는 서버사이드에서 렌더링되지 않습니다. isClient 상태가 true일 때만 컴포넌트가 렌더링됩니다.

2. dynamic 함수를 사용하는 방법
Next.js의 dynamic 함수를 사용하여 특정 컴포넌트를 클라이언트에서만 동적으로 로드할 수 있습니다. 이 방법은 서버사이드 렌더링을 비활성화하고, 클라이언트에서만 해당 컴포넌트를 렌더링합니다.

import dynamic from 'next/dynamic';

// 서버사이드 렌더링을 비활성화한 상태로 컴포넌트 로드
const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), { ssr: false });

export default function Page() {
  return (
    <div>
      <h1>클라이언트사이드 컴포넌트 예제</h1>
      <ClientOnlyComponent />
    </div>
  );
}
위 예제에서 dynamic 함수는 ssr: false 옵션을 사용하여 ClientOnlyComponent를 서버사이드 렌더링에서 제외하고, 클라이언트에서만 로드하도록 설정합니다.

정적 페이지 생성 (SSG)
정적 페이지 생성(SSG)은 빌드 시점에 페이지를 미리 렌더링하여 정적 파일로 생성하는 방법입니다. 이를 통해 페이지 로드 속도가 빠르고, 서버 로드가 줄어드는 장점이 있습니다. Next.js에서는 getStaticProps와 getStaticPaths를 사용하여 SSG를 구현할 수 있습니다.

1. getStaticProps를 사용하는 방법
getStaticProps 함수는 빌드 시점에 데이터를 미리 가져와서 정적 페이지로 생성할 때 사용됩니다.

// pages/static-example.js

export async function getStaticProps() {
  // 빌드 시점에 데이터를 가져오는 로직
  const data = await fetchDataFromAPI();

  return {
    props: {
      data, // 이 props는 페이지 컴포넌트에 전달됩니다.
    },
  };
}

function StaticExamplePage({ data }) {
  return (
    <div>
      <h1>정적 페이지 예제</h1>
      <p>{data}</p>
    </div>
  );
}

export default StaticExamplePage;
이 예제에서 getStaticProps는 빌드 시점에 호출되어 API로부터 데이터를 가져오고, 그 데이터를 StaticExamplePage 컴포넌트에 전달하여 정적 페이지로 생성합니다.

2. getStaticPaths와 getStaticProps를 함께 사용하는 방법
동적 라우팅이 필요한 경우 getStaticPaths와 getStaticProps를 함께 사용하여 여러 정적 페이지를 생성할 수 있습니다.


// pages/posts/[id].js

export async function getStaticPaths() {
  const posts = await getPostsFromAPI();

  // 각 포스트의 ID를 기반으로 경로를 생성
  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // 각 포스트의 ID에 따라 데이터를 가져옴
  const post = await getPostById(params.id);

  return {
    props: {
      post, // 이 props는 페이지 컴포넌트에 전달됩니다.
    },
  };
}

function PostPage({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostPage;
위 예제에서 getStaticPaths는 빌드 시점에 동적 경로를 정의하고, getStaticProps는 각 경로에 해당하는 데이터를 가져와 정적 페이지로 생성합니다. fallback이 false로 설정되어 있는 경우, 빌드되지 않은 경로에 접근하면 404 페이지가 표시됩니다.
```
