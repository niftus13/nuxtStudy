// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  // 컴포넌트 단위로 필요한 부분만 클라이언트에서 hydrate(JS 실행) false
  experimental: {
    componentIslands: false,
  },

  // ✅ Docker 환경에서 필수
  watchers: {
    chokidar: {
      usePolling: true,
      interval: 100,
    },
  },

  // app 디렉토리로 변경
  // routeRules: {
  //   "/api/**": {
  //     cors: true,
  //   },
  // },
  
});
