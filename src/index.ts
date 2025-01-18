const context = require.context('./', true, /index\.tsx?$/);

context.keys().forEach((key) => {
  if (key !== './index.ts') {
    Object.keys(context(key)).forEach((exportName) => {
      if (exportName !== 'default') {
        exports[exportName] = context(key)[exportName];
      }
    });
  }
});
