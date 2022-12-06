import axios from "axios";

// export function getRestaurants() {
//     return new Promise((resolve, reject) => {
//         axios.get('http://localhost:1337/api/restaurants')
//             .then(function (response) {
//                 resolve(response.data.data.flat())
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//             .then(function () {
//                 // always executed
//             });
//     })
// }

export async function getRestaurants() {
    const res = await axios.get('http://localhost:1337/api/restaurants')
    return res.data.data.flat()
}