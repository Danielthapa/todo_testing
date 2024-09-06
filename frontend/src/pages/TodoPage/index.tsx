import { useEffect, useState } from "react";
import CategoriesList from "../../components/CategoriesList";
import TaskList from "../../components/TaskList";
import classes from './style.module.scss';
import { CategoryResponse, getAllCategories } from "../../services/category-services";

const TodoPage = () => {
    const [categories, setCategories] = useState<CategoryResponse[]>([]);

    useEffect(() => {
        getAllCategories()
            .then((data) => setCategories(data))
            .catch(e => console.log(e));
    }, [])

    return (
        <main className={classes.todoPageContainer}>
            <section className={classes.pageHeader}>
                <p className={classes.pageTitle}>Todo App</p>
            </section>
            <section className={classes.pageBody}>
                <CategoriesList categories={categories} />
                <TaskList />
            </section>
        </main>

    )
}

export default TodoPage;