// userInfo.js

function createUserProfiles(originalNames, modifiedNames) {
    const userProfiles = [];
    let idCounter = 1;

    for (let i = 0; i < originalNames.length; i++) {
        const userProfile = {
            originalName: originalNames[i],
            modifiedName: modifiedNames[i],
            id: idCounter,
        };
        userProfiles.push(userProfile);
        idCounter++;
    }

    return userProfiles;
}

// Example usage:
const originalNames = ["CINDY", "Bob", "Charlie"];
const modifiedNames = ["ALICE", "bob", "CHARLIE"];
const profiles = createUserProfiles(originalNames, modifiedNames);
console.log(profiles);
