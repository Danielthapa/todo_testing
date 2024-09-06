import CrossIcon from '../../assets/icons/CrossIcon';
import TickIcon from '../../assets/icons/TickIcon';
import classes from './style.module.scss';

const AddCategoryBox = () => {
    return (
        <div className={classes.boxWrapper}>
            <input placeholder='Enter Category' className={classes.titleInput} title='title-input' />

            <div className={classes.actionButtons}>
                <><button title='action-button' type='button' className={classes.actionButton}><TickIcon /></button><button title='action-button' type='button' className={classes.actionButton}><CrossIcon /></button></>
            </div>
        </div>
    )
}

export default AddCategoryBox;