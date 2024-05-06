import classes from './Button.module.css'

export default function Button({children, onClick, isActive, ... props }) {   

    return (
        <button 
            {... props}
            className={ isActive ? `${classes.button} ${classes.active}`: `${classes.button}` } 
            onClick={onClick}
        >
            {children}
        </button>
    )
}