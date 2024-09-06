import DuplicateIcon from '../../assets/icons/DuplicateIcon';
import EditIcon from '../../assets/icons/EditIcon';
import TrashIcon from '../../assets/icons/TrashIcon';
import classes from './style.module.scss';

const TaskCard = () => {
    return (
        <div className={classes.cardWrapper}>
            <div className={classes.cardHeader}>
                <p className={classes.categoryTitle}>Category</p>
                <div className={classes.actionsContainer}>
                    <button title='action-button' type='button' className={classes.actionButton}><DuplicateIcon /></button>
                    <button title='action-button' type='button' className={classes.actionButton}><EditIcon /></button>
                    <button title='action-button' type='button' className={classes.actionButton}><TrashIcon /></button>
                </div>
            </div>
            <div className={classes.cardBody}>
                <p className={classes.taskDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}

export default TaskCard;