module.exports = {
  name: "Call of Duty API",
  includeVersion: true,
  inputFiles: ["./src/index.ts"],
  mode: "modules",
  out: "docs",
  tsconfig: "./tsconfig.json",
  excludePrivate: true,
  excludeProtected: true,
  theme: "vuepress",
  disableSources: false,
};
