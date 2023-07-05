import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { Data } from "../data/data";
const Books = () => {
    const [serachparams, setserachparams] = useSearchParams();
    const location=useLocation();
    const mydata = Data();
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="کتاب مورد نظر ..." aria-label="Search"
                            value={serachparams.get("filter" || "")}
                            onChange={Event => {
                                var filter = Event.target.value;
                                if (filter) { setserachparams({ filter: filter }) }
                                else { setserachparams({}) }
                            }}
                        />
                    </form>

                </div>
                <div className="col">
                    {mydata.filter((data) => {
                        var filter = serachparams.get("filter");
                        if (!filter) return true;
                        var name = data.name.toLocaleLowerCase();
                        return name.startsWith(filter.toLocaleLowerCase());
                    }).map((data) => (
                        <NavLink to={`/books/${data.number}${location.search}`} key={data.number} style={({ isActive }) => {
                            return {
                                textDecoration: "none",
                                display: "block",
                                color: isActive ? "red" : ""
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