import Senators from './senators';

export const republicans = () => {
  return Senators.filter(senator => senator.party == "Republican");
}

export const democrats = () => {
  return Senators.filter(senator => senator.party == "Democrat");
}

export const independents = () => {
  return Senators.filter(senator => senator.party == "Independent");
}

export const males = () => {
  return Senators.filter(senator => senator.person.gender == "male");
}

export const females = () => {
  return Senators.filter(senator => senator.person.gender == "female");
}

export const byState = (state = 'UT') => {
  return Senators.filter(senator => senator.state == state);
}

export const mapping = () => {
  return Senators.map(senator => { return { firstName: senator.person.firstName, 
  lastName: senator.person.lastName, party: senator.party, gender: senator.person.gender}});
}

export const reducedCount = () => {
  const count = Senators.reduce((counter, senator) => {
  let affiliation = senator.party.toLowerCase();
  counter[affiliation] = (counter[affiliation] || 0) + 1; 
  return counter}, {});
  return count
}


const REPLACE_ME_WITH_CODE = false