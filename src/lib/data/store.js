import { writable } from 'svelte/store'

let cart = {
  items: 69,
  courses: [],
}

export const cartStore = writable(cart)
