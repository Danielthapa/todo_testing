import { useState } from 'react';
import AddIcon from '../../assets/icons/AddIcon';
import EditIcon from '../../assets/icons/EditIcon';
import RightArrowIcon from '../../assets/icons/RightArrowIcon';
import TrashIcon from '../../assets/icons/TrashIcon';
import AddCategoryBox from '../AddCategoryBox';
import IconButton from '../Buttons/IconButton';
import CategoryBox from '../CategoryBox';
import classes from './style.module.scss';

const CategoriesList = () => {
    const [showAddNewCat, setShowAddNewCat] = useState(false);

    const toggleAddNewCat = () => {
        setShowAddNewCat(prev => !prev);
    }

    return (
        <div className={classes.listContainer}>
            <div className={classes.listHeader}>
                <p className={classes.listTitle}>Categories: 5</p>
                <div className={classes.actionsWrapper}>
                    <IconButton onClick={toggleAddNewCat} ><AddIcon /></IconButton>
                </div>
            </div>

            <div className={classes.listBody}>
                {showAddNewCat && (
                    <AddCategoryBox />
                )}
                <CategoryBox title="All" buttons={<button title='action-button' type='button' className={classes.actionButton}><RightArrowIcon /></button>} />
                <CategoryBox title="Project" buttons={<><button title='action-button' type='button' className={classes.actionButton}><EditIcon /></button><button title='action-button' type='button' className={classes.actionButton}><TrashIcon /></button></>} />
                <CategoryBox title="Home" buttons={<><button title='action-button' type='button' className={classes.actionButton}><EditIcon /></button><button title='action-button' type='button' className={classes.actionButton}><TrashIcon /></button></>} />
                <CategoryBox title="FItness" buttons={<><button title='action-button' type='button' className={classes.actionButton}><EditIcon /></button><button title='action-button' type='button' className={classes.actionButton}><TrashIcon /></button></>} />
                <CategoryBox title="School" buttons={<><button title='action-button' type='button' className={classes.actionButton}><EditIcon /></button><button title='action-button' type='button' className={classes.actionButton}><TrashIcon /></button></>} />
                <CategoryBox title="Food and Bev" buttons={<><button title='action-button' type='button' className={classes.actionButton}><EditIcon /></button><button title='action-button' type='button' className={classes.actionButton}><TrashIcon /></button></>} />
            </div>
        </div>
    )
}

export default CategoriesList;