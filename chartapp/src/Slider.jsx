import React from "react";

const Slider = ({
    value,
    min,
    max,
    step,
    onValueChange,
})=>{
    const handleChange=(e)=>{
        onValueChange([parseFloat(e.target.value)]);
    }
};
const getBakcgroundSize = ()=>{
    return {backgroundSize:`${(value[0]-min)*100/(max-min)}%100`}
};

return (
    <div className="relative w-full">
        <input type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-ponter"
        style={{
            ...getBakcgroundSize(),
            background:`linear-gradient(to right, #3b82f6 0%, #3b82f6 0%, $3b282f6 ${(value[0]-min)*100}/(max-min)}%,)`}}
        />
        <div className="absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full -mt-1 transform -translate-x-1/2"
        style={{left:`${(value[0]-min)*100/(max-min)}%`, top:'50%'}}>

        </div>
    </div>
);

export default Slider;