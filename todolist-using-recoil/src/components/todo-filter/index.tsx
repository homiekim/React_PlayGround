import React, { SyntheticEvent } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { statusAtom } from '../../recoil/atoms';

const TodoFilter = () => {
  const [todoStatus ,setTodoStatus] = useRecoilState(statusAtom);

  const clickHandler = (e:SyntheticEvent) =>{
    setTodoStatus((e.target as HTMLDivElement).innerHTML);
  }

  return (
    <div className='filter' onClick={clickHandler}>
      <span className={ todoStatus === 'All' ?'select':''}>All</span>
      <span className={ todoStatus === 'Done' ?'select':''}>Done</span>
      <span className={ todoStatus === 'Doing' ?'select':''}>Doing</span>
    </div>
  )
}

export default TodoFilter;