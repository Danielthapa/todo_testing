import classes from './style.module.scss';

const CategoryBox = ({ title, buttons }) => {
    return (
        <div className={classes.boxWrapper}>
            <p className={classes.categoryTitle}>{title}</p>

            <div className={classes.actionButtons}>
                {buttons}
            </div>
        </div>
    )
}

export default CategoryBox;