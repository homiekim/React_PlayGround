import React from 'react';
import {  useSetRecoilState } from 'recoil';
import { filterSelector } from '../../recoil/atoms';

const AllDoneButton = () => {
  const  setFilter = useSetRecoilState(filterSelector);
 
  return <button  onClick={()=>setFilter([])}>전체 todo Done</button>
}

export default AllDoneButton;