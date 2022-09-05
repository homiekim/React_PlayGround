import React from 'react';
import { useRecoilValue } from 'recoil';
import { filterSelector } from '../../recoil/atoms';
import TodoItem from '../todo-item';

const FilteredTodoList = () => {
  const filteredList = useRecoilValue(filterSelector);
  return (
    <ul>
    {
      filteredList.map(v => <TodoItem key={v.id} item={v} />)
    }
    </ul>
  )
}

export default FilteredTodoList;