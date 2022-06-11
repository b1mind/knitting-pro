import { persistStore } from './persistStore'
const data = []

export let cartStore = persistStore('cart', data)
