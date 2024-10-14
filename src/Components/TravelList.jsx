import React, { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [data, setData] = useState(travelPlansData);
    
}

export default TravelList