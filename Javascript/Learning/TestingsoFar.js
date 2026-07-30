const users = [

  { id: 101, name: " Ada ", scores: [10, 20, 30] },

  { id: 102, name: "", scores: [5, 0, 15] },

  { id: 103, name: null, scores: [7, 14] },

  { id: 104, /* name missing on purpose */ scores: [3, 3, 3, 3] },

  { id: 105, name: "Grace", scores: [] }

];

function normalizeName(value){
    if(value === null || value === undefined || value.trim() === "" || typeof(value) !== "string")   
      return "Unknown";

    return value.trim();
}

function averageScore(scores){
  if(!Array.isArray(scores))
    throw new Error("scores must be an array");

  if (scores.length === 0)
    return null;

  return Math.round(scores.reduce((a,b) => a+b,0)/scores.length).toFixed(2)
}

function buildUserSummary(user){
  if(typeof(user) !== "object" || user === null || Array.isArray(user))
    throw new Error("user must be an object");

  var userSummary = {
    id: user.id,
    name: normalizeName(user.name),
}
const hasScores = Array.isArray(user.scores);
userSummary["scoreCount"] = hasScores ? user.scores.length : 0;
userSummary.avg = hasScores ? averageScore(user.scores) : null;
  return userSummary;
}

function summarizeUsers(userArray){
  if(!Array.isArray(userArray))
    throw new Error("userArray must be an array");

  return userArray.map(buildUserSummary);
}

function safeSummarizeUsers(userArray){
  try{
    return {ok:true, data:summarizeUsers(userArray)};

  }catch(e){
    return {ok:false, error:e.message};
  }
}

function getUserDisplayNameById(userArray, id){
 if(!Array.isArray(userArray))
    throw new Error("userArray must be an array");

 if (typeof(id) !== "number")
  throw new Error("id must be a number")

  var found = userArray.find(user => user.id === id)
 if(!found)
  throw new Error("user not found")

 return normalizeName(found.name)


}




console.log(normalizeName(" Ada "));               // expected:

console.log(normalizeName("   "));                 // expected:

console.log(normalizeName(null));                  // expected:

console.log(averageScore([10, 20, 30]));           // expected:

console.log(averageScore([]));                     // expected:

console.log(buildUserSummary(users[0]));           // expected:

console.log(buildUserSummary(users[3]));           // expected:

console.log(safeSummarizeUsers(users).ok);         // expected:

console.log(getUserDisplayNameById(users, 105));   // expected:

console.log(safeSummarizeUsers("not an array"));   // expected: