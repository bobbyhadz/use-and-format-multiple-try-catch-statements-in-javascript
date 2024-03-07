// EXAMPLE 1 - Use and format multiple try-catch blocks in JavaScript

const throwError = message => {
  throw new Error(message);
};

try {
  throwError('Error message 1 🔴');
} catch (err) {
  console.log(err);
  console.log(err.message); // 👉️ Error message 1 🔴
}

try {
  throwError('Error message 2 🔵');
} catch (err) {
  console.log(err);
  console.log(err.message); // 👉️ Error message 2 🔵
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using an if/else statement to handle different errors

// function ServerException(message) {
//   this.message = message;
//   this.name = 'ServerException';
//   this.status = 500;
// }

// try {
//   throw new ServerException('Server error occurred 🔴');
// } catch (err) {
//   console.log(err);

//   if (err.status === 500) {
//     // 👇️ this runs
//     console.log(`A server error occurred ${err.message}`);
//   } else {
//     console.log(`A generic error occurred ${err.message}`);
//   }
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using the instanceof operator

// function ServerException(message) {
//   this.message = message;
//   this.name = 'ServerException';
//   this.status = 500;
// }

// try {
//   throw new ServerException('Server error occurred 🔴');
// } catch (err) {
//   console.log(err);

//   if (err instanceof ServerException) {
//     // 👇️ this runs
//     console.log(`A server error occurred ${err.message}`);
//   } else {
//     console.log(`A generic error occurred ${err.message}`);
//   }
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Checking for multiple errors

// function ServerException(message) {
//   this.message = message;
//   this.name = 'ServerException';
//   this.status = 500;
// }

// function NotFoundException(message) {
//   this.message = message;
//   this.name = 'NotFoundException';
//   this.status = 404;
// }

// try {
//   throw new NotFoundException('Page not found');
// } catch (err) {
//   console.log(err);

//   if (err.status === 500) {
//     console.log(`A server error occurred ${err.message}`);
//   } else if (err.status === 404) {
//     // 👇️ this runs
//     console.log(`A 404 not found error occurred ${err.message}`);
//   } else {
//     console.log(`A generic error occurred ${err.message}`);
//   }
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using a nested `try/catch` statement

// try {
//   console.log('Some code that maybe throws');

//   try {
//     console.log(
//       'Some code that might throw and needs to be handled differently',
//     );
//   } catch (nestedErr) {
//     console.log('Nested catch error: ', nestedErr.message);
//   }
// } catch (err) {
//   console.log('Outer catch error: ', err.message);
// }
