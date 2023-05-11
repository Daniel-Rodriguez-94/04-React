// PropType sirve para definirle el tipo a las properties

import PropTypes from "prop-types"

export const FirstApp = ({title, subTitle}) => {
    
    return (
        <>
        <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}


FirstApp.propTypes = {
    title:PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: "Daniel",
    subTitle: "No hay subtítulo",
    title: "No hay título",
}