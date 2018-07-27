import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

// structural test
initStoryshots();

// visual test
// initStoryshots({
//   suite: 'Image storyshots',
//   test: imageSnapshot({ storybookUrl: 'http://localhost:9009/' })
// });
