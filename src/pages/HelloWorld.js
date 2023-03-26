import {useState} from "react";

export const HelloWorld = () => {
    const [value, setValue] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => {
      value === 'hello' && setIsVisible(prevState => !prevState);
    }

    const onChange = (e) => setValue(e.target.value);

    return (
        <div>
            <input id="input" onChange={onChange} value={value}/>
            <button id="btn" onClick={toggle}>Toggle</button>
            {isVisible && <h1 id="value">{value}</h1>}
        </div>
    )
}
