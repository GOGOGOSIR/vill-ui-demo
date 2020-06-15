module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    [
      "component",
      {
        libraryName: "vill-ui",
        styleLibraryName: "common/style"
      }
    ]
  ]
}
