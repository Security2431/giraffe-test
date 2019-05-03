export function getStorage(key) {
  const data = localStorage.getItem(key);

  return JSON.parse(data);
}

export function setStorage(key, value) {
  const data = JSON.stringify(value);

  return localStorage.setItem(key, data);
}

export function addStorage(key, value) {
  const data = getStorage(key);
  const newData = data.concat(value);

  setStorage(key, newData);
}

export function deleteStorage(key) {
  localStorage.removeItem(key);
}
