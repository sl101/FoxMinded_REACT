import style from './IncreaseCount.module.scss'

const IncreaseCount = (props) => {
    return (
        <button
            className={`${style.increaseButton} ${'button'}`}
            onClick={() => props.increaseAction(props.mutableValue)}
        >
            Increment counter
        </button>
    )
}

export default IncreaseCount
