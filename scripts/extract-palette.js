const getColors = require('get-image-colors');

getColors('src/assets/Expo.png').then(colors => {
  console.log('colors:');
  colors.forEach((c, i) => console.log(`${i}: ${c.hex()}`));
}).catch(err => { console.error(err); process.exit(1); });
