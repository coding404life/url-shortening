import React from 'react'

const FocusContext = React.createContext({
    inputEl: null,
    clickHandler: () => { }
})

export default FocusContext;