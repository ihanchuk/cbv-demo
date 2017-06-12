import axios from 'axios';

export const loadAuthorsByHTTP =  () => dispatch =>{
    axios.get('http://localhost:9000/authors')
        .then(function (response) {
        let authors = response.data;
        dispatch({
            type: 'LOAD_AUTHORS',
            payload: authors
        });
    })
    .catch(function (error) {
        console.log(error);
    });
}