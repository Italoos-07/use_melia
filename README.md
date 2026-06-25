<<<<<<< HEAD
# Use Meliá

## Integrantes da dupla

- Ítalo Dos Santos Ribeiro
- Gabriel Pereira Leal

## Descrição do caso escolhido

A **Use Meliá** é uma pequena marca artesanal especializada em tops de miçangas e cristais feitos à mão. A dona da marca é a mulher do integrante número 1 kkk.
A marca atende mulheres que valorizam peças únicas, com identidade visual própria e apelo estético elegante.

## Necessidade identificada

A marca não possuía presença digital estruturada. A ausência de um site dificultava a divulgação dos produtos, o contato com clientes e a percepção de credibilidade da marca no mercado.

## Público-alvo

Mulheres entre 18 e 40 anos interessadas em moda artesanal, peças exclusivas e acessórios com identidade. Esse público busca encontrar facilmente: os produtos disponíveis, os preços, formas de contato e a história da marca.

## Objetivo do site

A principal ação esperada do visitante é entrar em contato para comprar ou encomendar uma peça, além de conhecer o catálogo e os valores da marca.

## Processo de desenvolvimento

1. Análise do protótipo visual fornecido como referência
2. Definição da identidade visual: paleta dourado + creme, tipografia Georgia e system-ui
3. Estruturação do HTML semântico com todas as seções necessárias
4. Estilização com CSS externo usando variáveis CSS para consistência
5. Integração de Bootstrap 5 para o grid de produtos
6. Implementação da funcionalidade JavaScript
7. Testes de responsividade e acessibilidade

## Principais decisões do projeto

- **HTML:** uso de elementos semânticos (`header`, `nav`, `section`, `article`, `footer`) para estruturar corretamente o conteúdo
- **CSS:** variáveis CSS para manter consistência na paleta; classes com nomes em português e descritivos (ex: `.botao-principal`, `.card-preco`)
- **Responsividade:** grid Bootstrap nos cards de produto + media query própria para mobile; navegação ocultada em telas pequenas
- **Acessibilidade:** atributos `alt` em todas as imagens, `aria-label` nos links do rodapé, `aria-labelledby` ligando títulos às seções, `:focus-visible` no CSS e suporte a `prefers-reduced-motion`
- **Bootstrap:** utilizado apenas no grid de produtos (`row`, `col-6`, `col-md-3`, `g-3`, `mt-3`), mantendo o restante em CSS próprio

## Funcionalidade em JavaScript

Foi implementada 1 funcionalidade: **validação simples do formulário de contato**.

Ao tentar enviar o formulário com algum campo vazio, o campo inválido recebe borda vermelha (classe `.invalido`). Se todos os campos estiverem preenchidos, o formulário é limpo e a mensagem "✓ Mensagem enviada! Retornaremos em breve." é exibida na tela. A funcionalidade foi escolhida por ser coerente com o objetivo do site, que é facilitar o contato para compras e encomendas.

## Uso de Bootstrap

Foram utilizadas as seguintes classes do Bootstrap 5 no grid de produtos:

- `row` e `g-3` para criar a grade com espaçamento entre os cards
- `col-6` para exibir 2 produtos por linha em mobile
- `col-md-3` para exibir 4 produtos por linha em telas médias e maiores
- `mt-3` para espaçamento entre o título e os cards

O Bootstrap foi usado apenas nessa seção; todo o restante do layout foi feito com CSS próprio.

## Testes realizados

- Responsividade verificada nas larguras: 375px (mobile), 768px (tablet) e 1280px (desktop)
- Links de âncora testados (Início, Loja, Sobre, Contato)
- Formulário testado com campos vazios (borda vermelha aparece) e com dados preenchidos (mensagem de sucesso aparece)
- Contraste de cores verificado entre texto e fundo
- Navegação básica por teclado funcional (Tab e Enter)
- Carregamento das imagens locais verificado

## Links

- Link do repositório: https://github.com/Italoos-07/use_melia.git
- Link do site publicado: https://italoos-07.github.io/use_melia/

## Contribuição dos integrantes

- **Gabriel Pereira Leal:** estrutura HTML, semântica e organização de arquivos
- **Ítalo Dos Santos Ribeiro:** CSS, responsividade, JavaScript e documentação

