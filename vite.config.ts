/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-10-27 00:34:56
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-10-30 15:10:46
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleImport, { AntdResolve } from "vite-plugin-style-import";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // styleImport({
    //   resolves: [AntdResolve()],
    //   libs: [
    //     {
    //       libraryName: "antd",
    //       esModule: true,
    //       resolveStyle: (name) =>  `antd/es/${name}/style/index`,
    //     },
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
