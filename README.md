# DOT-Tecnico
Documentação para o desenvolvimento do teste técnico da empresa DOT

## 🚀 Configuração Inicial

### Pré-requisitos
1. **Node.js e NPM**
   - Faça o download da versão LTS atual do Node.js em: [https://nodejs.org/pt/download](https://nodejs.org/pt/download)
   - Execute o instalador para seu sistema operacional
   - Verifique a instalação abrindo um terminal e executando:
     ```bash
     npm --v
     ```

### Instalação do Projeto
1. **Clone o repositório**
   ```bash
   git clone https://github.com/Bareaa/dot-t-cnico.git
   cd dot-tecnico
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o Cypress**
   ```bash
   npx cypress open
   ```

4. **Configuração do Cypress**
   - Ao iniciar o Cypress, selecione "E2E Testing"
   - Escolha o navegador de sua preferência

### Configuração Adicional (Opcional)
Para melhorar a experiência, é recomendado configurar o arquivo `cypress.config.js` com a baseUrl e o runAllSpecs para facilitar a validação dos testes no GUI.

## 📋 Planejamento do Teste

### Site Escolhido
**URL**: [https://www.saucedemo.com/](https://www.saucedemo.com/)  
**Motivo da Escolha**: O site foi escolhido por simular uma loja digital.

### Massa de Dados
- **Accepted usernames**:
  - `standard_user`
  - `locked_out_user`
- **Password for all users**: `secret_sauce`

## 📝 Histórias de Usuário e Casos de Teste

### Fluxo Login:

#### História do Usuário 0.1:
- **Como usuário da plataforma**
  - Quero poder realizar o fluxo login
  - E obter sucesso para acessar a plataforma

#### Critérios de Aceitação:
1. Deve ser possível logar com usuário válido
2. Ao inserir dados inválidos o usuário deverá ser informado
3. Deve exibir mensagem de erro para usuário bloqueado
4. Campos de usuário e senha são obrigatórios
5. Ao inserir credenciais válidas e clicar sobre o botão de 'LOGIN' o usuário deverá ser direcionado para a plataforma

#### Casos de Teste:
- **CT0.1.1**: Login com usuário padrão
  - **Usuário**: `standard_user`
  - **Senha**: `secret_sauce`
  - **Resultado Esperado**: Acesso ao dashboard de produtos

- **CT0.1.2**: Login com usuário bloqueado
  - **Usuário**: `locked_out_user`
  - **Senha**: `secret_sauce`
  - **Resultado Esperado**: Mensagem de erro de bloqueio

- **CT0.1.3**: Login com credenciais inválidas
  - **Usuário**: `usuario_invalido`
  - **Senha**: `senha_invalida`
  - **Resultado Esperado**: Mensagem de erro de autenticação

- **CT0.1.4**: Campos Obrigatórios
  - **Ação**: Deixar campos de usuário e senha em branco
  - **Resultado Esperado**: Mensagem de erro indicando que os campos são obrigatórios

### Fluxo Catálogo de Produtos:

#### História do Usuário 0.2:
- **Como usuário**
  - Quero visualizar e filtrar produtos
  - Para encontrar itens de meu interesse

#### Critérios de Aceitação:
1. Deve ser possível filtrar produtos por nome A-Z e Z-A
2. Deve ser possível ordenar produtos por preço
3. Deve exibir informações corretas do produto
4. Deve mostrar imagem, nome, descrição e preço

#### Casos de Teste:
- **CT0.2.1**: Ordenação A-Z
  - **Ação**: Selecionar filtro Nome (A-Z)
  - **Resultado Esperado**: Produtos ordenados alfabeticamente

- **CT0.2.2**: Ordenação Preço Crescente
  - **Ação**: Selecionar filtro Preço (baixo para alto)
  - **Resultado Esperado**: Produtos ordenados por preço

- **CT0.2.3**: Ordenação Z-A
  - **Ação**: Selecionar filtro Nome (Z-A)
  - **Resultado Esperado**: Produtos ordenados alfabeticamente

- **CT0.2.4**: Ordenação Preço Decrescente
  - **Ação**: Selecionar filtro Preço (alto para baixo)
  - **Resultado Esperado**: Produtos ordenados por preço

- **CT0.2.5**: Validação Detalhes do Produto
  - **Ação**: Selecionar produto específico
  - **Resultado Esperado**:
    - Nome correto
    - Preço correto
    - Descrição presente
    - Botão de adicionar ao carrinho visível

### Fluxo Carrinho de Compras:

#### História do Usuário 0.3:
- **Como usuário**
  - Quero gerenciar meu carrinho de compras
  - Para preparar minha compra

#### Critérios de Aceitação:
1. Deve ser possível adicionar produtos ao carrinho
2. Deve ser possível remover produtos do carrinho
3. Deve atualizar contador de itens no ícone do carrinho

#### Casos de Teste:
- **CT0.3.1**: Adicionar Produto ao Carrinho
  - **Ação**: Selecionar dois produtos e adicionar
  - **Resultado Esperado**:
    - Contador do carrinho incrementa
    - Botão muda para "Remove"

- **CT0.3.2**: Remover Produto do Carrinho
  - **Ação**: Adicionar todos os produtos e remover dois produtos adicionados
  - **Resultado Esperado**:
    - Contador do carrinho decrementa
    - Botão volta para "Add to Cart"

### Fluxo Compra:

#### História do Usuário 0.4:
- **Como usuário**
  - Quero finalizar minha compra
  - Para concluir o processo de compra

#### Critérios de Aceitação:
1. Deve solicitar informações pessoais
2. Validar campos obrigatórios
3. Permitir revisão dos itens
4. Somar o valor total corretamente
5. Confirmar compra com sucesso

#### Casos de Teste:
- **CT0.4.1**: Checkout Completo
  - **Ação**: Preencher formulário com dados válidos
  - **Resultado Esperado**:
    - Todos campos preenchidos
    - Avançar para revisão
    - Soma total dos valores
    - Confirmação de compra

- **CT0.4.2**: Confirmação de Compra
  - **Ação**: Finalizar compra
  - **Resultado Esperado**:
    - Mensagem de sucesso
    - Redirecionamento para página inicial

- **CT0.4.3**: Validação Campos Obrigatórios
  - **Ação**: Deixar campos em branco
  - **Resultado Esperado**:
    - Mensagens de erro
    - Impedimento de prosseguir

## 📊 Estimativa Planning Poker

Aqui está minha estimativa usando Planning Poker, considerando a complexidade de implementação e os testes necessários para cada fluxo. Usei a sequência de Fibonacci para avaliar o esforço relativo.

| Fluxo                          | Estimativa (Story Points) |
|--------------------------------|---------------------------|
| Login                          | 5                         |
| Catálogo de Produtos           | 8                         |
| Carrinho de Compras            | 5                         |
| Compra (Checkout)              | 8                         |
| Configuração da Massa de Dados | 3                         |

**Total estimado**: 29 SPs

O esforço aqui é médio para alto, considerando tanto o desenvolvimento quanto os testes necessários para garantir que tudo funcione sem falhas.


# Metodologia de Estimativa - Planning Poker

## Introdução

Para realizar a estimativa dos fluxos de testes da aplicação [SauceDemo](https://www.saucedemo.com/), utilizei a técnica de Planning Poker, uma metodologia ágil de estimativa baseada em consenso. Esta técnica é amplamente utilizada por equipes de desenvolvimento para avaliar o esforço necessário para implementar funcionalidades ou, no caso específico deste projeto, para automatizar testes.

## Fundamentos Utilizados

### Sequência de Fibonacci

Utilizei a sequência de Fibonacci (1, 2, 3, 5, 8, 13, 21...) como base para as estimativas, uma prática comum em Planning Poker. Esta sequência é ideal pois:

1. Reflete a incerteza crescente à medida que as tarefas se tornam maiores
2. Força decisões mais claras entre valores (não há meio termo entre 5 e 8, por exemplo)
3. Evita a falsa precisão de usar números sequenciais (como 6, 7, 8)

### Fatores de Avaliação

Para cada fluxo, considerei os seguintes fatores para determinar a pontuação:

1. **Complexidade técnica**: Quantidade de interações com elementos da interface, validações necessárias, e cenários de teste
2. **Quantidade de casos de teste**: Número de cenários a serem automatizados
3. **Dependências**: Relação com outros fluxos e necessidade de pré-condições
4. **Riscos**: Possíveis instabilidades ou comportamentos assíncronos na aplicação

## Critérios de Estimativa

| Pontuação | Complexidade | Tempo Estimado | Exemplos de Tarefas |
|-----------|--------------|----------------|---------------------|
| 1-2 | Muito baixa | Menos de 1 hora | Validações simples, casos de teste unitários |
| 3 | Baixa | 1-2 horas | Fluxos simples com poucas interações |
| 5 | Média | 2-4 horas | Fluxos com múltiplas interações e validações |
| 8 | Alta | 4-8 horas | Fluxos complexos com muitas validações e estados |
| 13+ | Muito alta | 8+ horas | Fluxos com grande quantidade de variações e dependências |

## Justificativa das Estimativas

### Login (5 pontos)
- **Justificativa**: Apesar de ser um fluxo relativamente simples, envolve múltiplos cenários (usuário padrão, bloqueado, credenciais inválidas) e validações de mensagens de erro.
- **Complexidade**: Média
- **Cenários**: 3 casos de teste com diferentes validações

### Catálogo de Produtos (8 pontos)
- **Justificativa**: Fluxo com maior complexidade devido à necessidade de validar ordenações (A-Z, Z-A, preço) e confirmar detalhes de produtos. Requer validações mais elaboradas para garantir a ordenação correta.
- **Complexidade**: Alta
- **Cenários**: 3 casos de teste, mas com maior complexidade de validação

### Carrinho de Compras (5 pontos)
- **Justificativa**: Envolve interações com múltiplos produtos (adicionar/remover) e validações de estado do carrinho. Complexidade média por exigir manipulação de vários elementos.
- **Complexidade**: Média
- **Cenários**: 2 casos de teste com várias interações

### Compra (Checkout) (8 pontos)
- **Justificativa**: Fluxo mais longo e complexo com múltiplas etapas (informações pessoais, revisão, confirmação). Requer validações de campos obrigatórios e cálculos de valores.
- **Complexidade**: Alta
- **Cenários**: 3 casos de teste com fluxo completo e validações detalhadas

### Configuração da Massa de Dados (3 pontos)
- **Justificativa**: Trabalho necessário para preparar os dados e ambientes de teste. Complexidade baixa, mas necessário para suportar os outros fluxos.
- **Complexidade**: Baixa
- **Cenários**: Preparação de ambiente

## Considerações sobre a Estimativa Total

O total de 29 story points representa um esforço médio-alto para a implementação completa da automação de testes. Este valor reflete:

1. A cobertura completa dos fluxos principais da aplicação
2. A necessidade de criar uma estrutura robusta de testes
3. A implementação de mecanismos de validação para todos os cenários

A estimativa considera a execução individual de cada fluxo, mas também leva em conta a integração entre eles para formar um teste end-to-end completo.

## Conclusão

A metodologia de Planning Poker permitiu uma estimativa estruturada e baseada em critérios objetivos, fornecendo uma visão clara do esforço necessário para implementar a automação de testes para a aplicação SauceDemo.