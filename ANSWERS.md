- [ ] Why would you use class component over function components (removing hooks from the question)?

    Before the introduction of hooks about 9 months ago, function components could only conduct basic UI rendering without the ability to handle state or any lifecycle methods.  The class component has access to React.Component and can create state with constructor() and super(), then binding with ‘this’ keyword.  A function component (before the invention of hooks) was more simplistic compared to a class component, therefore it was good for compartmentalizing basic UI rendering code that doesn’t require state, which makes for better testing, debugging, and readability overall.  You can also tell the difference between what the two different components are doing at a fundamental level, with the class component handling state management and lifecycle and the function component simply returning DOM elements utilizing some props info.


- [ ] Name three lifecycle methods and their purposes.

    constructor(): it fires off just before the component mounts and it can set an initial state value, get props, and allow for binding with ‘this’ keyword.  Super() is needed in conjunction with the constructor to allow binding to the parent class React.Component which then unlocks binding ability with ‘this’ keyword.  If state or props or ‘this’ are not needed in a component, then constructor/super can be left out.
	
    render(): this is a required method and should be kept pure so that it doesn’t modify state or props, but instead simply returns them into a DOM element.  It happens while mounting and also again while updating, depending on modifications to state or props.
	
    componentDidMount(): immediately after a component mounts, this method will run and can set state if needed.  Typically, data retrieval like an API call is done within this method.


- [ ] What is the purpose of a custom hook?

    Custom hooks allow any non-visual, ‘behind-the-scenes’ stateful logic to be housed in a separate file that can be imported by multiple components and reused over and over.  In some ways, it is like a slice of global state for the App, except it won’t be saved or transferred over, the state is only used locally when called upon on a particular component.  The benefits of extracting out this stateful logic from the component is that it can be used by other components, it is better for testing/debugging, makes the code cleaner, D.R.Y.er, and more readable.


- [ ] Why is it important to test our apps?

    There are many benefits to testing and more risks when NOT doing any tests.  Tests can reveal bugs before a project reaches final implementation.  It is more costly to a team to try and figure out what is wrong after the fact, instead of testing things along the way and working out the kinks.  Test driven development is a good practice that changes how a developer thinks and approaches his/her code.  Thinking about the end result, then first designing a test for that expected result will help drive the code design to achieve that result.  Testing allows the developer to trust their code as they build things out along the way and it also provides some documentation for how things were built.  It can also provide an additional safety buffer when making future updates to the code and it forces the developer to think about edge case scenarios that may break the test, thus also breaking the code output.