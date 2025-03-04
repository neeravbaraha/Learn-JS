//2.	Convert different data types using String(), Number(), and Boolean().

//converting String() using string

console.log(String(123)); //num---->string;
console.log(String(true));// Boolean ---->string
console.log(String(false));// Boolean--->string
console.log(String(null)); //Null ---> string
console.log(String(undefined));// undefined ---> string
console.log(String([1,2,3])); // array to string
console.log(String({key:"val"})); // oject to string

// using Number()
console.log(Number("123"));       // 123 (String → Number)
console.log(Number("123abc"));    // NaN (Invalid String → Number)
console.log(Number(true));        // 1 (Boolean true → Number)
console.log(Number(false));       // 0 (Boolean false → Number)
console.log(Number(null));        // 0 (null → Number)
console.log(Number(undefined));   // NaN (undefined → Number)
console.log(Number(" "));         // 0 (Empty String → Number)
console.log(Number([]));          // 0 (Empty Array → Number)
console.log(Number(["5"]));       // 5 (Array with one number → Number)
console.log(Number({}));          // NaN (Object → Number)

//using Boolean()
console.log(Boolean(1));          // true (Non-zero Number → Boolean)
console.log(Boolean(0));          // false (Zero → Boolean)
console.log(Boolean("Hello"));    // true (Non-empty String → Boolean)
console.log(Boolean(""));         // false (Empty String → Boolean)
console.log(Boolean(null));       // false (null → Boolean)
console.log(Boolean(undefined));  // false (undefined → Boolean)
console.log(Boolean([]));         // true (Empty Array → Boolean)
console.log(Boolean({}));         // true (Empty Object → Boolean)

