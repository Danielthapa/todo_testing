import { useEffect, useState } from "react";
import CategoriesList from "../../components/CategoriesList";
import TaskList from "../../components/TaskList";
import classes from './style.module.scss';
import { CategoryResponse, createCategory, getAllCategories } from "../../services/category-services";
import { getAllTasks, TaskResponse } from "../../services/task-services";
import { CategoryFormData } from "../../components/AddCategoryBox/schema";

const TodoPage = () => {
    const [categories, setCategories] = useState<CategoryResponse[]>([]);
    const [tasks, setTasks] = useState<TaskResponse[]>([]);

    useEffect(() => {
        getAllCategories()
            .then((data) => setCategories(data))
            .catch(e => console.log(e));

        getAllTasks()
            .then(data => setTasks(data))
            .catch(e => console.log(e));
    }, [])

    const handleCreateCategory = (data: CategoryFormData) => {
        createCategory(data)
            .then((data) => {
                setCategories(prev => ({ ...prev, data }));
            })
            .catch(e => console.log('error creating category', e));
    }

    return (
        <main className={classes.todoPageContainer}>
            <section className={classes.pageHeader}>
                <p className={classes.pageTitle}>Todo App</p>
            </section>
            <section className={classes.pageBody}>
                <CategoriesList categories={categories} createCategory={handleCreateCategory} />
                <TaskList />
            </section>
        </main>

    )
}

export default TodoPage;