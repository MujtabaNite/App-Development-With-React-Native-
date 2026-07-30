// Part C answers:
// 1) typeof undefined = "undefined"
// 2) typeof null = "object"
// 3) Why treat "" differently than null/undefined in normalizeName (conceptually)?
//    null and undefined represent the absence of a value or a missing property, 
//    whereas "" (empty string) is an existing string type that simply contains no characters. 
//    In normalizeName, we treat strings that are empty (or only whitespace) as "Unknown" 
//    to ensure a readable display name rather than a blank space.

const users = [
  { id: 101, name: " Ada ", scores: [10, 20, 30] },
  { id: 102, name: "", scores: [5, 0, 15] },
  { id: 103, name: null, scores: [7, 14] },
  { id: 104, /* name missing on purpose */ scores: [3, 3, 3, 3] },
  { id: 105, name: "Grace", scores: [] }
];

function normalizeName(value) {
  if (value === null || typeof value === "undefined") {
    return "Unknown";
  }
  const trimmed = String(value).trim();
  if (trimmed === "") {
    return "Unknown";
  }
  return trimmed;
}

function averageScore(scores) {
  if (!Array.isArray(scores)) {
    throw new Error("scores must be an array");
  }
  if (scores.length === 0) {
    return null;
  }
  const sum = scores.reduce((a, b) => a + b, 0);
  const avg = sum / scores.length;
  // Rounds to 2 decimal places and returns a number using Math.round()
  return Math.round(avg * 100) / 100;
}

function buildUserSummary(user) {
  if (typeof user !== "object" || user === null || Array.isArray(user)) {
    throw new Error("user must be an object");
  }

  var userSummary = {
    id: user.id,
    name: normalizeName(user.name)
  };

  const hasScores = Array.isArray(user.scores);
  userSummary["scoreCount"] = hasScores ? user.scores.length : 0;
  userSummary.avg = hasScores ? averageScore(user.scores) : null;

  return userSummary;
}

function summarizeUsers(userArray) {
  if (!Array.isArray(userArray)) {
    throw new Error("userArray must be an array");
  }
  return userArray.map(buildUserSummary);
}

function safeSummarizeUsers(userArray) {
  try {
    return { ok: true, data: summarizeUsers(userArray) };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

function getUserDisplayNameById(userArray, id) {
  if (!Array.isArray(userArray)) {
    throw new Error("userArray must be an array");
  }
  if (typeof id !== "number") {
    throw new Error("id must be a number");
  }

  var found = userArray.find(user => user.id === id);
  if (!found) {
    throw new Error("user not found");
  }

  return normalizeName(found.name);
}

console.log(normalizeName(" Ada "));               // expected: "Ada"
console.log(normalizeName("   "));                 // expected: "Unknown"
console.log(normalizeName(null));                  // expected: "Unknown"
console.log(averageScore([10, 20, 30]));           // expected: 20
console.log(averageScore([]));                     // expected: null
console.log(buildUserSummary(users[0]));           // expected: { id: 101, name: 'Ada', scoreCount: 3, avg: 20 }
console.log(buildUserSummary(users[3]));           // expected: { id: 104, name: 'Unknown', scoreCount: 4, avg: 3 }
console.log(safeSummarizeUsers(users).ok);         // expected: true
console.log(getUserDisplayNameById(users, 105));   // expected: "Grace"
console.log(safeSummarizeUsers("not an array"));   // expected: { ok: false, error: 'userArray must be an array' }