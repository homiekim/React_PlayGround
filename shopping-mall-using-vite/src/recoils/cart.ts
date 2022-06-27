import { CartType } from './../graphql/cart';
import { atom } from 'recoil';

export const checkedCartState = atom<CartType[]>({
  key:'cartState',
  default:[],
})