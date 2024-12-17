import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const schema=z.object({
    product: z.string().min(0,{message:"product name is required"}).max(50),
    price: z.number({invalid_type_error: 'price is required'}).min(0.01).max(100_000_000),
});

const InputList = ({onSubmit}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    }= useForm({
        resolver: zodResolver(schema),
    });
  return (
    <form onSubmit={handleSubmit(data=> {
        onSubmit(data);
        reset();
        })}>
        <div className="place-self-center">
            <div className="grid grid-cols-1">
             <label htmlFor="product">Product Name</label>
             <input {...register("product")} id="product" type="text" className="border-solid rounded-lg h-10 w-96 border-slate-600 bg-slate-200" />
             {errors.product && (<p className="text-red-800 py-1">{errors.product.message}</p>)}
            </div>
            <div className="grid grid-cols-1 my-3">
             <label htmlFor="price">Price</label>
             <input {...register("price",{valueAsNumber: true})} id="price" type="number" className="border-solid rounded-lg h-10 w-96 border-slate-600 bg-slate-200" />
             {errors.price && (<p className="text-red-800 py-1">{errors.price.message}</p>)}
            </div>
            <button className="bg-green-500 border-solid rounded-md h-10 w-32" type="submit">Add Product</button>
        </div>
    </form>
)
}

export default InputList