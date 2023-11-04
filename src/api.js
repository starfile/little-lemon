// Broken link to 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js'.
// This file contents alternative source code found at 'https://www.coursera.org/learn/meta-front-end-developer-capstone/discussions/weeks/3/threads/jfE1jCqLEe6kKxILEyYEPw'.

const seededRandom = seed => {

  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = s * a % m) / m;

};

const fetchAPI = date => {

  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
    if(random() < 0.5) result.push(i + ':00');
    if(random() < 0.5) result.push(i + ':30');
  }

  // For debug purpose.
  //console.log('fetchAPI created new available dates: ' + result);

  return result;

};

const submitAPI = formData => true;

export {fetchAPI, submitAPI};