export const ColoredMessage = (props) => {
    const contentStyle ={
        color: props.color,
        fontSize: props.fontSize
    };
    return <p style={ contentStyle }>{ props.message }</p>;
};