import React from 'react'

class DecreaseCount extends React.Component {
    decrease = () => {
        this.props.decreaseAction(this.props.mutableValue)
    }

    render() {
        return (
            <button className="decreaseButton button" onClick={this.decrease}>
                Decrement counter
            </button>
        )
    }
}

export default DecreaseCount
