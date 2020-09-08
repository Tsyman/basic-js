module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let team = [];
  
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
       team.push(members[i].trim());
    }
  }

  let str = team.map( word => word[0].toUpperCase());
  let sortNames = str.sort();
  let dreamTeam = sortNames.join().toUpperCase().replace(/,/g, "");
  return dreamTeam; 
};
