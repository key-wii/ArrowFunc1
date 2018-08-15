let userArray = process.argv.slice(2);
let username = userArray.map( list => list[1] )
    .reduce( (x, list) => x + list);
let email = userArray.map( list => list[2] )
    .reduce( (x, list) => x + list);
console.log(`{username: "${username}", email: "${email}"}`);