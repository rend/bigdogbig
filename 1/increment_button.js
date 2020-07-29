'use strict';

function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
        const stickyValue = window.localStorage.getItem(key);
        return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}

function App() {
    const [count, setCount] = useStickyState(0, "count");
  
    return (
        <div>
            <button className="btnPrimary" onClick={() => setCount(count + 1)} >
                {count}
            </button>
            <button className="btnPrimary" onClick={() => setCount(0)} >
                Reset
            </button>
        </div> 
    );
  }
  
const domContainer = document.querySelector('#increment_button_container');
ReactDOM.render(<App />, domContainer);