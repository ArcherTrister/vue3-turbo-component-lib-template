// .vitepress/config.mts
import { defineConfig as defineConfig4 } from "file:///Users/archertrister/vue3-turbo-component-lib-template/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.17.1_@types+node@22.10.7_async-validator@4.2.5_postc_tfvc3eplekfampcg7tfsz6miue/node_modules/vitepress/dist/node/index.js";

// .vitepress/config/shared.ts
import { defineConfig } from "file:///Users/archertrister/vue3-turbo-component-lib-template/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.17.1_@types+node@22.10.7_async-validator@4.2.5_postc_tfvc3eplekfampcg7tfsz6miue/node_modules/vitepress/dist/node/index.js";
import { vitepressDemoPlugin } from "file:///Users/archertrister/vue3-turbo-component-lib-template/node_modules/.pnpm/vitepress-demo-plugin@1.1.3_vitepress@1.5.0_@algolia+client-search@5.17.1_@types+node@22.10.7_l6q33r46n6mv7ygqca5snvra7u/node_modules/vitepress-demo-plugin/dist/index.js";
import path from "node:path";
var __vite_injected_original_dirname = "/Users/archertrister/vue3-turbo-component-lib-template/apps/docs/.vitepress/config";
var shared = defineConfig({
  // 设置基础路径,用于GitHub Pages部署
  base: "/vue3-turbo-component-lib-template/",
  // 启用最后更新时间
  lastUpdated: true,
  // 生成干净的 URL（去掉.html后缀）
  cleanUrls: true,
  // 将元数据拆分为单独的 chunk
  metaChunk: true,
  // URL重写规则,将zh/开头的路径重写为根路径
  rewrites: {
    "zh/:rest*": ":rest*"
  },
  // 配置HTML头部标签
  head: [["link", { rel: "icon", href: "/vue3-turbo-component-lib-template/favicon.ico" }]],
  // Markdown配置
  markdown: {
    // 配置Markdown解析器
    config(md) {
      md.use(vitepressDemoPlugin, {
        demoDir: path.resolve(__vite_injected_original_dirname, "../../examples")
      });
    }
  }
});

// .vitepress/config/en.ts
import { defineConfig as defineConfig2 } from "file:///Users/archertrister/vue3-turbo-component-lib-template/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.17.1_@types+node@22.10.7_async-validator@4.2.5_postc_tfvc3eplekfampcg7tfsz6miue/node_modules/vitepress/dist/node/index.js";
var en = defineConfig2({
  lang: "en-US",
  title: "Library Template Doc",
  description: "A Vue3-based Component Library and Utility Collection",
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: 'Others', link: '/markdown-examples' },
      { text: "Blog", link: "https://huangmingfu.github.io/my-blog" },
      {
        text: "More",
        items: [
          {
            text: "Changelog",
            link: "https://github.com/huangmingfu/vue3-turbo-component-lib-template/blob/master/CHANGELOG.md"
          }
          // {
          //   text: 'Contribute',
          //   link: '',
          // },
        ]
      }
    ],
    sidebar: [
      {
        text: "Quick Start",
        items: [{ text: "Introduction", link: "en/guide/index" }]
      },
      {
        text: "Components (@mylib/ui)",
        items: [
          { text: "Button", link: "en/packages/ui/button" },
          { text: "Dialog", link: "en/packages/ui/dialog" }
        ]
      },
      {
        text: "Hooks (@mylib/hooks)",
        items: [{ text: "useCounter", link: "en/packages/hooks/useCounter" }]
      },
      {
        text: "Directives (@mylib/directives)",
        items: [{ text: "vFocus", link: "en/packages/directives/vFocus" }]
      },
      {
        text: "Utilities (@mylib/utils)",
        items: [{ text: "String Utils", link: "en/packages/utils/string" }]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/huangmingfu/vue3-turbo-component-lib-template" }
    ]
  }
});

