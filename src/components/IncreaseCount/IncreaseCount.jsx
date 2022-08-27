import style from './IncreaseCount.module.scss'

const IncreaseCount = (props) => {
    return (
        <button
            className={`${style.increaseButton} ${'button'}`}
            onClick={() => props.increaseValue(props.mutableValue)}
        >
            Increment counter
        </button>
    )
}

export default IncreaseCount
