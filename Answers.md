# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    --React JS is a component-based JavaScript library developed and maintained by Facebook.  One problem Developers have faced, in the past, is the massive code, in HTML, CSS, and JavaScript, a lot of which was repetitive.  In my earlier experience as a Developer, debugging was the most agonizing because if I broke my site, I would spend hours staring at my screen looking for one little typo or punctuation error.  Such a time-consuming task puts a hinderance on production.   React JS enables the Developer to make use of DRY reusable code (components) around different places of the app/web page in separate files.  This makes the code less massive and easier to read, thereby making the task of debugging much simpler.  As an added bonus, React JS will also tell you where the problem is and what file it’s located in.

2. What does it mean to think in react?

    Step 1: Break The UI Into A Component Hierarchy. 
    Step 2: Build A Static Version in React. 
    Step 3: Identify The Minimal (but complete) Representation Of UI State. 
    Step 4: Identify Where Your State Should Live. 
    Step 5: Add Inverse Data Flow.


3. Describe state.

    --State is an object that determines how the component renders and behaves. It constantly changes in response to events.  An example of this would be a scoreboard changing its score at the click of a button on the screen.

4. Describe props.

    --Props are properties which can be passed down from a parent to a child component enabling said components to be reusable and customizable.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    --Side effects are what happens when a function makes a call outside of its scope.  An example of this would be fetching data through a get request.  The useEffect hook enables the Developer to sync the side effects to a react component , state, or prop changes.
