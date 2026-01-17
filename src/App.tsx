import { useState } from "react";

import Scanner from "./BarCode.tsx";

function App() {
    const [data, setData] = useState("Not Found");

    return (
        <Scanner/>
    );
}

export default App;