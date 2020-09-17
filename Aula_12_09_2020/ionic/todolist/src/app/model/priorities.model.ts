const Priority = []

Priority['Urgente'] = 'priority-high';
Priority['Média'] = 'priority-medium';
Priority['Baixa'] = 'priority-low';

const getPriority = (priority: string) =>{
    return Priority[priority];
}

export default getPriority;

