import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { TailwindCss } from "./components/Tailwindcss";
export const App = () => {

    // stateは状態を管理する
    const [num, setNum] = useState(0);

    // numが変更してきた時、alertを表示する。
    // 画面を表示して初期データを取得するときに使う。
    useEffect(() => {
        // alert();
    }, [num]);

    

    const onClickButton = () =>{
        // どっちでもかける。prevの方が妥当かもしれん。
        // setNum(num + 1);
        setNum( (prev) => prev + 1);
    };
    return(
        // 1つのタグで囲んでいこう
        // fragment便利すぎ
        <>
            <h1 style={{ color : "red" }}>Hello World!!</h1>
            <TailwindCss/>
            <ColoredMessage color= "blue" fontSize= "20px">お元気ですか？</ColoredMessage>
            <ColoredMessage color= "pink" fontSize= "10px">元気です！</ColoredMessage>
            <ColoredMessage color= "white" fontSize="40px">hey!</ColoredMessage>
            <button onClick={ onClickButton }>ボタン</button>
            <p>{ num }</p>
        </>
    );
};