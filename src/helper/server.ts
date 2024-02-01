import Swal from 'sweetalert2';
import { tpRecipe } from '../files/types';
import { tpItem } from '../files/types';
import { tpIngredient } from '../files/types';

// URL del servidor JSON
const urlBase:string = "http://localhost:3001/"

// Fetching GET

export const recipeFetchGETone = (endpoint:string, setRecipe: React.Dispatch<React.SetStateAction<tpRecipe>>) => {
    fetch(`${urlBase}${endpoint}`)
        .then(response => response.json())
        .then(jsonData => {
            setRecipe(jsonData);
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })}
        )
}

export const itemFetchGETall = (endpoint:string, setItem: React.Dispatch<React.SetStateAction<tpItem[]>>) => {
    fetch(`${urlBase}${endpoint}`)
        .then(response => response.json())
        .then(jsonData => {
            setItem(jsonData);
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })}
        )
}

export const ingredientsFetchGETall = (endpoint:string, setIngredients: React.Dispatch<React.SetStateAction<tpIngredients[]>>) => {
    fetch(`${urlBase}${endpoint}`)
        .then(response => response.json())
        .then(jsonData => {
            setIngredients(jsonData);
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })}
        )
}

// Fetching POST