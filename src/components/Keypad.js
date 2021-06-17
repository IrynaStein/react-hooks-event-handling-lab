// Code Keypad Component Here

function Keypad (){
    function enterPw (){
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={enterPw}/>
    );
};

export default Keypad;