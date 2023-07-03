import { Link } from "react-router-dom";
import { Data } from "../data/data";
import { Outlet } from "react-router-dom";
const Books = () => {
    const mydata = Data();
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>
                <div className="col">
                    {mydata.map((data) => (
                        <Link to={`/books/${data.number}`} key={data.number} style={{display:"block"}}>
                            {data.name}
                        </Link>
                    ))}
                </div>
            </div>
            <Outlet/>
        </div>
    )
}
export default Books;