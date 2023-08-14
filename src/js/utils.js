export const isSupportWebp = () => {
  try {
    return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
  } catch (err) {
    return false;
  }
};

export const webpClass = (className = 'webp') => {
  if (isSupportWebp) {
    document.body.classList.add(className);
  } else {
    document.body.classList.remove(className);
  }
};

export const noJs = () => {
  document.body.classList.remove('no-js');
  document.body.classList.add('js');
}