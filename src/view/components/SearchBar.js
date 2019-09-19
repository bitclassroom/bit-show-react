import React, { useState, useEffect, useRef } from 'react'

const SearchBar = props => {
    const { onSearch = f => f } = props

    const inputRef = useRef()
    const [textInput, setTextInput] = useState('')

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const onInputHandler = ({ target }) => {
        const textInput = target.value

        setTextInput(textInput)
        onSearch(textInput)
    }

    return (
        <form className="col s12">
            <div className="input-field col s12">
                <i className="material-icons prefix">search</i>
                <input
                    ref={inputRef}
                    onChange={onInputHandler}
                    value={textInput}
                    id="search"
                    type="search"
                    className="validate"
                    placeholder="Search shows"
                />
            </div>
        </form>
    )
}

export default React.memo(SearchBar)
