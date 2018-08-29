import database from './FirebaseService';
import Task from '../model/Task';

const listAll = callback =>{
    database.ref('tasks').on('value', (data) => {
        if (data != null) {
            let items = data.val();
            let tasks = [];
            for(let item in items){
                let task = new Task(
                    items[item].name,
                    items[item].detail,
                    items[item].priority
                );
                task.id = item;
                tasks.push(task);
            }
            callback(tasks)
        }
    });
}

const add = task =>{
    return new Promise.resolve({
        key: database.ref('tasks').push(task)
    })
}

//Para edicao
const edit = task => {
    return Promise.resolve({
        key:database.ref('tasks' + '/').child(task.id).update(
            {
                name:task.name,
                detail:task.detail,
                priority:task.priority
            }
        )
    })
}

const remove = id => {
    return Promise.resolve({
        key:database.ref('tasks' + '/').child(id).remove()
    })
}

export default{
    listAll,
    add,
    edit,
    remove
}