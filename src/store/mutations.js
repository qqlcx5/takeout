import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS] (state, {
    address
  }) {
    console.log(address)
    state.address = address
  },
  [RECEIVE_CATEGORY] (state, {
    category
  }) {
    state.category = category
  },
  [RECEIVE_SHOPS] (state, {
    shops
  }) {
    state.shops = shops
  }
}