// .vitepress/config/zh.ts
import { defineConfig as defineConfig3 } from "file:///Users/archertrister/vue3-turbo-component-lib-template/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.17.1_@types+node@22.10.7_async-validator@4.2.5_postc_tfvc3eplekfampcg7tfsz6miue/node_modules/vitepress/dist/node/index.js";
var zh = defineConfig3({
  lang: "zh-Hans",
  title: "\u7EC4\u4EF6\u5E93\u6A21\u677F\u6587\u6863",
  description: "\u4E00\u4E2A\u57FA\u4E8E Vue3 \u7684\u7EC4\u4EF6\u5E93\u548C\u5DE5\u5177\u96C6",
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "\u9996\u9875", link: "/" },
      // { text: '其他', link: '/markdown-examples' },
      { text: "\u535A\u5BA2", link: "https://huangmingfu.github.io/my-blog" },
      {
        text: "\u66F4\u591A",
        items: [
          {
            text: "\u66F4\u65B0\u65E5\u5FD7",
            link: "https://github.com/huangmingfu/vue3-turbo-component-lib-template/blob/master/CHANGELOG.md"
          }
          // {
          //   text: '参与贡献',
          //   link: '',
          // },
        ]
      }
    ],
    sidebar: [
      {
        text: "\u5FEB\u901F\u5F00\u59CB",
        items: [{ text: "\u4ECB\u7ECD", link: "/guide/index" }]
      },
      {
        text: "\u7EC4\u4EF6\uFF08@mylib/ui\uFF09",
        items: [
          { text: "Button \u6309\u94AE", link: "/packages/ui/button" },
          { text: "Dialog \u5BF9\u8BDD\u6846", link: "/packages/ui/dialog" }
        ]
      },
      {
        text: "Hooks\uFF08@mylib/hooks\uFF09",
        items: [{ text: "useCounter \u8BA1\u6570\u5668", link: "/packages/hooks/useCounter" }]
      },
      {
        text: "\u6307\u4EE4\uFF08@mylib/directives\uFF09",
        items: [{ text: "vFocus \u805A\u7126", link: "/packages/directives/vFocus" }]
      },
      {
        text: "\u5DE5\u5177\u51FD\u6570\uFF08@mylib/utils\uFF09",
        items: [{ text: "\u5B57\u7B26\u4E32\u5DE5\u5177", link: "/packages/utils/string" }]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/huangmingfu/vue3-turbo-component-lib-template" }
    ]
  }
});

