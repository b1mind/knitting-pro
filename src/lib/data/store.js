import { persistStore } from './persistStore'
const data = []

export let cartStore = persistStore('cart', data)
// import { writable } from 'svelte/store'

// let courses = [
//   {
//     title: 'test',
//     price: '24.99',
//   },
//   {
//     title: 'another course',
//     price: '3.99',
//   },
//   {
//     title: 'random name course',
//     price: '2.99',
//   },
// ]

// // export const cartStore = writable(courses)
// export const cartStore = writable([])
