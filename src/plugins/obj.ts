import type { App } from 'vue';

// 객체로 플러그인 작성
// options 타입은 샘플이므로 object로 처리...
const objPlugins = {
  install(app: App, options: object) {
    console.log('objPlugins app: ', app);
    console.log('objPlugins options: ', options);
    // app.component() 전역 컴포넌트
    // app.config.globalProperties 전역 애플리케이션 인스턴스에 속성 추가
    // app.directive 커스텀 디렉티브
    // app.provide() 리소스
  },
};

export default objPlugins;
