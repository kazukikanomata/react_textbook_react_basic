export const App = () => {
    const onClickButton = () =>{
        alert("すげー表示された");
    };
    return(
        // 1つのタグで囲んでいこう
        // fragment便利すぎ
        <>
            { console.log("TEST") }
            <h1>Hello World!!</h1>
            <p>お元気ですか？</p>
            <button onClick={ onClickButton }>ボタン</button>
        </>
    );
};