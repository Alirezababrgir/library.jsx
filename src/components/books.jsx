import { NavLink,Outlet} from "react-router-dom";
import { Data } from "../data/data";
const Books = () => {
    const mydata = Data();
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">جستجو</button>
                    </form>

                </div>
                <div className="col">
                    {mydata.map((data) => (
                        <NavLink to={`/books/${data.number}`} key={data.number}style={({isActive})=>{
                            return{
                                textDecoration:"none",
                                display:"block",
                                color:isActive?"red":""
                            }
                        }}>
                            {data.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            <Outlet />
        </div>
    )
}
export default Books;