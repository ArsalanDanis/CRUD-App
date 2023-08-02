import { Link , Outlet} from "react-router-dom"

const Navbar =()=>{
    return(
        <>
        
        <nav className=" p-5 bg-black text-white flex justify-end gap-9 font-[35px]">
            <img src="https://logopond.com/logos/70a5a28358a0f80718ac4f6737f018ae.png" alt="crudlogo" className=" h-[50px] w-[50px] rounded-[50%] absolute left-2 top-2" />
           <Link to="/">Home</Link>
           <Link to="/products">Products</Link>
           <Link to="/createProducts">CreateProducts</Link>
           <Link to="/updateProducts">UpdateProducts</Link>
        </nav>
        <Outlet />
        </>
    )
}
export default Navbar;
