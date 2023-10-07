//3Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.7.
function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    return console.log("Size: ".concat(size, ", Messgae: ").concat(message));
}
// Large shirt with default message
makeShirt(); // Output : Size: Large, Message: 'I love TypeScript'
// Medium shirt with default message
makeShirt("Medim"); // Output : Size: Medium, Message: 'I love TypeScript'
// Custom shirt with a different meessage and size
makeShirt("Small", "Hello TypeScript!"); // Output : Size: Small, Message: 'Hello TypeScript!'
