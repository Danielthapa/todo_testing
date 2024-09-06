import CategoriesList from "../../components/CategoriesList";
import TaskList from "../../components/TaskList";
import classes from './style.module.scss';

const TodoPage = () => {
    return (
        <main className={classes.todoPageContainer}>
            <section className={classes.pageHeader}>
                <p className={classes.pageTitle}>Todo App</p>
            </section>
            <section className={classes.pageBody}>
                <CategoriesList />
                <TaskList />
            </section>
        </main>

    )
}

export default TodoPage;