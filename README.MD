# Next.js 프로젝트 문서

# 202030418 손민욱

## 서버사이드 렌더링 (SSR)

서버사이드 렌더링(SSR)은 페이지 요청마다 서버에서 페이지를 미리 렌더링하여 클라이언트에게 전달하는 방식입니다. 이를 통해 SEO(검색 엔진 최적화)를 개선하고, 초기 페이지 로딩 속도를 빠르게 할 수 있습니다. Next.js에서는 `getServerSideProps` 함수를 사용하여 SSR을 구현합니다. 이 함수는 각 요청마다 호출되며, 데이터를 서버에서 가져와 페이지 컴포넌트에 전달합니다.

## 서버사이드 렌더링(SSR) 장점

1. **SEO 향상**

   - 서버에서 페이지를 미리 렌더링하여 검색 엔진이 완전한 HTML을 크롤링할 수 있어 SEO가 개선됩니다.

2. **빠른 초기 로딩 속도**

   - 클라이언트가 서버로부터 완전한 HTML을 받아오기 때문에, 초기 페이지 로딩 속도가 빠릅니다.

3. **동적 데이터 처리**

   - 요청 시마다 서버에서 최신 데이터를 가져와 페이지를 렌더링할 수 있습니다.

4. **대규모 애플리케이션에서의 안정성**
   - 서버에서 데이터를 처리하고 렌더링하므로, 대규모 애플리케이션에서도 안정적인 성능을 제공합니다.

## 서버사이드 렌더링(SSR) 단점

1. **서버 부하 증가**

   - 모든 페이지 요청마다 서버에서 렌더링을 수행해야 하므로, 트래픽이 많을 경우 서버 부하가 증가할 수 있습니다.

2. **긴 페이지 로드 시간**

   - 서버에서 렌더링 시간이 길어질 경우, 클라이언트로 전달되는 페이지의 로딩 시간이 길어질 수 있습니다.

3. **캐싱 어려움**

   - 동적으로 생성된 페이지는 정적 페이지와 달리 캐싱이 어렵고, 복잡한 캐싱 전략이 필요할 수 있습니다.

4. **복잡한 코드 구조**
   - 클라이언트사이드 렌더링과 병행하여 사용하면, 서버와 클라이언트 양쪽에서 코드 관리가 필요해 코드 구조가 복잡해질 수 있습니다.

##
`getServerSideProps`는 Next.js에서 서버사이드 렌더링(SSR)을 구현할 때 사용하는 함수입니다. 이 함수는 각 요청마다 서버에서 실행되며, 데이터를 가져와 페이지를 렌더링하기 전에 `props`로 전달합니다.

### 주요 특징

1. **서버에서만 실행**:
   - `getServerSideProps` 함수는 서버에서만 실행되며, 클라이언트에서는 실행되지 않습니다. 이를 통해 보안이 필요한 데이터를 안전하게 처리할 수 있습니다.

2. **요청마다 실행**:
   - 각 요청마다 호출되기 때문에, 실시간으로 변경되는 데이터를 페이지에 반영할 수 있습니다.

3. **페이지 프리로딩 지원**:
   - `getServerSideProps`를 사용하면, Next.js가 링크된 페이지를 미리 로딩하여 사용자 경험을 향상시킬 수 있습니다.

4. **에러 처리**:
   - 함수 내부에서 발생한 에러는 Next.js가 제공하는 에러 페이지로 전달되며, 적절한 상태 코드(예: 404, 500)도 함께 반환할 수 있습니다.

##


## 클라이언트사이드 렌더링(CSR)

클라이언트사이드 렌더링(CSR)은 브라우저에서 JavaScript를 통해 페이지를 동적으로 렌더링하는 방식입니다. 서버는 기본적인 HTML 구조와 함께 JavaScript 번들을 전달하고, 브라우저는 이 JavaScript를 실행하여 페이지를 완성합니다.

### 주요 특징

1. **초기 로딩 속도**:
   - 초기 로딩 시에는 서버에서 최소한의 HTML 파일만 전달되며, 나머지 콘텐츠는 브라우저에서 JavaScript를 실행하면서 렌더링됩니다. 이로 인해 첫 번째 페인트(FCP, First Contentful Paint)가 늦어질 수 있습니다.

2. **클라이언트에서의 인터랙션**:
   - CSR은 페이지 로딩 후에 모든 인터랙션이 클라이언트에서 발생합니다. 이를 통해 페이지 간 전환이 빠르고, 사용자 경험이 향상될 수 있습니다.

