# Next.js 프로젝트 문서

# 202030418 손민욱

Next.js 프로젝트 생성
npx create-next-app@latest --experimental-app

`

# npx create-next-app <app-name>

이 명령어는 가장 기본적인 Next.js 앱을 생성합니다.

<app-name> 부분에 여러분이 원하는 앱 이름을 넣으세요.
기본 설정으로 프로젝트를 생성합니다.
패키지 관리자는 기본적으로 yarn을 사용합니다.

# npx create-next-app <app-name> --use-npm

이 명령어는 기본 Next.js 앱을 생성하지만, 패키지 관리자로 npm을 사용합니다.

<app-name> 부분에 여러분이 원하는 앱 이름을 넣으세요.
--use-npm 옵션은 yarn 대신 npm을 사용하도록 지정합니다.
npm을 선호하거나 yarn이 설치되어 있지 않은 경우 유용합니다.

# npx create-next-app <app-name> --example with-docker

이 명령어는 Docker 설정이 포함된 Next.js 앱을 생성합니다.

<app-name> 부분에 여러분이 원하는 앱 이름을 넣으세요.
--example with-docker 옵션은 Docker 관련 설정 파일이 포함된 템플릿을 사용합니다.
이 옵션은 앱을 Docker 컨테이너에서 실행하려는 경우 유용합니다.
Dockerfile과 docker-compose.yml 파일이 프로젝트에 포함됩니다.

각 명령어는 Next.js 앱을 생성하지만, 약간 다른 설정과 도구를 사용합니다. 첫 번째는 가장 기본적인 설정, 두 번째는 npm을 사용하는 설정, 세 번째는 Docker를 사용할 준비가 된 설정을 제공합니다. 프로젝트의 요구사항에 따라 적절한 명령어를 선택하면 됩니다.`

### 시작: npm run dev

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
import { useEffect, useState } from "react";

function ClientOnlyComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <div>이 컴포넌트는 클라이언트에서만 렌더링됩니다.</div>;
}

export default ClientOnlyComponent;
```

이 예제에서는 useEffect 훅을 사용하여 컴포넌트를 클라이언트에서만 렌더링하고 있습니다. 페이지 초기 로딩 시 서버에서 이 컴포넌트는 렌더링되지 않으며, 클라이언트에서 useEffect가 실행된 후에만 화면에 나타납니다.

##

```
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
```

위 예제에서 getServerSideProps 함수는 API에서 데이터를 가져와 ExamplePage 컴포넌트에 전달합니다. 페이지는 클라이언트에 의해 로드되기 전에 서버에서 미리 렌더링됩니다.

클라이언트사이드 렌더링
클라이언트사이드 렌더링은 특정 컴포넌트가 클라이언트에서만 렌더링되도록 하는 방식입니다. 이를 통해 SSR이 필요하지 않은 컴포넌트를 클라이언트에서만 로드할 수 있습니다. 다음 두 가지 방법을 사용하여 클라이언트사이드 렌더링을 구현할 수 있습니다.

##

## 1. useEffect 훅을 사용하는 방법

useEffect 훅을 사용하면 컴포넌트가 클라이언트에서만 렌더링되도록 할 수 있습니다. 이 방법은 서버에서 렌더링될 때는 해당 컴포넌트를 건너뛰고, 클라이언트에서만 렌더링하게 만듭니다.

```
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
```

위 코드에서 useEffect는 클라이언트에서만 실행되므로, 컴포넌트는 서버사이드에서 렌더링되지 않습니다. isClient 상태가 true일 때만 컴포넌트가 렌더링됩니다.

##

## 2. dynamic 함수를 사용하는 방법

Next.js의 dynamic 함수를 사용하여 특정 컴포넌트를 클라이언트에서만 동적으로 로드할 수 있습니다. 이 방법은 서버사이드 렌더링을 비활성화하고, 클라이언트에서만 해당 컴포넌트를 렌더링합니다.

```
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
```

위 예제에서 dynamic 함수는 ssr: false 옵션을 사용하여 ClientOnlyComponent를 서버사이드 렌더링에서 제외하고, 클라이언트에서만 로드하도록 설정합니다.

##

## 정적 페이지 생성 (SSG)

정적 페이지 생성(SSG)은 빌드 시점에 페이지를 미리 렌더링하여 정적 파일로 생성하는 방법입니다. 이를 통해 페이지 로드 속도가 빠르고, 서버 로드가 줄어드는 장점이 있습니다. Next.js에서는 getStaticProps와 getStaticPaths를 사용하여 SSG를 구현할 수 있습니다.

1. getStaticProps를 사용하는 방법
   getStaticProps 함수는 빌드 시점에 데이터를 미리 가져와서 정적 페이지로 생성할 때 사용됩니다.

```
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
```

이 예제에서 getStaticProps는 빌드 시점에 호출되어 API로부터 데이터를 가져오고, 그 데이터를 StaticExamplePage 컴포넌트에 전달하여 정적 페이지로 생성합니다.

##

## 2. getStaticPaths와 getStaticProps를 함께 사용하는 방법

동적 라우팅이 필요한 경우 getStaticPaths와 getStaticProps를 함께 사용하여 여러 정적 페이지를 생성할 수 있습니다.

```
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
```

위 예제에서 getStaticPaths는 빌드 시점에 동적 경로를 정의하고, getStaticProps는 각 경로에 해당하는 데이터를 가져와 정적 페이지로 생성합니다. fallback이 false로 설정되어 있는 경우, 빌드되지 않은 경로에 접근하면 404 페이지가 표시됩니다.

- 46~48p까지

여기까지 2장

```
app-router -> foo -> page.jsx

