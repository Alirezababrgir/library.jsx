import { useParams, useLocation,useNavigate } from "react-router-dom";
import { bid, deletdata } from "../data/data";
const Showbook = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const params = useParams();
  const B = bid(parseInt(params.BookID))
  return (
    <div class="card">
      <h5>نام کتاب:{B.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">شماره شناسه:{params.BookID}</li>
        <li class="list-group-item">تاریخ انقضا:{B.due}</li>
        <li class="list-group-item">قیمت این کتاب {B.amout}میباشد</li>
        <li><button onClick={() => {
          deletdata(B.number)
          navigate("/books"+location.search)
        }}>حذف کتاب</button></li>
      </ul>
    </div>
  )
}
export default Showbook;