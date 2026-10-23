import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());


let tarefas = [
    { id: 1, titulo: "Estudar Node.js", concluida: false },
    { id: 2, titulo: "Configurar o Postman", concluida: true }
];


app.get('/tarefas', (req, res) => {
    res.status(200).json(tarefas);
});


app.get('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada." });
    }

    res.status(200).json(tarefa);
});


app.post('/tarefas', (req, res) => {
    const { titulo, concluida } = req.body;

    if (!titulo) {
        return res.status(400).json({ erro: "O campo 'titulo' é obrigatório." });
    }

    const novaTarefa = {
        id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1,
        titulo: titulo,
        concluida: concluida || false
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});


app.delete('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indice = tarefas.findIndex(t => t.id === id);

    if (indice === -1) {
        return res.status(404).json({ erro: "Tarefa não encontrada." });
    }

    const tarefaRemovida = tarefas.splice(indice, 1);
    res.status(200).json({ mensagem: "Tarefa removida com sucesso.", tarefa: tarefaRemovida[0] });
});


    app.listen(3000, () =>{
        console.log('Servidor rodando na porta 3000')
    });