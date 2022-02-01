import * as api from '../api';


//actions 
export const getProducts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchProducts();

        dispatch({type: 'FETCH_All', payload: data})
        console.log(data);
        console.log('voila data');


    } catch (error) {
        console.log(error);
    }

}

export const getProduct = (_id) => async (dispatch) => {
    try {
        const {data} = await api.fetchProducts();

        dispatch({type: 'FETCH_BY_ID', payload: data})
        console.log(data);
        console.log('voila la selection');


    } catch (error) {
        console.log(error);
    }

}

export const createProduct = (product) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(product);

        dispatch({ type: 'CREATE', payload: data }) ;
    } catch (error) {
        console.log(error);
    }
}