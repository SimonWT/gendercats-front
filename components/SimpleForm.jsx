

function SimpleForm (props) {
    const { title, scheme, sumbitText } = props

    const inputs = scheme.inputs.map(({ type, placeholder }) =>
        <input className="simple-form__input" placeholder={placeholder} type={type} />
    )

    return (
        <form className="simple-form">
            <p className="simple-form__title">{title}</p>
            {inputs}
            <button type="submit">{sumbitText}</button>
        </form>
    )
}

export default SimpleForm