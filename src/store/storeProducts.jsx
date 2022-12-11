import React,{useState,useContext} from 'react';
import remera from "../images/productsImages/remeraOscura.jpg"
import buso from "../images/productsImages/buso.jpg"

const appContext = React.createContext({
    products:[],
    createProduct: (product) => {},
    getProduct: (id) => {},
    updateProduct: (product) => {},

})

export function useAppContext(){
    return useContext(appContext)
}

const StoreProducts = ({children}) => {

    const objeto={
        id:crypto.randomUUID(),
        title:'Remera',
        oferta: false ,
        cover:{remera},
        precio:1000,
        description:"Es una remera oscura con un dibujo simple",
        }
        

    const [products, setProducts] = useState([objeto]);

    const createProduct = (product) => {
        const temp= [...products];
        temp.push(product);

        setProducts(temp);
    }

    const getProduct= (id) => {
        const product = products.find((product) => product.id === id);
        return product
    }

    const updateProduct= (product) => {
        const index = products.findIndex((i) => i.id === product.id);
        const temp = [...products];

        temp[index] = {...product};
    }

    return (
        <appContext.Provider value={{
            products,
            createProduct,
            getProduct,
            updateProduct,
        }}
        >
            {children}
        </appContext.Provider>
    );
}

export default StoreProducts;
