import { useState } from 'react';
import AddIcon from '../../assets/icons/AddIcon';
import EditIcon from '../../assets/icons/EditIcon';
import RightArrowIcon from '../../assets/icons/RightArrowIcon';
import TrashIcon from '../../assets/icons/TrashIcon';
import AddCategoryBox from '../AddCategoryBox';
import IconButton from '../Buttons/IconButton';
import CategoryBox from '../CategoryBox';
import classes from './style.module.scss';

const CategoriesList = ({ categories, createCategory }) => {
    const [showAddNewCat, setShowAddNewCat] = useState(false);

    const toggleAddNewCat = () => {
        setShowAddNewCat(prev => !prev);
    }

    return (
        <div className={classes.listContainer}>
            <div className={classes.listHeader}>
                <p className={classes.listTitle}>{`Categories ${categories ? `: ${categories.length}` : ''}`}</p>
                <div className={classes.actionsWrapper}>
                    <IconButton onClick={toggleAddNewCat} ><AddIcon /></IconButton>
                </div>
            </div>

            <div className={classes.listBody}>
                {showAddNewCat && (
                    <AddCategoryBox onSubmit={(data) => createCategory(data)} closeAddCat={() => setShowAddNewCat(false)} />
                )}
                <CategoryBox
                    title="All"
                    buttons={
                        <button title='Show all tasks' type='button' className={classes.actionButton}>
                            <RightArrowIcon />
                        </button>} />
                {categories && categories.map(cat => (
                    <CategoryBox
                        key={cat.id}
                        title={cat?.title}
                        buttons={
                            <><button title='Edit Category' type='button' className={classes.actionButton}>
                                <EditIcon />
                            </button>
                                <button title='Delete Category' type='button' className={classes.actionButton}>
                                    <TrashIcon />
                                </button></>} />

                ))}

            </div>
        </div>
    )
}

export default CategoriesList;