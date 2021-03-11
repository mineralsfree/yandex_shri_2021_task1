export const importAll = () => {
  const r = require.context('../assets/images/4x/', false, /\.(png|jpe?g|svg)$/)
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}