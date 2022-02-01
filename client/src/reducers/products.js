export default (products = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'FETCH_BY_ID':
                return action.payload;
            
        case 'CREATE':
            return [ ...posts, action.payload];
        default:
            return posts;
    }
}