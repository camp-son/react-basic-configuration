# 리액트 CRA 없이 서비스 구성하고 배포하기

# 개요

리액트 CRA를 통해 프로젝트를 간단히 구성할 수 있지만, `eject`로 숨겨져 있는 설정들을 볼 수 있습니다. 숨겨져 있는 설정들을 보면 CRA로 생성된 프로젝트에 비해 많은 설정 정보와 의존성이 걸린 패키지들을 볼 수 있습니다.
하지만, 이러한 자동 설정에 의해 Babel과 Webpack 설정에 대해 모르고 넘어간다면 나중에 커스터마이징 할 때 어려움을 겪을 것으로 예상이 됩니다.
리액트와 Babel, Webpack를 한번에 알아보면서 프로젝트 초기 구성을 잡아보고 심화로 Typescript, Prettier, ESLint 등을 추가로 설정해보겠습니다.

# 환경 정보

- **VSCode**
- **Yarn**
- **React**
- **Babel & Webpack**
- Typescript(Option)
- Prettier(Option)
- ESLint(Option)

# 초기 환경 구성

## 폴더

```
(root)
 ├ `dist` -> 배포를 위해 빌드된 파일을 포함하는 폴더 입니다.
 ├ `public` -> 정적 리소스를 포함하는 폴더 입니다.
 ├ `src` -> 소스 코드를 포함하는 폴더 입니다.
```

## 리액트

[공식 홈페이지(번역)](https://ko.reactjs.org/)
리액트를 개발하기 위한 기본적인 패키지를 설치합니다.

<details>
<summary>자세히 보기</summary>
<div>

[react](https://www.npmjs.com/package/react) 
리액트를 사용하기 위한 코어 소스가 포함되어 있는 패키지입니다.

[react-dom](https://www.npmjs.com/package/react-dom)
리액트와 DOM을 연결시켜주는 소스가 포함되어 있는 패키지입니다.

```
npm install react react-dom

or

yarn add react react-dom
```

</div>
</details>

## 바벨

[공식 홈페이지](https://babeljs.io/)
리액트는 ES6와 JSX를 사용하기 때문에 브라우저 호환성을 위하여 필요한 바벨 라이브러리를 설치하고 루트에 `babel.config.js` 파일을 생성합니다.

<details>
<summary>자세히 보기</summary>
<div>

[@babel/core](https://babeljs.io/docs/en/babel-core)
바벨을 사용하기 위한 코어 패키지 입니다.

[@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
리액트에서 jsx를 js로 트랜스파일링 하기 위한 플러그인 집합 패키지입니다.

[@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
ES6+ 버전의 코드를 이전 버전의 JS로 트랜스파일링 하기 위한 패키지입니다.

```
npm install --save-dev @babel/core @babel/preset-react @babel/preset-env

or 

yarn add -D @babel/core @babel/preset-react @babel/preset-env 
```

</div>
</details>

## 웹팩

[공식 홈페이지(번역)](https://webpack.kr/)
여러 의존성이 걸려있는 파일들을 매핑하여 번들링하는 정적 모듈 번들러를 설치합니다.

### 기본 설정

<details>
<summary>자세히 보기</summary>
<div>

[webpack](https://www.npmjs.com/package/webpack)
웹팩을 사용하기 위한 패키지 입니다.

[webpack-cli](https://www.npmjs.com/package/webpack)
웹팩의 CLI(Command Line Interface) 패키지 입니다.

[webpack](https://www.npmjs.com/package/webpack)
라이브 리로딩을 제공하는 개발서버와 웹팩을 사용하기 위한 패키기 입니다.

```
npm install --save-dev webpack webpack-cli webpack-dev-server

or

yarn add -D webpack webpack-cli webpack-dev-server
```
</div>
</details>

### 로더 설정

파일들을 번들링 하면서 JS 파일을 트랜스파일링 할 때 적용하기 위한 로더를 설치합니다.

<details>
<summary>자세히 보기</summary>
<div>

[Babel Loader](https://www.npmjs.com/package/babel-loader)
바벨과 웹팩을 이용하여 JS를 트랜스파일링 할 수 있게 해주는 로더 패키지 입니다.

[Style Loader](https://www.npmjs.com/package/style-loader)
CSS를 DOM에 주입할 수 있게 해주는 로더 패키지 입니다.

[CSS Loader](https://www.npmjs.com/package/css-loader)
CSS를 import하여 사용할 수 있게 해주는 로더 패키지 입니다.

[File Loader](https://www.npmjs.com/package/file-loader)
파일을 import하여 사용할 수 있게 해주는 로더 패키지 입니다.

```
npm install --save-dev babel-loader style-loader css-loader file-loader 

or

yarn add -D babel-loader style-loader css-loader file-loader
```

</div>
</details>

### 플러그인 설정

번들링 된 파일에 대한 설정을 위한 플러그인을 설치합니다.

<details>
<summary>자세히 보기</summary>
<div>

[HtmlWebpackPlugin](https://www.npmjs.com/package/html-webpack-plugin)
번들을 제공하기 위해 HTML 파일 생성을 단순화 해주는 플러그인 입니다.

[CleanWebpackPlugin]()
번들링 된 파일에서 다시 번들링 될 때 사용되지 않는 파일을 제거해주는 플러그인 입니다.

```
npm install --save-dev html-webpack-plugin clean-webpack-plugin

or 

yarn add -D html-webpack-plugin clean-webpack-plugin
```

</div>
</details>

### 설정 파일 추가

[기본 설정](#기본-설정) > [로더 설정](#로더-설정) > [플러그인 설정](#플러그인-설정) 과정이 끝났다면 `webpack.config.js` 파일을 생성하여 웹팩 설정을 해줍니다.

**참고** [webpack.config.js](/webpack.config.js)
