// This function returns a promise after a delay to enable lazy loading.
export const delayForDemo = <T>(promise: Promise<T>): Promise<T> => {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(promise);
    }, 2000);
  }).then((p) => p);
};
