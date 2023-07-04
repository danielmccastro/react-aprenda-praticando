import { render, screen, fireEvent } from "@testing-library/react";
import ListaLivros from "./ListaLivros";

/* describe('Testes de comportamento', () => {
    test('click no botao Salvar', () => {
        render(<ListaLivros />);
        const botaoSalvar = sceen.getByTestId('salvar');
        expect(console.log("Botao Salvar foi clicado!"));
    })
}); */

describe("Testes de comportamento", () => {
  test("evento change e form submit", () => {
    const { container } = render(<ListaLivros />);
    const botaoSalvar = screen.getByTestId("salvar");
    // expect(console.log(container.innerHTML));
    const input = screen.getByTestId("titulo");
    const [form] = container.querySelectorAll("form");
    fireEvent.change(input, {target: {value: "React JS"}});
    fireEvent.submit(form);
   // expect(console.log(container.innerHTML));
   const livroItem = screen.getByTestId("ReactJS");
   const boleano = livroItem.hasChildNodes("React JS");
   expect(boleano).toBeTruthy();
  });
});
