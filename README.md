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
   git clone [url-do-repositorio]
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

- **CT0.2.3**: Validação Detalhes do Produto
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