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
    },
    {
        name:"هزار و دو شب",
        number:6,
        amout:9500,
        due:"1300,5,7"
    },
    {
        name:"شبلیز",
        number:10,
        amout:100000,
        due:"1290,5,7"
    },
    {
        name:"شبخدز",
        number:111,
        amout:760,
        due:"1340,5,7"
    },
    {
        name :"صبح قهوه",
        number:22,
        amout:72000,
        due:"1294,5,7"
    },
    {
        name:"ناردون",
        number:90,
        amout:9500,
        due:"1396,5,7"
    },
    {
        name:"سیاه سفید",
        number:17,
        amout:78000,
        due:"1370,5,7"
    },
]
export function Data(){ //extract mydata
  return mydata
}
export const bid=(number)=>{return mydata.find(b=>b.number===number)}