// .vitepress/config.mts
var config_default = defineConfig4({
  ...shared,
  locales: {
    root: { label: "\u7B80\u4F53\u4E2D\u6587", ...zh },
    en: { label: "English", ...en }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIiwgIi52aXRlcHJlc3MvY29uZmlnL3NoYXJlZC50cyIsICIudml0ZXByZXNzL2NvbmZpZy9lbi50cyIsICIudml0ZXByZXNzL2NvbmZpZy96aC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9hcmNoZXJ0cmlzdGVyL3Z1ZTMtdHVyYm8tY29tcG9uZW50LWxpYi10ZW1wbGF0ZS9hcHBzL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FyY2hlcnRyaXN0ZXIvdnVlMy10dXJiby1jb21wb25lbnQtbGliLXRlbXBsYXRlL2FwcHMvZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FyY2hlcnRyaXN0ZXIvdnVlMy10dXJiby1jb21wb25lbnQtbGliLXRlbXBsYXRlL2FwcHMvZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xuaW1wb3J0IHsgc2hhcmVkIH0gZnJvbSAnLi9jb25maWcvc2hhcmVkJztcbmltcG9ydCB7IGVuIH0gZnJvbSAnLi9jb25maWcvZW4nO1xuaW1wb3J0IHsgemggfSBmcm9tICcuL2NvbmZpZy96aCc7XG5cbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIC4uLnNoYXJlZCxcbiAgbG9jYWxlczoge1xuICAgIHJvb3Q6IHsgbGFiZWw6ICdcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODcnLCAuLi56aCB9LFxuICAgIGVuOiB7IGxhYmVsOiAnRW5nbGlzaCcsIC4uLmVuIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FyY2hlcnRyaXN0ZXIvdnVlMy10dXJiby1jb21wb25lbnQtbGliLXRlbXBsYXRlL2FwcHMvZG9jcy8udml0ZXByZXNzL2NvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FyY2hlcnRyaXN0ZXIvdnVlMy10dXJiby1jb21wb25lbnQtbGliLXRlbXBsYXRlL2FwcHMvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaGFyZWQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FyY2hlcnRyaXN0ZXIvdnVlMy10dXJiby1jb21wb25lbnQtbGliLXRlbXBsYXRlL2FwcHMvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaGFyZWQudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xuaW1wb3J0IHsgdml0ZXByZXNzRGVtb1BsdWdpbiB9IGZyb20gJ3ZpdGVwcmVzcy1kZW1vLXBsdWdpbic7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuXG5leHBvcnQgY29uc3Qgc2hhcmVkID0gZGVmaW5lQ29uZmlnKHtcbiAgLy8gXHU4QkJFXHU3RjZFXHU1N0ZBXHU3ODQwXHU4REVGXHU1Rjg0LFx1NzUyOFx1NEU4RUdpdEh1YiBQYWdlc1x1OTBFOFx1N0Y3MlxuICBiYXNlOiAnL3Z1ZTMtdHVyYm8tY29tcG9uZW50LWxpYi10ZW1wbGF0ZS8nLFxuICAvLyBcdTU0MkZcdTc1MjhcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXG4gIC8vIFx1NzUxRlx1NjIxMFx1NUU3Mlx1NTFDMFx1NzY4NCBVUkxcdUZGMDhcdTUzQkJcdTYzODkuaHRtbFx1NTQwRVx1N0YwMFx1RkYwOVxuICBjbGVhblVybHM6IHRydWUsXG4gIC8vIFx1NUMwNlx1NTE0M1x1NjU3MFx1NjM2RVx1NjJDNlx1NTIwNlx1NEUzQVx1NTM1NVx1NzJFQ1x1NzY4NCBjaHVua1xuICBtZXRhQ2h1bms6IHRydWUsXG4gIC8vIFVSTFx1OTFDRFx1NTE5OVx1ODlDNFx1NTIxOSxcdTVDMDZ6aC9cdTVGMDBcdTU5MzRcdTc2ODRcdThERUZcdTVGODRcdTkxQ0RcdTUxOTlcdTRFM0FcdTY4MzlcdThERUZcdTVGODRcbiAgcmV3cml0ZXM6IHtcbiAgICAnemgvOnJlc3QqJzogJzpyZXN0KicsXG4gIH0sXG4gIC8vIFx1OTE0RFx1N0Y2RUhUTUxcdTU5MzRcdTkwRThcdTY4MDdcdTdCN0VcbiAgaGVhZDogW1snbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvdnVlMy10dXJiby1jb21wb25lbnQtbGliLXRlbXBsYXRlL2Zhdmljb24uaWNvJyB9XV0sXG4gIC8vIE1hcmtkb3duXHU5MTREXHU3RjZFXG4gIG1hcmtkb3duOiB7XG4gICAgLy8gXHU5MTREXHU3RjZFTWFya2Rvd25cdTg5RTNcdTY3OTBcdTU2NjhcbiAgICBjb25maWcobWQpIHtcbiAgICAgIC8vIFx1NEY3Rlx1NzUyOHZpdGVwcmVzcy1kZW1vLXBsdWdpblx1NjNEMlx1NEVGNixcdTc1MjhcdTRFOEVcdTVDNTVcdTc5M0FcdTc5M0FcdTRGOEJcdTRFRTNcdTc4MDFcbiAgICAgIG1kLnVzZSh2aXRlcHJlc3NEZW1vUGx1Z2luLCB7XG4gICAgICAgIGRlbW9EaXI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9leGFtcGxlcycpLFxuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXJjaGVydHJpc3Rlci92dWUzLXR1cmJvLWNvbXBvbmVudC1saWItdGVtcGxhdGUvYXBwcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXJjaGVydHJpc3Rlci92dWUzLXR1cmJvLWNvbXBvbmVudC1saWItdGVtcGxhdGUvYXBwcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnL2VuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hcmNoZXJ0cmlzdGVyL3Z1ZTMtdHVyYm8tY29tcG9uZW50LWxpYi10ZW1wbGF0ZS9hcHBzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvZW4udHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5leHBvcnQgY29uc3QgZW4gPSBkZWZpbmVDb25maWcoe1xuICBsYW5nOiAnZW4tVVMnLFxuICB0aXRsZTogJ0xpYnJhcnkgVGVtcGxhdGUgRG9jJyxcbiAgZGVzY3JpcHRpb246ICdBIFZ1ZTMtYmFzZWQgQ29tcG9uZW50IExpYnJhcnkgYW5kIFV0aWxpdHkgQ29sbGVjdGlvbicsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgbG9nbzogJy9sb2dvLnBuZycsXG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnSG9tZScsIGxpbms6ICcvJyB9LFxuICAgICAgLy8geyB0ZXh0OiAnT3RoZXJzJywgbGluazogJy9tYXJrZG93bi1leGFtcGxlcycgfSxcbiAgICAgIHsgdGV4dDogJ0Jsb2cnLCBsaW5rOiAnaHR0cHM6Ly9odWFuZ21pbmdmdS5naXRodWIuaW8vbXktYmxvZycgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ01vcmUnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDaGFuZ2Vsb2cnLFxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9odWFuZ21pbmdmdS92dWUzLXR1cmJvLWNvbXBvbmVudC1saWItdGVtcGxhdGUvYmxvYi9tYXN0ZXIvQ0hBTkdFTE9HLm1kJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIHRleHQ6ICdDb250cmlidXRlJyxcbiAgICAgICAgICAvLyAgIGxpbms6ICcnLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgc2lkZWJhcjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnUXVpY2sgU3RhcnQnLFxuICAgICAgICBpdGVtczogW3sgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICdlbi9ndWlkZS9pbmRleCcgfV0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnQ29tcG9uZW50cyAoQG15bGliL3VpKScsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnQnV0dG9uJywgbGluazogJ2VuL3BhY2thZ2VzL3VpL2J1dHRvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdEaWFsb2cnLCBsaW5rOiAnZW4vcGFja2FnZXMvdWkvZGlhbG9nJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0hvb2tzIChAbXlsaWIvaG9va3MpJyxcbiAgICAgICAgaXRlbXM6IFt7IHRleHQ6ICd1c2VDb3VudGVyJywgbGluazogJ2VuL3BhY2thZ2VzL2hvb2tzL3VzZUNvdW50ZXInIH1dLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0RpcmVjdGl2ZXMgKEBteWxpYi9kaXJlY3RpdmVzKScsXG4gICAgICAgIGl0ZW1zOiBbeyB0ZXh0OiAndkZvY3VzJywgbGluazogJ2VuL3BhY2thZ2VzL2RpcmVjdGl2ZXMvdkZvY3VzJyB9XSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdVdGlsaXRpZXMgKEBteWxpYi91dGlscyknLFxuICAgICAgICBpdGVtczogW3sgdGV4dDogJ1N0cmluZyBVdGlscycsIGxpbms6ICdlbi9wYWNrYWdlcy91dGlscy9zdHJpbmcnIH1dLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2h1YW5nbWluZ2Z1L3Z1ZTMtdHVyYm8tY29tcG9uZW50LWxpYi10ZW1wbGF0ZScgfSxcbiAgICBdLFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9hcmNoZXJ0cmlzdGVyL3Z1ZTMtdHVyYm8tY29tcG9uZW50LWxpYi10ZW1wbGF0ZS9hcHBzL2RvY3MvLnZpdGVwcmVzcy9jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hcmNoZXJ0cmlzdGVyL3Z1ZTMtdHVyYm8tY29tcG9uZW50LWxpYi10ZW1wbGF0ZS9hcHBzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FyY2hlcnRyaXN0ZXIvdnVlMy10dXJiby1jb21wb25lbnQtbGliLXRlbXBsYXRlL2FwcHMvZG9jcy8udml0ZXByZXNzL2NvbmZpZy96aC50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5cbmV4cG9ydCBjb25zdCB6aCA9IGRlZmluZUNvbmZpZyh7XG4gIGxhbmc6ICd6aC1IYW5zJyxcbiAgdGl0bGU6ICdcdTdFQzRcdTRFRjZcdTVFOTNcdTZBMjFcdTY3N0ZcdTY1ODdcdTY4NjMnLFxuICBkZXNjcmlwdGlvbjogJ1x1NEUwMFx1NEUyQVx1NTdGQVx1NEU4RSBWdWUzIFx1NzY4NFx1N0VDNFx1NEVGNlx1NUU5M1x1NTQ4Q1x1NURFNVx1NTE3N1x1OTZDNicsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgbG9nbzogJy9sb2dvLnBuZycsXG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnXHU5OTk2XHU5ODc1JywgbGluazogJy8nIH0sXG4gICAgICAvLyB7IHRleHQ6ICdcdTUxNzZcdTRFRDYnLCBsaW5rOiAnL21hcmtkb3duLWV4YW1wbGVzJyB9LFxuICAgICAgeyB0ZXh0OiAnXHU1MzVBXHU1QkEyJywgbGluazogJ2h0dHBzOi8vaHVhbmdtaW5nZnUuZ2l0aHViLmlvL215LWJsb2cnIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTY2RjRcdTU5MUEnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTY2RjRcdTY1QjBcdTY1RTVcdTVGRDcnLFxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9odWFuZ21pbmdmdS92dWUzLXR1cmJvLWNvbXBvbmVudC1saWItdGVtcGxhdGUvYmxvYi9tYXN0ZXIvQ0hBTkdFTE9HLm1kJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIHRleHQ6ICdcdTUzQzJcdTRFMEVcdThEMjFcdTczMkUnLFxuICAgICAgICAgIC8vICAgbGluazogJycsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzaWRlYmFyOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTVGRUJcdTkwMUZcdTVGMDBcdTU5Q0InLFxuICAgICAgICBpdGVtczogW3sgdGV4dDogJ1x1NEVDQlx1N0VDRCcsIGxpbms6ICcvZ3VpZGUvaW5kZXgnIH1dLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1N0VDNFx1NEVGNlx1RkYwOEBteWxpYi91aVx1RkYwOScsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnQnV0dG9uIFx1NjMwOVx1OTRBRScsIGxpbms6ICcvcGFja2FnZXMvdWkvYnV0dG9uJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0RpYWxvZyBcdTVCRjlcdThCRERcdTY4NDYnLCBsaW5rOiAnL3BhY2thZ2VzL3VpL2RpYWxvZycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdIb29rc1x1RkYwOEBteWxpYi9ob29rc1x1RkYwOScsXG4gICAgICAgIGl0ZW1zOiBbeyB0ZXh0OiAndXNlQ291bnRlciBcdThCQTFcdTY1NzBcdTU2NjgnLCBsaW5rOiAnL3BhY2thZ2VzL2hvb2tzL3VzZUNvdW50ZXInIH1dLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NjMwN1x1NEVFNFx1RkYwOEBteWxpYi9kaXJlY3RpdmVzXHVGRjA5JyxcbiAgICAgICAgaXRlbXM6IFt7IHRleHQ6ICd2Rm9jdXMgXHU4MDVBXHU3MTI2JywgbGluazogJy9wYWNrYWdlcy9kaXJlY3RpdmVzL3ZGb2N1cycgfV0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU1REU1XHU1MTc3XHU1MUZEXHU2NTcwXHVGRjA4QG15bGliL3V0aWxzXHVGRjA5JyxcbiAgICAgICAgaXRlbXM6IFt7IHRleHQ6ICdcdTVCNTdcdTdCMjZcdTRFMzJcdTVERTVcdTUxNzcnLCBsaW5rOiAnL3BhY2thZ2VzL3V0aWxzL3N0cmluZycgfV0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vaHVhbmdtaW5nZnUvdnVlMy10dXJiby1jb21wb25lbnQtbGliLXRlbXBsYXRlJyB9LFxuICAgIF0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlksU0FBUyxnQkFBQUEscUJBQW9COzs7QUNBVixTQUFTLG9CQUFvQjtBQUMzYixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFJbEMsSUFBTSxTQUFTLGFBQWE7QUFBQTtBQUFBLEVBRWpDLE1BQU07QUFBQTtBQUFBLEVBRU4sYUFBYTtBQUFBO0FBQUEsRUFFYixXQUFXO0FBQUE7QUFBQSxFQUVYLFdBQVc7QUFBQTtBQUFBLEVBRVgsVUFBVTtBQUFBLElBQ1IsYUFBYTtBQUFBLEVBQ2Y7QUFBQTtBQUFBLEVBRUEsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGlEQUFpRCxDQUFDLENBQUM7QUFBQTtBQUFBLEVBRXhGLFVBQVU7QUFBQTtBQUFBLElBRVIsT0FBTyxJQUFJO0FBRVQsU0FBRyxJQUFJLHFCQUFxQjtBQUFBLFFBQzFCLFNBQVMsS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQ25ELENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBQzdCcVosU0FBUyxnQkFBQUMscUJBQW9CO0FBRTVhLElBQU0sS0FBS0MsY0FBYTtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQTtBQUFBLElBRU4sS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBQUE7QUFBQSxNQUUxQixFQUFFLE1BQU0sUUFBUSxNQUFNLHdDQUF3QztBQUFBLE1BQzlEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBS0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU8sQ0FBQyxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0saUJBQWlCLENBQUM7QUFBQSxNQUMxRDtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxVQUFVLE1BQU0sd0JBQXdCO0FBQUEsVUFDaEQsRUFBRSxNQUFNLFVBQVUsTUFBTSx3QkFBd0I7QUFBQSxRQUNsRDtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPLENBQUMsRUFBRSxNQUFNLGNBQWMsTUFBTSwrQkFBK0IsQ0FBQztBQUFBLE1BQ3RFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTyxDQUFDLEVBQUUsTUFBTSxVQUFVLE1BQU0sZ0NBQWdDLENBQUM7QUFBQSxNQUNuRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU8sQ0FBQyxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sMkJBQTJCLENBQUM7QUFBQSxNQUNwRTtBQUFBLElBQ0Y7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYLEVBQUUsTUFBTSxVQUFVLE1BQU0sbUVBQW1FO0FBQUEsSUFDN0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzs7O0FDeERxWixTQUFTLGdCQUFBQyxxQkFBb0I7QUFFNWEsSUFBTSxLQUFLQyxjQUFhO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBO0FBQUEsSUFFTixLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxJQUFJO0FBQUE7QUFBQSxNQUV4QixFQUFFLE1BQU0sZ0JBQU0sTUFBTSx3Q0FBd0M7QUFBQSxNQUM1RDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUtGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPLENBQUMsRUFBRSxNQUFNLGdCQUFNLE1BQU0sZUFBZSxDQUFDO0FBQUEsTUFDOUM7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTCxFQUFFLE1BQU0sdUJBQWEsTUFBTSxzQkFBc0I7QUFBQSxVQUNqRCxFQUFFLE1BQU0sNkJBQWMsTUFBTSxzQkFBc0I7QUFBQSxRQUNwRDtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPLENBQUMsRUFBRSxNQUFNLGlDQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBQUEsTUFDeEU7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPLENBQUMsRUFBRSxNQUFNLHVCQUFhLE1BQU0sOEJBQThCLENBQUM7QUFBQSxNQUNwRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU8sQ0FBQyxFQUFFLE1BQU0sa0NBQVMsTUFBTSx5QkFBeUIsQ0FBQztBQUFBLE1BQzNEO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSxtRUFBbUU7QUFBQSxJQUM3RjtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUhsREQsSUFBTyxpQkFBUUMsY0FBYTtBQUFBLEVBQzFCLEdBQUc7QUFBQSxFQUNILFNBQVM7QUFBQSxJQUNQLE1BQU0sRUFBRSxPQUFPLDRCQUFRLEdBQUcsR0FBRztBQUFBLElBQzdCLElBQUksRUFBRSxPQUFPLFdBQVcsR0FBRyxHQUFHO0FBQUEsRUFDaEM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIiwgImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIiwgImRlZmluZUNvbmZpZyJdCn0K
