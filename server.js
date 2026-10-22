import express from "express";
const app = express();
const PORT = 3000;
app.use(express.json());

const produtos = [
    { id: 1, nome: "Notebook Gamer", preco: 4500.00 },
    { id: 2, nome: "Smartphone 5G", preco: 2499.90 },
    { id: 3, nome: "Fone de Ouvido Bluetooth", preco: 299.00 },
    { id: 4, nome: "Teclado Mecânico RGB", preco: 350.50 },
    { id: 5, nome: "Mouse Óptico Sem Fio", preco: 120.00 }
];

app.get('/produtos', (req, res) => {
    res.status(200).json(produtos);
});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});