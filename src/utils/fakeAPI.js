// const seededRandom = (seed) => {
//   const m = 2 ** 35 - 31;
//   const a = 185852;
//   let s = seed % m;

//   return () => (s = (s * a) % m) / m;
// };

// const fetchAPI = (dateString) => {
//   return new Promise((resolve, reject) => {
//     const date = new Date(dateString);
//     let result = [];
//     let random = seededRandom(date.getDate());

//     for (let i = 17; i <= 23; i++) {
//       if (random() < 0.5) result.push(i + ":00");
//       if (random() < 0.5) result.push(i + ":30");
//     }

//     resolve(result);
//   });
// };

// const submitAPI = () => true;

// export { fetchAPI, submitAPI };
