// // import sertificates from "./sertificates.json";


// export default {
//     state: {
//         Sertificates: ['Выбрать номинал', '3000 руб.', '4000 руб.', '5000 руб.']
//     },
//     mutations: {
//         updateSertificatesList(state, item) {
//             console.log(item);
//             // switch (item) {
//             //     case '3000 руб.':
//             //         state.cartItems.push({
//             //             price: 3000,
//             //             h3: 'Сертификат',
//             //             quantity: 1
//             //         });
//             //         break;

//             //     default:
//             //         break;
//             // }

//             if (item === '3000 руб.') {
//                 state.cartItems.push({
//                     price: 3000,
//                     h3: 'Сертификат',
//                     quantity: 1
//                 });
//             }

//             console.log(state.cartItems);

//         },
//     },
//     actions: {
//         buySert(context, item) {
//             context.commit('updateSertificatesList', item);
//         },
//     },
//     getters: {
//         sertificates(state) {
//             return state.Sertificates;
//         },
//     }
// }