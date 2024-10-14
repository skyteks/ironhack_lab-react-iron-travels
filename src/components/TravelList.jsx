import React, { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [data, setData] = useState(travelPlansData);
    const clickRemove = (removedId) => setData(data.filter((item) => item.id != removedId));

    return <div style={{ display: 'flex', flexDirection: 'column', width: "100%", gap: "20px", alignItems: "center" }}>
        {data.map((item) =>
            <div key={item.id} style={{ display: 'flex', gap: "20px", width: "700px", justifyContent: 'space-between', borderWidth: "2px", borderStyle: "solid", borderColor: "black", borderRadius: "5px", padding: "10px" }}>
                <img src={item.image} style={{ width: "50%" }} />
                <div style={{ textAlign: "left" }}>
                    <h2>{item.destination} ({item.days} Day{item.days != 1 && "s"})</h2>
                    <p></p>
                    <p><i>{item.description}</i></p>
                    <p><b>Price: </b>{item.totalCost} €</p>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: "10px", marginBottom: "10px" }}>
                        {item.allInclusive && <div style={{ color: "white", backgroundColor: "blue", padding: "5px", borderRadius: "5px" }}>All-Inclusive</div>}
                        {item.totalCost >= 1500 && <div style={{ color: "white", backgroundColor: "blue", padding: "5px", borderRadius: "5px" }}>Premium</div>}
                        {item.totalCost <= 350 && <div style={{ color: "black", backgroundColor: "darkgreen", padding: "5px", borderRadius: "5px" }}>Great Deal</div>}
                    </div>
                    <button onClick={() => clickRemove(item.id)}>Remove</button>
                </div>
            </div>
        )}
    </div>
}

export default TravelList;