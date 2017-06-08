
# Node Teach Back
Lesson’s Goals
1. Using the `fs` module to work with files
2. Installing and using 3rd party packages to perform HTTP requests

## CLI Equality
1. Have student implement their solution
2. Review solution

> The point of refactoring is to make code easier to understand, reason about, and maintain. **NOT** to make a code file as small as possible	  

* A bit about [process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
* A refactored solution is often _arrived_ to rather than immediately apparent
* All refactors are changes, but all changes are not refactors
	* Changes that diminish the readability and maintainability of the code do not fit the definition of a refactor.

## Writing a File
Point out that `fs` is a Node module and therefore doesn’t need to be installed.

## Read a File
1. Have everyone guess what the function name for reading a file is
2. Create  _movies.txt_ 
3. Walk through implementation

> A callback in the context of JavaScript is a function passed as an argument into another function. This allows the calling function to execute arbitrary code so long as the function passed as an argument matches the signature required. This make code more generic and in JavaScript allows code to run   asynchronously  

[readFile Documentation](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* Know that  the callback passed to `readFile`  must be a function that excepts, as arguments, two values: `err` and `data`
* The names can be anything, the important part is the order and that your usage is inline with their implied types 

## Documentation
* It is very important that you read the documentation on any of the frameworks, libraries, or languages that you use.
* Some projects have better documentation than others and that they may have to go to other sources like message boards, Stack Exchange, vendor support, or even read the code (if the product is open source)
* Sometimes it may be useful to see _how_ something is used. Tutorial sites, open-source projects,  and event blogs are perfect for this

## Best Things Ever
1. Instruct partners to do this assignment. Hint that the JavaScript string type has a method called  `split`  [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
2. Review solution

* I chose to use [iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
	* Benefits include less code, no need to manage state, and elimination of an entire class of errors

## Append to a File
Why? Because `writeFile` will simply over-write a file if it already exists. Most of the time, what we actually want to do is add to a file.

* `appendFile` will actually create a file if it does not exists. This is the perfect opportunity to discuss design: function/methods should do one thing)

## Bank
1. Demo what the program should do
2. Show how we persist state in `bank.txt` 
3. Review solution

* Go over importance of handling errors and avoiding side-effects where possible. It’s better to allow the user of a class or function to determine what to do. In our case, we return a value where it makes sense and allow the  consumer of the function to use it how they see fit

## HTTP Requests
### Example 1
1. Attempt to use package without installing it
2. Ask students to guess what when wrong
3. Talk a little bit about Node packages and how to install them
4. Run `http_request`

* Review callbacks and discuss what the function signature of the callback passed into `Request`. Due to JavaScript’s dynamic nature, it is up to you to either ready the docs (if they exist or are any good) or intuit what each argument is to be used for
	* `error`: an error
	* `response`: the [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes), if one exists
	* `body`: the body of your HTTP request, if one exists; read [Hypertext Transfer Protocol - Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

### Example 2
Cannot do this example due to this API being private

## Synchronous vs Asynchronous 
### Definition:
*  _chron_: means time; root
* _syn_: with; prefix
* _a-_: not; prefix
* _ous_: turns word into adjective having the quality of possessing

**Synchronous** means with time and ** Asynchronous** means _not_ with time

### Implications
In JavaScript Synchronous code is executed in the order it is written. That means if you have two functions that take 500s to execute, the total running time of your program will be **at least** 1000s. Asynchronous code _may not_ be execute in the order that it is written.

* Synchronous
	* Easy to reason about
	* Deterministic
	* Can decrease the speed of a program
* Asynchronous
	* Harder to reason about
	* Non-deterministic
	* Potential race conditions
	* Can increase the speed of a program

This is an advanced, complex, and complicated topic in computer science. Truly understanding this topic requires you to know computer architecture and how operating systems work. Thankfully much of this complexity has been abstracted away from us by the OS, Node, and JavaScript.

The thing you need to know is that asynchronous functions will allow your program to continue working when some blocking operation occurs.


#UTHouston
