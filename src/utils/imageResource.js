// utils/imageResource.js
const cache = {};

export function loadImage(src) {
  if (!cache[src]) {
    let status = "pending";
    let promise = new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        status = "success";
        resolve(src);
      };
      img.onerror = (err) => {
        status = "error";
        reject(err);
      };
    });

    cache[src] = {
      read() {
        if (status === "pending") throw promise;
        if (status === "error") throw promise;
        return src; 
      },
    };
  }
  return cache[src];
}
