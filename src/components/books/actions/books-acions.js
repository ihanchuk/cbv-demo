import axios from 'axios';

export const loadBooksByHTTP =  () => dispatch =>{
    axios.get('http://localhost:9000/books')
        .then(function (response) {
        let books = response.data;
        dispatch({
            type: 'LOAD_BOOKS',
            payload: books
        });
    })
    .catch(function (error) {
        console.log(error);
    });
}