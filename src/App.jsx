import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    return (
        <div className="app">
            <h1>Hello React</h1>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </div>
        </div>
    )
}

export default App;