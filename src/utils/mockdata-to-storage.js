import * as data from '../mock-data';

const toStorage = (key, value) => {
  const store = localStorage.getItem(key);

  if (store) return;

  localStorage.setItem(key, JSON.stringify(value));
};

export default function mockdataToStorage() {
  // eslint-disable-next-line
  if (!process.env.NODE_ENV === 'production') return;

  Object.entries(data).forEach((item) => {
    toStorage(...item);
  });
}
