import { collection, getDocs, getFiresore, getFirestore } from "firebase/firestore";
import { useEffect } from "react";

const Items = [
    {id: 1, name: "IPhone 13 Pro", price: 1299.99, foto: "https://http2.mlstatic.com/D_NQ_NP_840175-MLA47779316482_102021-O.webp", categoria: "celulares"},
    {id: 2, name: "IPhone 12 Pro", price: 1099.99, foto: "https://http2.mlstatic.com/D_NQ_NP_824876-MLA43975720984_112020-O.webp", categoria: "celulares"},
    {id: 3, name: "Samsung Galaxy S21+", price: 849.99, foto: "https://http2.mlstatic.com/D_NQ_NP_976371-MLA45566612445_042021-O.webp", categoria: "celulares"},
    {id: 4, name: "Xiaomi Mi 11 Ultra", price: 920, foto: "https://http2.mlstatic.com/D_NQ_NP_751583-MLA46773535610_072021-O.webp", categoria: "celulares"}
];

useEffect(() => {
    const db = getFirestore();

    const itemCollection = collection(db, "items");
    getDocs(itemCollection).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
} ,[]);


export default itemCollection