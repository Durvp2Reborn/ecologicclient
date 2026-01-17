import {useEffect, useState} from "react";
import Scanner from "./BarCode";

function App() {
    const [foodData, setFoodData] = useState<any>(null);
    const [barcode, setBarcode] = useState<string>("");

    useEffect(() => {
        const API_URL = "https://ecologicapi.onrender.com/api/products/?upcCode=" + barcode;

        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setFoodData(data);
                setFoodData(null);
            })
            .catch((error) => {
                setError(error.message);
                setData(null);1q1esa43``
            })

    })

    // Handle data received from the scanner
    const handleBarcodeDetected = (product: any) => {
        setFoodData(product);
        setBarcode(product.code || "Unknown Barcode");
    };

    return (
        <div>
            <h1>Food Scanner</h1>
            <Scanner/>
            <div id={"containera"}>
                <input id={"barcodeType"}
                       type="text"
                       placeholder="Type barcode here"
                />
                <button id={"button"} onClick={() => {setBarcode((document.getElementById("barcodeType") as HTMLInputElement).value)}}>search</button>
            </div>
            {/*<div>*/}
            {/*    <h3>Scanned Barcode:</h3>*/}
            {/*    <p>{barcode || "No barcode detected yet."}</p>*/}
            {/*    {foodData ? (*/}
            {/*        <div>*/}
            {/*            <h3>Product Information:</h3>*/}
            {/*            <p><strong>Name:</strong> {foodData.product_name || "Unknown"}</p>*/}
            {/*            <p><strong>Brand:</strong> {foodData.brands || "Unknown"}</p>*/}
            {/*            <p><strong>Categories:</strong> {foodData.categories || "Unknown"}</p>*/}
            {/*            <p><strong>Ingredients:</strong> {foodData.ingredients_text || "Not available"}</p>*/}
            {/*            <p><strong>Nutritional Grade:</strong> {foodData.nutrition_grade_fr || "Not available"}</p>*/}
            {/*        </div>*/}
            {/*    ) : (*/}
            {/*        <p>No product information available</p>*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    );
}

export default App;