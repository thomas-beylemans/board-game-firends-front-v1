export const findCity = (cityArray, city, postcode) => {
  const foundCity = cityArray.filter(el => { return el.nom === city; }).filter(el => { return el.codesPostaux.includes(postcode); });
  return foundCity[0];
}
