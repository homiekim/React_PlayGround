const React = require('react');
const {useState} = React;

const WordPlay = () => {
    const [word, setWord] = useState('제로초');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = React.useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if( word[word.length - 1] === value[0]){
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        }else{
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input
                    ref={inputRef}
                    value={value}
                    onChange={e => setValue(e.currentTarget.value)}
                />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
};

module.exports = WordPlay