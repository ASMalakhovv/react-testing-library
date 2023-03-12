// import {useEffect, useState} from "react";
//
// import './App.css';
// import {Users} from "./Users/Users";
//
// function App() {
//     const [data, setData] = useState(null);
//     const [isToggle, setIsToggle] = useState(false);
//     const [value, setValue] = useState('');
//
//     const handleBtnClick = () => {
//       setIsToggle(prevState => !prevState);
//     };
//
//     useEffect(() => {
//         setTimeout(() => {
//             setData({})
//         }, 100)
//     }, [])
//
//     return (
//         <div className="App">
//             <h1 data-testid="data-value">{value}</h1>
//             {data && <div style={{ color: 'red' }}>data</div>}
//             <h1>Hello world</h1>
//             {isToggle && <span data-testid="toggle-span">toggle</span>}
//             <button
//                 onClick={handleBtnClick}
//                 data-testid="btn-toggle"
//             >
//                 click me
//             </button>
//             <input placeholder="inner text" value={value} onChange={(e) => setValue(e.target.value)}/>
//             <Users />
//         </div>
//     );
// }

import {AppRouter} from "./router/AppRouter";
import {Navbar} from "./components/Navbar/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <AppRouter />
        </>
    )
}

export default App;
