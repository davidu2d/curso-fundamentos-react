import React, {cloneElement} from "react"

export default function Familia(props) {
    const { children } = props
    return (
        <div>
            {
                children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}