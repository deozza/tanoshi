"use strict";

// vite.config.ts
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $atoms: path.resolve("./src/lib/atoms"),
      $molecules: path.resolve("./src/lib/molecules")
    }
  },
  test: {
    include: ["tests/**/*.{test,spec}.{js,ts}"],
    coverage: {
      provider: "c8",
      reporter: ["html"],
      reportsDirectory: "./tests/coverage"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gJ0BzdmVsdGVqcy9raXQvdml0ZSc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlc3QvY29uZmlnJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbc3ZlbHRla2l0KCldLFxuXHRyZXNvbHZlOiB7XG5cdFx0YWxpYXM6IHtcblx0XHRcdCRhdG9tczogcGF0aC5yZXNvbHZlKCcuL3NyYy9saWIvYXRvbXMnKSxcblx0XHRcdCRtb2xlY3VsZXM6IHBhdGgucmVzb2x2ZSgnLi9zcmMvbGliL21vbGVjdWxlcycpXG5cdFx0fVxuXHR9LFxuXHR0ZXN0OiB7XG5cdFx0aW5jbHVkZTogWyd0ZXN0cy8qKi8qLnt0ZXN0LHNwZWN9Lntqcyx0c30nXSxcblx0XHRjb3ZlcmFnZToge1xuXHRcdFx0cHJvdmlkZXI6ICdjOCcsXG5cdFx0XHRyZXBvcnRlcjogWydodG1sJ10sXG5cdFx0XHRyZXBvcnRzRGlyZWN0b3J5OiAnLi90ZXN0cy9jb3ZlcmFnZSdcblx0XHR9XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUyxDQUFDLFVBQVUsQ0FBQztBQUFBLEVBQ3JCLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLFFBQVEsS0FBSyxRQUFRLGlCQUFpQjtBQUFBLE1BQ3RDLFlBQVksS0FBSyxRQUFRLHFCQUFxQjtBQUFBLElBQy9DO0FBQUEsRUFDRDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0wsU0FBUyxDQUFDLGdDQUFnQztBQUFBLElBQzFDLFVBQVU7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFVBQVUsQ0FBQyxNQUFNO0FBQUEsTUFDakIsa0JBQWtCO0FBQUEsSUFDbkI7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
