import { render, screen } from "@testing-library/react";
import ListaLivros from "./ListaLivros";

// Inserção dos testes propostos
describe("Testes de renderizacao", () => {
    test("texto Lista de Livros", () => {
        render(<ListaLivros />);
        const linkElement = screen.getByText(/lista de livros/i);
        expect(linkElement).toBeInTheDocument();
    });
    test("input para o titulo do livro", () => {
        render(<ListaLivros />);
        const elInput = screen.getByLabelText("Insira um livro:", {
            selector: "input"
        });
        expect(elInput).toBeInTheDocument();
    });
    test("botao Salvar", () => {
        render(<ListaLivros />);
        const elBotao = screen.getByTestId("salvar");
        expect(elBotao).toBeInTheDocument();
    });
})