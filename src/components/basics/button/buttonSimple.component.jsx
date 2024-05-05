import "./buttonSimple.styles.scss";

const buttonSimple = ({label}) => {

    return (
        <button className="button" type="button" >{label}</button>
    );
}

export default buttonSimple;