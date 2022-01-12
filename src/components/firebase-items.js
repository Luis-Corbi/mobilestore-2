import { addDoc, collection, getFiresore, getFirestore } from "firebase/firestore";

const enviarorden = () => {
    const orden = {
        buyer: { name: "juan", phone: "4327", email: "juan@example.com" },
        items: [{ name: "IPhone 13 Pro", price: 1299.99, foto: "https://http2.mlstatic.com/D_NQ_NP_840175-MLA47779316482_102021-O.webp", categoria: "celulares" }],
        total: 1299.99
    };
    const db = getFirestore();

    const ordersCollection = collection(db, "orden");

    addDoc(ordersCollection, orden).then(({ id }) => setOrderId(id));
}