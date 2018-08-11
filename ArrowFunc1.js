var inputs = process.argv.slice(2);
var result = inputs.map( string => string[0] )
                    .reduce( (x, string) => x + string);
console.log(`[${inputs}] becomes "${result}"`);