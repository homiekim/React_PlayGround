import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { requestGetMovieList } from '../apis/fetch';
import AppendButton from '../components/AppendButton/AppendButton';
import Checkbox from '../components/Checkbox/Checkbox';
import DeleteButton from '../components/DeleteButton/DeleteButton';
import InputBox from '../components/input/InputBox';
import SearchBox from '../components/input/SearchBox';

import Loading from '../components/Loading';
import { Movies } from '../components/Movie_/Movie';
import { StyleMovieAllCheckArea, StyleMovieAllCheckText } from './MovieContainer.style';

const MovieContainer = () => {

    // 상태 정의(로딩상태, 영화리스트)
    const [loading, setLoading] = useState(false);
    const [movieList, setMovieList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // 전체 체크박스 every함수로 관찰
    const AllChecked = useMemo(() => {
        return movieList.every((movieItem)=> movieItem.checked);
    }, [movieList]);

    // 전체 체크박스의 checked가 모두 false면 true를 리턴
    const allNoneChecked = useMemo(()=> {
        return movieList.every((movieItem)=> !movieItem.checked)
    },[movieList]);

    const callApiGetMovieList = useCallback(async (name)=> {
        setLoading(true);
        try{
            const data = await requestGetMovieList(name, movieList.length+1);
            console.log(data);
            const newItems = data.items.map((item)=> ({
                ...item,
                checked : false,
            })); // 받아온 data를 map으로 돌면서 checked가 추가된 새로운 객체배열을 생성
            const newMovieList = movieList.concat(...newItems);
            setMovieList(newMovieList);
        }catch(e){
            console.error(e);
        }
        setLoading(false);
    },[movieList]);

    const handleChangeCheck = useCallback((link)=> {    // link가 고유하기 때문에 id처럼 사용함
        const newMovieList = movieList.map((movieItem)=> 
            link === movieItem.link
            ? {...movieItem , checked : !movieItem.checked}
            : movieItem
        );
        setMovieList(newMovieList);
    },[movieList]);

    const onChangeAllCheck = useCallback(()=> {
        const newMovieList = movieList.map((movieItem) =>({
            ...movieItem,
            checked : !AllChecked,
        }));
        setMovieList(newMovieList);
    }, [AllChecked, movieList]);

    const onDeleteChecked = useCallback(()=> {
        const newMovieList = movieList.filter((movieItem) => !movieItem.checked);
        setMovieList(newMovieList);
    }, [movieList]);

    useEffect(()=>{
        callApiGetMovieList('어벤져스');
    },[])

    const onChangeInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSearch = ()=>{
        console.log('test');
        callApiGetMovieList(inputValue);
    };

    return (
        <div>
            <SearchBox 
                handleSearch={handleSearch}
                onChangeInputValue={onChangeInputValue}
            />
            <StyleMovieAllCheckArea>
                <StyleMovieAllCheckText checked={AllChecked}>
                    전체선택
                </StyleMovieAllCheckText>
                <Checkbox checked={AllChecked} onChange={onChangeAllCheck}/>
                <DeleteButton disabled={allNoneChecked} onClick={onDeleteChecked} />
            </StyleMovieAllCheckArea>
            <Movies movieList={movieList} onChangeCheck={handleChangeCheck}/>
            <Loading isLoading={loading}/>
            <AppendButton onClick={handleSearch} inputValue={inputValue}/>
        </div>
    );
};

export default MovieContainer;