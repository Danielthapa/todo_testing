import classes from './style.module.scss';

const IconButton = ({ children, ...props }) => {
    return (
        <button {...props} type="button" title="icon-button" className={classes.iconButton}>
            {children}
        </button>
    )
}

export default IconButton;