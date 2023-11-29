import React,{useState} from 'react';

const Addcar = ({onAddcar}) =>{

    const [carname, setName] = useState("");
    const [model, setModel] = useState("");
    const [quantity, setQuantity] = useState("");

const handleAddcar =() =>{
    if(carname && model && quantity){
    onAddcar({carname,model,quantity:parseInt(quantity)});
    setName('');
    setModel('');
    setQuantity('');
}
};
return (
    <div>
        <h2>Add Cars</h2>
        <div className="form" style ={{textAlign:'center'}}>
            <label>Name: </label>
            <input type="text" placeholder="car name" value={carname} onChange={(e) => setName(e.target.value)}/>
            <br></br>
            <label>Model: </label>
            <input type="text" placeholder="model" value={model} onChange={(e) => setModel(e.target.value)}/>
            <br></br>
            <label>Quantity: </label>
            <input type="text" placeholder="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            <br></br>
            <div style={{}}>
            <button onClick={handleAddcar}>Add Car</button>
            <br></br>
            </div>
    </div>
    </div>
);
};

export default Addcar;
