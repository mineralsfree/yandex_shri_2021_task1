export const importAll = (location = '') => {
  const r = require.context(`../assets/images/4x`, false, /\.(png|jpe?g|svg)$/)
  let images = {};
  r.keys().forEach(item => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}