export default async function Foo() {
    let data = await fetch('http://api.vercel.app/blog')
    let posts = await data.json()
    return(
        <ul>
            {[posts.map((post) => (
                <li key={post.id}>{post.id}.{post.title}</li>
            ))]}
        </ul>
    )
}

```

-

# 3장 Next.js 기초와 내장 컴포넌트

- 클라이언트와 서버에서의 라우팅 시스템 작동 방식
- 페이지간 이동 최적화
- Next.js가 정적 자원을 제공하는 방법
- 자동 이미지 최적화와 새로운 image 컴포넌트를 사용한 이미지 제공 최적화 기법
- 컴포넌트에서 HTML 메타 데이터를 처리하는 방법
- \_app.js 와 \_document.js 파일 내용 및 커스터마이징 방법

# Next.js 주요 기능

## 목차

1. [클라이언트와 서버에서의 라우팅 시스템 작동 방식](#1-클라이언트와-서버에서의-라우팅-시스템-작동-방식)
2. [페이지간 이동 최적화](#2-페이지간-이동-최적화)
3. [Next.js가 정적 자원을 제공하는 방법](#3-nextjs가-정적-자원을-제공하는-방법)
4. [자동 이미지 최적화와 새로운 Image 컴포넌트](#4-자동-이미지-최적화와-새로운-image-컴포넌트)
5. [컴포넌트에서 HTML 메타 데이터 처리](#5-컴포넌트에서-html-메타-데이터-처리)
6. [\_app.js와 \_document.js 파일](#6-_appjs와-_documentjs-파일)

## 1. 클라이언트와 서버에서의 라우팅 시스템 작동 방식

Next.js는 파일 시스템 기반 라우팅을 사용합니다. 이는 `pages` 디렉토리 내의 파일 구조가 곧 애플리케이션의 라우트 구조가 됩니다.

### 서버 사이드 라우팅

- 초기 페이지 로드 시 서버에서 해당 페이지의 컴포넌트를 렌더링하여 HTML을 생성합니다.
- 동적 라우트(`[id].js`와 같은 형식)를 지원하여 URL 파라미터를 쉽게 처리할 수 있습니다.

### 클라이언트 사이드 라우팅

- 초기 로드 후에는 `Link` 컴포넌트를 통해 클라이언트 사이드 네비게이션을 수행합니다.
- 페이지 전환 시 전체 페이지를 다시 로드하지 않고, 필요한 컴포넌트만 업데이트합니다.

## 2. 페이지간 이동 최적화

Next.js는 여러 기술을 사용하여 페이지 간 이동을 최적화합니다:

1. **프리페칭(Prefetching)**: `Link` 컴포넌트가 뷰포트에 들어오면 자동으로 연결된 페이지의 JS 파일을 미리 로드합니다.

2. **코드 스플리팅**: 각 페이지별로 필요한 코드만 로드하여 초기 로딩 시간을 단축합니다.

3. **동적 임포트**: `next/dynamic`을 사용하여 컴포넌트를 동적으로 임포트할 수 있어, 필요한 시점에 코드를 로드할 수 있습니다.

4. **shallow routing**: URL을 변경하되 `getServerSideProps`, `getStaticProps`, `getInitialProps`를 다시 실행하지 않고 현재 상태를 유지합니다.

## 3. Next.js가 정적 자원을 제공하는 방법

Next.js는 `public` 디렉토리를 통해 정적 자원을 효율적으로 제공합니다:

1. **자동 서빙**: `public` 디렉토리에 있는 파일들은 자동으로 루트 URL에서 제공됩니다.

2. **캐싱**: 정적 자원에 대해 적절한 캐시 헤더를 설정하여 성능을 최적화합니다.

3. **최적화**: 이미지, 폰트 등의 자원을 자동으로 최적화하여 제공합니다.

4. **CDN 통합**: Vercel과 같은 플랫폼을 사용할 경우, CDN을 통한 전역 분산 제공이 가능합니다.

## 4. 자동 이미지 최적화와 새로운 Image 컴포넌트

Next.js의 `Image` 컴포넌트(`next/image`)는 이미지 최적화를 자동화합니다:

1. **자동 리사이징**: 다양한 디바이스에 맞는 크기로 이미지를 자동 조정합니다.

2. **레이지 로딩**: 뷰포트에 들어올 때만 이미지를 로드하여 초기 페이지 로드 속도를 개선합니다.

3. **포맷 최적화**: WebP와 같은 현대적인 이미지 포맷을 자동으로 사용합니다.

4. **placeholder 지원**: 이미지 로딩 중 blur 효과나 색상 placeholder를 표시할 수 있습니다.

사용 예:

```jsx
import Image from "next/image";

