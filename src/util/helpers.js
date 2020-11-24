import people from '../data/people.json';

export const fetchResource = async (
  resource,
) => {
  return new Promise(resolve => setTimeout(function () {
    resolve();
  }, 2000))
    .then(async () => {
      if (resource.indexOf('people') !== -1) {
        return await people[resource];
      }

      return null;
    })
  
};
