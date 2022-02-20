# How to use context in react

## General Approach
There are esentially three componenets to using contexts
1. Create the context: ```React.createContext()```
2. Provide the context to the componenet: ```<VarContext.Provider value={data} />```
3. Consume the context on the local component: ```useContext()``` or ```<VarContext.Consumer></ VarContext.Consumer>```

## Example Usage
### Simple Context Usage
This can implement context on a single componenet. Not super useful, but it helps illustrate how the componenets are used.
```js
import React from 'react';
import logo from './logo.svg';
import './App.css';

// STEP 1: Insanciate the context with createContext
const TitleContext = React.createContext('Default Title');

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* STEP 2: Send the context to the next component */}
        <TitleContext.Provider value={'New Title'}>
          <Print />
        </TitleContext.Provider>
      </header>
    </div>
  );
}

export default App;

function Print(){
  return (
    // STEP 3: Consume the context
    <TitleContext.Consumer>
      {value => <h1>{value}</h1>}
    </TitleContext.Consumer>
  )
}
```

### Complex Context Usage
This is for when you want to create a global context used accross the entire site.

1. Create a context provider file. (SiteData.js)
```js
import React, { createContext, useEffect, useState } from 'react';

// Step1: Create the context and ensure to export it
export const SiteContext = createContext();

// Step2: Create a function that provides the context.
// NOTE: remember to pass children as prop
export default function SiteContextProvider({children}){
    // Within the provider function, INIT STATES
    let [siteTitle, setSiteTitle] = useState('Default Title');
    let [favoriteColor, setFavoriteColor] = useState('brown');
    let [luckyNumbers, setLuckyNumbers] = useState([]);


    // ESTABLISH LOGIC TO MANAGE STATES
    useEffect(function(){
        setSiteTitle('Updated Through use effect');
    },[]);

    useEffect(function(){
        setLuckyNumbers([3, 7, 9]);
    },[]);

    // PREPARE THE FINAL CONTEXT OBJECT
    const dataBall = {
        siteTitle,
        favoriteColor,
        setFavoriteColor, // Notice that we can pass functions through objects
        luckyNumbers
    }

    // RETURN the Provider with the proper syntax
    // SiteContext matches line 4. Value is the data passed. Children is the argument from the start of the function.
    return <SiteContext.Provider value={dataBall}>{children}</SiteContext.Provider>;
    
}
```
2. Add the context provider tags to index file (index.js)
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// STEP 3: Import the Site context provider into the index.js
import SiteContextProvider from '../src/contexts/SiteData'

ReactDOM.render(
  <React.StrictMode>
    {/* STEP 4: Wrap all children componenets in the ContextProvider Tag we just created */}
    <SiteContextProvider> {/* CONTEXT PROVIDER */}
       <App />  {/* CHILD COMPONENT */}
    </SiteContextProvider>


  </React.StrictMode>,
  document.getElementById('root')
);
```

3. Consume the context data (App.js)

```js
import React, { useContext, useEffect } from 'react';
// STEP 5: Import the Context. 
// NOTE: the context was not default, so we need to destructure it.
import { SiteContext } from './contexts/SiteData';


export default function App(){
  // STEP 6: consume the desired object from the context by destructuring it from the context object.
  const { siteTitle, luckyNumbers, setFavoriteColor, favoriteColor } = useContext(SiteContext);


  useEffect(function(){
    setFavoriteColor('blue'); // Set a function as a context, and now we are using it here in the component.
  },[]);



  return(
    <>
      <div>
        {/* STEP 7: Use the data we want */}
        <h1>{ siteTitle }</h1>
      </div>
      <div>
        Your lucky number for today is: {luckyNumbers[1]}
      </div>

      <div>
        Your new favorite Color is: {favoriteColor} 
      </div>
    </>
  )
}
```