function MyImage() {
  return (
    <Image
      src="/my-image.jpg"
      alt="Description"
      width={500}
      height={300}
      layout="responsive"
    />
  );
}
```

## 5. 컴포넌트에서 HTML 메타 데이터 처리

Next.js는 `next/head` 컴포넌트를 통해 각 페이지의 `<head>` 요소를 쉽게 조작할 수 있게 합니다:

1. **동적 메타 데이터**: 페이지별로 다른 타이틀, 설명 등을 설정할 수 있습니다.

2. **SEO 최적화**: OpenGraph 태그, Twitter 카드 등 소셜 미디어 최적화를 위한 메타 태그를 쉽게 추가할 수 있습니다.

3. **중첩 사용**: 여러 `Head` 컴포넌트를 사용해 메타 데이터를 조합할 수 있습니다.

사용 예:

```jsx
import Head from "next/head";

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>
    </div>
  );
}
```

## 6. \_app.js와 \_document.js 파일

### \_app.js

`pages/_app.js` 파일은 모든 페이지를 감싸는 컴포넌트입니다:

- 페이지 변경 시 레이아웃 유지
- 페이지 변경 시 상태 유지
- 글로벌 CSS 추가

```jsx
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

### \_document.js

`pages/_document.js` 파일은 서버에서만 렌더링되며, HTML 문서의 구조를 정의합니다:

- `<html>` 및 `<body>` 태그 커스터마이징
- 공통 `<head>` 요소 추가
- 서버 사이드 렌더링을 위한 스타일 처리

```jsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

이 두 파일을 커스터마이징하여 Next.js 애플리케이션의 전체적인 구조와 동작을 제어할 수 있습니다.

# Next.js Navigation: Link vs router.push

Next.js에서는 페이지 간 네비게이션을 위해 주로 두 가지 방법을 사용합니다: `Link` 컴포넌트와 `router.push` 메서드. 각각의 특징과 사용법을 알아보겠습니다.

## 목차

1. [Link 컴포넌트](#link-컴포넌트)
2. [router.push 메서드](#routerpush-메서드)
3. [차이점](#차이점)
4. [언제 무엇을 사용해야 할까?](#언제-무엇을-사용해야-할까)

## Link 컴포넌트

`Link` 컴포넌트는 Next.js에서 제공하는 내장 컴포넌트로, 클라이언트 사이드 네비게이션을 위해 사용됩니다.

### 특징

- 선언적 방식의 네비게이션
- 자동 프리페칭 (prefetching)
- 접근성 (a11y) 지원

### 사용법

```jsx
import Link from "next/link";

