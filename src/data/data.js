const mydata=[
    {
        name:"هزار و یک شب",
        number:0,
        amout:95000,
        due:"1399,5,7"
    },
    {
        name:"شبخیز",
        number:1,
        amout:76000,
        due:"1390,5,7"
    },
    {
        name :"صبح طلایی",
        number:2,
        amout:70000,
        due:"1394,5,7"
    }
]
export function Data(){ //extract mydata
  return mydata
}
export const bid=(number)=>{return mydata.find(b=>b.number===number)}
