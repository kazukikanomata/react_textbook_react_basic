export const App = () => {
    const onClickButton = () =>{
        alert("すげー表示された");
    };
    const contentStyle ={
        color: "blue",
        fontSize: "20px"
    };
    return(
        // 1つのタグで囲んでいこう
        // fragment便利すぎ
        <>
            { console.log("TEST") }
            <h1 style={{ color : "red" }}>Hello World!!</h1>
            <p style={ contentStyle }>お元気ですか？</p>
            <button onClick={ onClickButton }>ボタン</button>
        </>
    );
};