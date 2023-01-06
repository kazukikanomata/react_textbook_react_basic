import { ColoredMessage } from "./components/ColoredMessage";
export const App = () => {

    const onClickButton = () =>{
        alert("すげー表示された");
    };
    return(
        // 1つのタグで囲んでいこう
        // fragment便利すぎ
        <>
            <h1 style={{ color : "red" }}>Hello World!!</h1>
            <ColoredMessage color= "blue" message= "お元気ですか？" fontSize= "20px" />
            <ColoredMessage color= "pink" message= "元気です！" fontSize= "10px" />
            <ColoredMessage color= "white" message= "hey!" fontSize="40px"/>
            <button onClick={ onClickButton }>ボタン</button>
        </>
    );
};