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






/////////////////// SIMPLE CONTEXT USAGE
// /*
//  * Three Parts of Context
//  * 1. Create the context: React.createContext()
//  * 2. Provide the context to the componenet: <VarContext.Provider value={data} />
//  * 3. Consume the context on the local component: useContext or <VarContext.Consumer></ VarContext.Consumer>
//  */
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// // Insanciate the context with createContext
// const TitleContext = React.createContext('Default Title');

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         {/* Send the context to the next component */}
//         <TitleContext.Provider value={'New Title'}>
//           <Print />
//         </TitleContext.Provider>
//       </header>
//     </div>
//   );
// }

// export default App;

// function Print(){
//   return (
//     // Consume the context
//     <TitleContext.Consumer>
//       {value => <h1>{value}</h1>}
//     </TitleContext.Consumer>
//   )
// }

