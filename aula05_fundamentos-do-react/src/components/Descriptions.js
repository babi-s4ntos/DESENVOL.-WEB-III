const Description = (props) =>{
    //props = {} é um objeto
    //props -> significa propriedades
    return (
        <>
            <div>
                <p>Seu nome é: {props.name}</p>
                <p>Sua idade é: {props.age}</p>
            </div>
        </>
    );
};
export default Description;