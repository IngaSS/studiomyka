import masterclasses from "./masterclasses.json";
import axios from "axios";

import moment from "moment";


export default {
    state: {
        masterСlasses: [],
        cartItems: [],
        masterDetails: [],
        Sertificates: ['Выбрать номинал', '3000 руб.', '4000 руб.', '5000 руб.']
    },
    mutations: {
        updateMasterClasses(state) {
            state.masterСlasses = masterclasses;
        },

        removeProduct(state, product) {
            if (product.quantity > 1) {
                product.quantity--;
            } else {
                state.cartItems.splice(state.cartItems.indexOf(product), 1);
            }
        },

        pushMasterToCart(state, item) {
            let prod = Object.assign({ quantity: 1 }, item);
            state.cartItems.push(prod)
        },

        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++
        },

        addToMasterDetails(state, item) {
            if (state.masterDetails.length > 0) {
                state.masterDetails.splice(0);
                state.masterDetails.push(item);
            } else {
                state.masterDetails.push(item);
            }

            console.log(masterDetails);
        },

        updateSertificatesList(state, item) {
            console.log(item);
            switch (item) {
                case '3000 руб.':
                    state.cartItems.push({
                        price: 3000,
                        h3: 'Сертификат на 3000 руб.',
                        quantity: 1,
                        img: "sertPic.png"
                    });
                    break;
                case '4000 руб.':
                    state.cartItems.push({
                        price: 4000,
                        h3: 'Сертификат на 4000 руб.',
                        quantity: 1,
                        img: "sertPic.png"
                    });
                    break;
                case '5000 руб.':
                    state.cartItems.push({
                        price: 5000,
                        h3: 'Сертификат на 5000 руб.',
                        quantity: 1,
                        img: "sertPic.png"
                    });
                    break;
                default:
                    break;
            }
        },
    },
    actions: {
        masterClassesList(context) {
            // axios.get('http://area51dev.studiomyka.ru:8080/product/').then((response) => {
            //     console.log(response);
            //     context.commit('updateMasterClasses', response.data);
            // })

            context.commit('updateMasterClasses');

        },

        addMasterToCart(context, item) {
            const cartItem = context.state.cartItems.find(el => el.id_master === item.id_master);
            if (!cartItem) {
                context.commit('pushMasterToCart', item);
            } else {
                context.commit('incrementItemQuantity', cartItem);
            }

        },

        showDetails(context, item) {
            console.log(item);
            context.commit('addToMasterDetails', item);
        },

        buySert(context, item) {
            context.commit('updateSertificatesList', item);
        },
    },
    getters: {
        masterClasses(state) {
            return state.masterСlasses;
        },

        cart(state) {
            return state.cartItems;
        },

        masterClassDetails(state) {
            return state.masterDetails;
        },

        sertificates(state) {
            return state.Sertificates;
        },
    }
}