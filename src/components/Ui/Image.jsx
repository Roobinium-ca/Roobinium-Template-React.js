const Image = (props) => {
    return (
        <>
            <img className={props.class} src={'../' + props.url} alt={props.alt}/>
        </>
    )
};

export default Image;
