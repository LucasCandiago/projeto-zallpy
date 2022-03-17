import { Filter } from "./styled/Input"

function Input({ type, placeholder, value, onChange }) {
    
    return (
        <Filter
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
    )
}

export default Input