3. **SEO 어려움**:
   - 검색 엔진 크롤러가 JavaScript를 실행하지 않는 경우, CSR로 렌더링된 콘텐츠를 제대로 인덱싱하지 못할 수 있습니다. 이는 SEO에 불리할 수 있습니다.

4. **네트워크 효율성**:
   - CSR은 필요한 데이터를 클라이언트에서 동적으로 가져오기 때문에, 네트워크 요청을 효율적으로 관리할 수 있습니다. 필요한 데이터만 요청하여 페이지를 업데이트할 수 있습니다.

### 사용 예시

클라이언트사이드 렌더링을 위해서는 Next.js의 기본 설정을 사용할 수 있으며, `useEffect` 훅이나 `dynamic` 함수를 사용하여 특정 컴포넌트를 클라이언트에서만 렌더링할 수 있습니다.

```javascript
import { useEffect, useState } from 'react';

function ClientOnlyComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <div>이 컴포넌트는 클라이언트에서만 렌더링됩니다.</div>;
}

export default ClientOnlyComponent;
``````
이 예제에서는 useEffect 훅을 사용하여 컴포넌트를 클라이언트에서만 렌더링하고 있습니다. 페이지 초기 로딩 시 서버에서 이 컴포넌트는 렌더링되지 않으며, 클라이언트에서 useEffect가 실행된 후에만 화면에 나타납니다.


## 
``````
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
``````
위 예제에서 getServerSideProps 함수는 API에서 데이터를 가져와 ExamplePage 컴포넌트에 전달합니다. 페이지는 클라이언트에 의해 로드되기 전에 서버에서 미리 렌더링됩니다.

클라이언트사이드 렌더링
클라이언트사이드 렌더링은 특정 컴포넌트가 클라이언트에서만 렌더링되도록 하는 방식입니다. 이를 통해 SSR이 필요하지 않은 컴포넌트를 클라이언트에서만 로드할 수 있습니다. 다음 두 가지 방법을 사용하여 클라이언트사이드 렌더링을 구현할 수 있습니다.

## 


## 1. useEffect 훅을 사용하는 방법
useEffect 훅을 사용하면 컴포넌트가 클라이언트에서만 렌더링되도록 할 수 있습니다. 이 방법은 서버에서 렌더링될 때는 해당 컴포넌트를 건너뛰고, 클라이언트에서만 렌더링하게 만듭니다.
``````
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
``````
위 코드에서 useEffect는 클라이언트에서만 실행되므로, 컴포넌트는 서버사이드에서 렌더링되지 않습니다. isClient 상태가 true일 때만 컴포넌트가 렌더링됩니다.


## 
## 2. dynamic 함수를 사용하는 방법
Next.js의 dynamic 함수를 사용하여 특정 컴포넌트를 클라이언트에서만 동적으로 로드할 수 있습니다. 이 방법은 서버사이드 렌더링을 비활성화하고, 클라이언트에서만 해당 컴포넌트를 렌더링합니다.
``````
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
``````
위 예제에서 dynamic 함수는 ssr: false 옵션을 사용하여 ClientOnlyComponent를 서버사이드 렌더링에서 제외하고, 클라이언트에서만 로드하도록 설정합니다.


##



## 정적 페이지 생성 (SSG)
정적 페이지 생성(SSG)은 빌드 시점에 페이지를 미리 렌더링하여 정적 파일로 생성하는 방법입니다. 이를 통해 페이지 로드 속도가 빠르고, 서버 로드가 줄어드는 장점이 있습니다. Next.js에서는 getStaticProps와 getStaticPaths를 사용하여 SSG를 구현할 수 있습니다.

1. getStaticProps를 사용하는 방법
getStaticProps 함수는 빌드 시점에 데이터를 미리 가져와서 정적 페이지로 생성할 때 사용됩니다.
``````
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
``````
이 예제에서 getStaticProps는 빌드 시점에 호출되어 API로부터 데이터를 가져오고, 그 데이터를 StaticExamplePage 컴포넌트에 전달하여 정적 페이지로 생성합니다.

##

## 2. getStaticPaths와 getStaticProps를 함께 사용하는 방법
동적 라우팅이 필요한 경우 getStaticPaths와 getStaticProps를 함께 사용하여 여러 정적 페이지를 생성할 수 있습니다.

``````
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
``````
위 예제에서 getStaticPaths는 빌드 시점에 동적 경로를 정의하고, getStaticProps는 각 경로에 해당하는 데이터를 가져와 정적 페이지로 생성합니다. fallback이 false로 설정되어 있는 경우, 빌드되지 않은 경로에 접근하면 404 페이지가 표시됩니다.

- 46~48p까지