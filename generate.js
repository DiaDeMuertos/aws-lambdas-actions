const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Create service node',
    defaultCase: '(noCase)',
    entry: {
      folderPath: './templates/lambdaNode',
    },
    stringReplacers: ['__service__'],
    output: {
      path: './serverless/__service__',
      pathAndFileNameDefaultCase: '(noCase)',
    },
    onComplete: (results) => {
      console.log(`results`, results);
    },
  },
  {
    option: 'Create workflows',
    defaultCase: '(noCase)',
    entry: {
      folderPath: './templates/workflows',
    },
    stringReplacers: ['__service__'],
    output: {
      path: './.github/workflows',
      pathAndFileNameDefaultCase: '(noCase)',
    },
    onComplete: (results) => {
      console.log(`results`, results);
    },
  },
]);
