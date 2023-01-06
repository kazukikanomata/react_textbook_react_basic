export const ColoredMessage = (props) => {
    // propsを分割代入
    const { color, fontSize, children } = props;

    // 省略記法
    const contentStyle ={
        color,
        fontSize
    };

    return <p style={ contentStyle }>{ children }</p>;
};