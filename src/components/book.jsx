import { useParams } from "react-router-dom";
import { bid } from "../data/data";
const Showbook=()=>{
    const params=useParams();
    const B=bid(parseInt(params.BookID))
    console.log(params);
return(
<div class="card">
    <h5>نام کتاب:{B.name}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">شماره شناسه:{params.BookID}</li>
    <li class="list-group-item">تاریخ انقضا:{B.due}</li>
    <li class="list-group-item">قیمت این کتاب {B.amout}میباشد</li>
  </ul>
</div>
)
}
export default Showbook;