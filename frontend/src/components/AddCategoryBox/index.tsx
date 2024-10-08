import CrossIcon from '../../assets/icons/CrossIcon';
import TickIcon from '../../assets/icons/TickIcon';
import classes from './style.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { CategoryFormData, schema } from './schema';
import { useForm } from 'react-hook-form';

const AddCategoryBox = ({ closeAddCat, onSubmit, defaultValues = { name: '', },
}) => {

    const {
        reset,
        register,
        formState: { errors, isSubmitSuccessful },
        handleSubmit,
    } = useForm<CategoryFormData>({
        resolver: zodResolver(schema),
        defaultValues,
    });

    isSubmitSuccessful && reset();

    return (
        <form className={classes.boxWrapper} onSubmit={handleSubmit(onSubmit)}>
            <input id="name" type="text" {...register('name')} placeholder='Enter Category' className={classes.titleInput} title='title-input' />

            <div className={classes.actionButtons}>
                <>
                    <button onClick={handleSubmit(onSubmit)} title='action-button' type='button' className={classes.actionButton}>
                        <TickIcon />
                    </button>
                    <button onClick={() => closeAddCat()} title='action-button' type='button' className={classes.actionButton}>
                        <CrossIcon />
                    </button>
                </>
            </div>
        </form>
    )
}

export default AddCategoryBox;