function NavMenu() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
```

## router.push 메서드

`router.push`는 `useRouter` 훅을 통해 제공되는 프로그래매틱 네비게이션 메서드입니다.

### 특징

- 명령적 방식의 네비게이션
- 동적인 URL 생성에 유용
- 조건부 네비게이션에 적합

### 사용법

```jsx
import { useRouter } from "next/router";

function LoginButton() {
  const router = useRouter();

  const handleLogin = async (user) => {
    // 로그인 로직
    await loginUser(user);
    router.push("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

## 차이점

1. **사용 방식**:

   - `Link`는 선언적 (JSX 내에서 사용)
   - `router.push`는 명령적 (JavaScript 함수 내에서 사용)

2. **프리페칭**:

   - `Link`는 자동으로 링크된 페이지를 프리페치
   - `router.push`는 수동으로 프리페치 설정 필요

3. **SEO 및 접근성**:

   - `Link`는 일반 `<a>` 태그로 렌더링되어 SEO 및 접근성에 유리
   - `router.push`는 프로그래매틱하게 동작하여 SEO에 직접적인 영향 없음

4. **동적 라우팅**:
   - `router.push`는 복잡한 동적 라우팅에 더 유연
   - `Link`도 동적 `href`를 지원하지만, 복잡한 로직에는 제한적

## 언제 무엇을 사용해야 할까?

- **`Link` 사용**:

  - 정적인 네비게이션 링크 (메뉴, 네비게이션 바 등)
  - SEO와 접근성이 중요한 경우
  - 사용자가 클릭할 수 있는 모든 일반적인 링크

- **`router.push` 사용**:
  - 폼 제출 후 리다이렉트
  - 조건부 네비게이션 (예: 인증 상태에 따른 리다이렉트)
  - 프로그래매틱하게 URL을 조작해야 하는 경우
  - 복잡한 라우팅 로직이 필요한 경우

두 방법 모두 Next.js의 클라이언트 사이드 라우팅을 활용하므로, 전체 페이지 리로드 없이 빠른 네비게이션을 제공합니다. 상황에 따라 적절한 방법을 선택하여 사용하면 됩니다.

## 7. 로컬 이미지 최적화

Next.js의 Image 컴포넌트는 로컬에 저장된 이미지도 효과적으로 최적화할 수 있습니다. 이는 웹 성능 향상에 큰 도움이 됩니다.

### 특징

- 자동 이미지 크기 최적화
- 레이지 로딩
- 블러 플레이스홀더 지원
- WebP와 같은 현대적 포맷으로 자동 변환

### 사용법

1. 먼저 이미지 파일을 프로젝트 디렉토리 내에 위치시킵니다. (예: `public/images/profile.jpg`)

2. 컴포넌트에서 이미지를 import하고 Image 컴포넌트를 사용합니다:

```jsx
import Image from "next/image";
import profilePic from "../../public/images/profile.jpg";

function Profile() {
  return (
    <Image
      src={profilePic}
      alt="프로필 사진"
      // width와 height는 원본 이미지의 크기와 일치해야 합니다
      width={500}
      height={500}
      placeholder="blur"
    />
  );
}
```

### 주의사항

- `src`에 import한 이미지 객체를 직접 전달합니다.
- `width`와 `height`는 원본 이미지의 크기와 일치해야 합니다. 이는 레이아웃 시프트를 방지하기 위함입니다.
- `placeholder="blur"`를 사용하면 이미지 로딩 중 자동으로 블러 효과가 적용됩니다.

### 장점

1. **성능 최적화**: Next.js가 빌드 시점에 이미지를 최적화하여 더 작은 파일 크기로 제공합니다.
2. **레이아웃 안정성**: 정확한 크기 지정으로 Cumulative Layout Shift(CLS)를 방지합니다.
3. **유연한 반응형 디자인**: `layout` prop을 통해 다양한 화면 크기에 대응할 수 있습니다.

### 예시: 반응형 이미지

```jsx
import Image from "next/image";
import profilePic from "../../public/images/profile.jpg";

function ResponsiveProfile() {
  return (
    <div style={{ width: "100%", height: "300px", position: "relative" }}>
      <Image
        src={profilePic}
        alt="프로필 사진"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}
```

이 예시에서는 `layout="fill"`을 사용하여 이미지를 컨테이너에 맞추고, `objectFit="cover"`로 이미지 비율을 유지하면서 컨테이너를 채웁니다.

로컬 이미지 최적화를 통해 웹사이트의 로딩 속도를 개선하고 사용자 경험을 향상시킬 수 있습니다. Next.js의 Image 컴포넌트는 이러한 최적화를 쉽게 구현할 수 있게 해줍니다.

Static Resource

rest api

- 기본 설계 규칙

json Server

-json-server src/data.json --port 3001 


axios

# Next.js 개발 노트

## 목차

### 3. 메타데이터와 페이지 커스터마이징

#### 3.3 메타데이터
- Next.js에서 메타데이터는 `Metadata` 타입을 사용하여 정의할 수 있습니다.
- 웹사이트의 기본 타이틀, 설명, 오픈 그래프, 트위터 카드 등을 설정할 수 있습니다.
- 동적으로 메타데이터를 생성하거나 페이지별로 다른 메타데이터를 적용할 수 있습니다.

#### 3.4 페이지 커스터마이징

##### app.js 페이지
- 전역 레이아웃, 스타일, 상태 관리 등을 설정할 수 있는 페이지입니다.
- 모든 페이지에 공통으로 적용되는 컴포넌트나 로직을 정의할 수 있습니다.
- `AppProps`를 통해 페이지 컴포넌트와 페이지 props에 접근할 수 있습니다.

##### document.js 페이지
- HTML 문서의 기본 구조를 커스터마이징할 수 있는 페이지입니다.
- 언어 설정, 폰트 preconnect, 문자셋 등을 설정할 수 있습니다.
- `<Head>`, `<Main>`, `<NextScript>` 컴포넌트를 사용하여 문서 구조를 제어합니다.

### 4. 코드 구성과 데이터 불러오기

#### 4.1 디렉터리 구조 구성
효율적인 프로젝트 구조는 코드의 가독성과 유지보수성을 높입니다:
- `components/`: 재사용 가능한 UI 컴포넌트
  - `common/`: 버튼, 레이아웃 등 공통 컴포넌트
  - `feature/`: 특정 기능에 특화된 컴포넌트
- `utils/`: 유틸리티 함수 (포맷터, 밸리데이터 등)
- `public/`: 정적 자원 (이미지, 아이콘)
- `styles/`: 글로벌 스타일, 테마
- `lib/`: API 호출, 데이터베이스 연결 등의 로직

#### 4.2 데이터 불러오기

##### 서버 사이드 데이터 페칭
- Next.js는 서버 컴포넌트에서 직접 비동기 데이터 페칭을 지원합니다.
- `async/await` 문법을 사용하여 데이터를 쉽게 불러올 수 있습니다.
- 데이터 캐싱 옵션을 통해 성능을 최적화할 수 있습니다.

##### REST API 사용
- 서버 사이드: `fetch()` 함수를 사용하여 데이터를 불러옵니다.
- 캐싱 전략 선택 가능 (`no-store`, `force-cache`)
- 클라이언트 사이드: `useState`, `useEffect`를 활용하여 데이터를 동적으로 불러옵니다.

##### GraphQL API 사용
- `graphql-request` 라이브러리를 사용하여 GraphQL 쿼리 실행
- 타입 안전성과 간결한 쿼리 작성 가능
- 서버 또는 클라이언트 사이드에서 모두 사용 가능

## 추가 팁
- 성능 최적화를 위해 적절한 데이터 페칭 전략을 선택하세요.
- 컴포넌트와 유틸리티를 모듈화하여 재사용성을 높이세요.
- 메타데이터를 통해 SEO와 소셜 미디어 최적화를 고려하세요.

## 학습 리소스
- [Next.js 공식 문서](https://nextjs.org/docs)
- [MDN Web Docs](https://developer.mozilla.org)
- [React 공식 문서](https://reactjs.org)


# 5. 지역 및 전역 상태 관리

## 5.1 지역 상태 관리

### React Hooks를 활용한 지역 상태 관리
```typescript
'use client'
import { useState, useReducer } from 'react'

// useState 사용 예시
export function SimpleCounter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  )
}

// useReducer 사용 예시
interface State {
  count: number
  error: string | null
}

type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'error', payload: string }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'error':
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export function AdvancedCounter() {
  const [state, dispatch] = useReducer(reducer, { 
    count: 0, 
    error: null 
  })

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>증가</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>감소</button>
      {state.error && <p>Error: {state.error}</p>}
    </div>
  )
}
```

## 5.2 전역 상태 관리

### Context API를 활용한 전역 상태 관리
```typescript
'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

// 전역 상태 타입 정의
interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
}

// Context 생성
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Provider 컴포넌트
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

// 커스텀 훅을 통한 Context 사용
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme은 ThemeProvider 내부에서 사용해야 합니다.')
  }
  return context
}

// 컴포넌트에서 사용 예시
export function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
    </button>
  )
}

// 앱 루트에서 Provider 사용
export function RootLayout() {
  return (
    <ThemeProvider>
      {/* 다른 컴포넌트들 */}
      <ThemeToggleButton />
    </ThemeProvider>
  )
}
```

### 복잡한 전역 상태 관리 예시
```typescript
'use client'
import React, { createContext, useContext, useReducer, ReactNode } from 'react'

// 사용자 상태 인터페이스
interface User {
  id: number
  name: string
  email: string
}

// 전역 상태 인터페이스
interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

// 액션 타입 정의
type AuthAction = 
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING' }

// 리듀서 함수
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

// Context 생성
const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
} | undefined>(undefined)

// Provider 컴포넌트
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
  })

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

// 커스텀 훅
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth는 AuthProvider 내부에서 사용해야 합니다.')
  }
  return context
}

// 로그인 함수 예시
export async function login(email: string, password: string) {
  const { dispatch } = useAuth()
  
  dispatch({ type: 'SET_LOADING' })
  
  try {
    // 실제 로그인 로직 구현
    const user = await authenticateUser(email, password)
    dispatch({ type: 'LOGIN_SUCCESS', payload: user })
  } catch (error) {
    dispatch({ 
      type: 'LOGIN_FAILURE', 
      payload: error instanceof Error ? error.message : '로그인 실패' 
    })
  }
}
```

## 상태 관리 전략 비교

### 지역 상태 관리
- `useState`: 간단한 상태 관리에 적합
- `useReducer`: 복잡한 상태 로직에 유용

### 전역 상태 관리
- Context API: 간단한 전역 상태 공유에 적합
- 복잡한 상태 관리는 Redux, Zustand 등의 라이브러리 고려

## 주의사항
- 과도한 전역 상태는 성능 저하 가능
- 컴포넌트 간 데이터 흐름을 명확히 설계
- 상태 관리 로직은 최대한 간결하고 예측 가능하게 유지

# Redux 상태 관리 in Next.js

## 설치 및 기본 설정
```bash
npm install @reduxjs/toolkit react-redux
npm install -D @types/react-redux
```

## Redux Toolkit 구조

### 1. Store 설정
```typescript
// lib/store.ts
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
})

// RootState와 Dispatch 타입 정의
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

### 2. Slice 생성
```typescript
// lib/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

### 3. 비동기 액션 생성 (Thunk)
```typescript
// lib/userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface User {
  id: number
  name: string
  email: string
}

interface UserState {
  users: User[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null
}

// 비동기 액션 생성
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  }
)

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export default userSlice.reducer
```

### 4. Redux Provider 설정
```typescript
// pages/_app.tsx
'use client'
import { Provider } from 'react-redux'
import { store } from '../lib/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
```

### 5. 컴포넌트에서 사용
```typescript
// components/Counter.tsx
'use client'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../lib/store'
import { 
  increment, 
  decrement, 
  incrementByAmount 
} from '../lib/counterSlice'

export function Counter() {
  // 상태 선택
  const count = useSelector((state: RootState) => state.counter.value)
  
  // 디스패치 훅
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Add 5
      </button>
    </div>
  )
}
```

### 6. 선택자 최적화
```typescript
// lib/hooks.ts
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store'

// 타입이 지정된 훅 생성
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
```

## Redux 개발 도구
```bash
npm install redux-devtools-extension
```

## 주요 Redux 패턴
1. **Slice**: 리듀서와 액션을 한 곳에서 관리
2. **Thunk**: 비동기 로직 처리
3. **Selector**: 상태 선택 최적화
4. **Immutable Update**: 불변성 유지

## 성능 최적화 팁
- `useSelector`의 최소 상태 선택
- 메모이제이션 활용 (`createSelector`)
- 불필요한 리렌더링 방지

## 주의사항
- 클라이언트 컴포넌트에서만 Redux 사용
- 서버 컴포넌트와 상태 동기화 주의
- 과도한 전역 상태 사용 자제

# Next.js 프로젝트 GitHub 배포 가이드

## 1. GitHub 저장소 준비

### 1.1 GitHub 저장소 생성
```bash
# 프로젝트 디렉터리로 이동
cd your-nextjs-project

# Git 초기화
git init

# .gitignore 파일 생성
touch .gitignore
```

### 1.2 .gitignore 설정
```gitignore
# 의존성 폴더
/node_modules

# 빌드 출력
/.next/
/out/
/build

# 환경 변수
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# 로그
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE 설정
.idea/
.vscode/
*.swp
.DS_Store
```

## 2. GitHub 배포 방법

### 2.1 GitHub Actions를 이용한 자동 배포 (Vercel)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Build Project
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### 2.2 GitHub Pages 배포
```yaml
# .github/workflows/github-pages.yml
name: GitHub Pages Deployment

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Build Project
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 3. 배포 스크립트 설정

### package.json 설정
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export",
    "deploy": "next build && next export && touch out/.nojekyll"
  }
}
```

## 4. 환경 변수 관리

### 4.1 로컬 환경 변수
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_SECRET=your_secret_key
```

### 4.2 GitHub Secrets 설정
1. GitHub 저장소 설정 → Secrets and variables
2. Actions secrets 섹션에서 환경 변수 추가
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

## 5. 배포 최적화 팁

### 5.1 정적 내보내기 설정
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // 정적 내보내기를 위한 설정
  trailingSlash: true,
  
  // 동적 경로 설정
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  }
}

module.exports = nextConfig
```

## 6. 배포 문제 해결

### 일반적인 배포 문제
1. 경로 문제: 정적 자산 경로 확인
2. 환경 변수 누락
3. 빌드 스크립트 오류
4. 의존성 충돌

### 디버깅 팁
- GitHub Actions 로그 확인
- Vercel 또는 GitHub Pages 배포 로그 점검
- 로컬 빌드와 배포 빌드 비교

## 7. 주의사항
- 민감한 정보는 절대 공개 저장소에 업로드 금지
- GitHub Secrets 활용
- 환경별 설정 분리

## 참고 자료
- [Next.js 공식 배포 문서](https://nextjs.org/docs/deployment)
- [GitHub Actions 문서](https://docs.github.com/en/actions)
- [Vercel 배포 가이드](https://vercel.com/docs/frameworks/nextjs)
```

이 문서는 Next.js 프로젝트를 GitHub에 배포하는 포괄적인 가이드입니다. GitHub Actions를 활용한 Vercel 및 GitHub Pages 배포 방법, 환경 변수 관리, 배포 최적화 팁 등을 포함하고 있습니다.

주요 내용:
1. GitHub 저장소 준비
2. 배포 워크플로우 설정
3. 환경 변수 및 시크릿 관리
4. 정적 내보내기 설정
5. 배포 문제 해결 방법

필요하시다면 언제든 수정하거나 추가 설명을 요청해주세요.