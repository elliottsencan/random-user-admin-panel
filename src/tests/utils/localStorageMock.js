// Storage Mock
export const storageMock = () => {
  let storage = {};

  return {
    reset() {
      storage = {};
    },
    setItem(key, value) {
      storage[key] = value || '';
    },
    getItem(key) {
      return key in storage
        ? storage[key]
        : "null";
    },
    removeItem(key) {
      delete storage[key];
    },
    key(i) {
      return Object.values(storage)[i];
    },
    get length() {
      return Object.keys(storage).length;
    }
  };
}