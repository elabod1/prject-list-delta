const InputList = () => {
  return (
    <form action="">
        <div className="place-self-center">
            <div className="grid grid-cols-1">
                <label htmlFor="Product">Product Name</label>
                <input id="Product" type="text" className="border-solid rounded-lg h-10 w-96 border-slate-600 bg-slate-200" />
            </div>
            <div className="grid grid-cols-1 my-3">
             <label htmlFor="Price">Price</label>
             <input id="Price" type="number" className="border-solid rounded-lg h-10 w-96 border-slate-600 bg-slate-200" />
            </div>
            <button className="bg-green-500 border-solid rounded-md h-10 w-32">Add Product</button>
        </div>
    </form>
)
}

export default InputList