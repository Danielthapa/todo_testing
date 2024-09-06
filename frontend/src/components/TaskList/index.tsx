import AddIcon from '../../assets/icons/AddIcon';
import IconButton from '../Buttons/IconButton';
import TaskCard from '../TaskCard';
import classes from './style.module.scss';

const TaskList = () => {
    return (
        <section className={classes.todoContainer}>
            <div className={classes.todoHeader}>
                <div className={classes.headerTitle}>{`Tasks (Fitness): 30`}</div>
                <div className={classes.headerActions}>
                    <IconButton ><AddIcon /></IconButton>

                </div>
            </div>

            <div className={classes.taskBody}>
                <TaskCard />
                <TaskCard />

                <TaskCard />

                <TaskCard />

                <TaskCard />

            </div>
        </section>
    )
}

export default TaskList;