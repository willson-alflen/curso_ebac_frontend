describe('Teste de funcionalidades', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve adicionar um novo contato', () => {
    // preenche o formulário
    cy.get('input[type="text"]').type('João da Silva')
    cy.get('input[type="tel"]').type('123-456-7890')
    cy.get('input[type="email"]').type('joao@example.com')

    // clica no botão e submete o formulário
    cy.get('button[type="submit"]').click()

    // verifica se o contato foi adicionado
    cy.get('.jtXTMB > .contato').should('have.length', 4)
  })

  it('Deve editar um contato', () => {
    // clica no botão editar do último contato
    cy.get('.contato').last().find('.edit').click()

    // Modifica o contato
    cy.get('input[type="text"]').clear().type('João Carlos da Silva')
    cy.get('input[type="tel"]').clear().type('123-456-7890')
    cy.get('input[type="email"]').clear().type('joao.carlos@example.com')

    // Submete o formulário
    cy.get('button[type="submit"]').click()

    // Verifica se o contato foi atualizado
    cy.get('.contato').last().should('contain', 'João Carlos da Silva')
    cy.get('.contato').last().should('contain', '123-456-7890')
    cy.get('.contato').last().should('contain', 'joao.carlos@example.com')
  })

  it('Deve deletar um contato', () => {
    // Clica no botão deletar do último contato
    cy.get('.contato').last().find('.delete').click()

    // Verifica se o contato foi deletado
    cy.get('.jtXTMB > .contato').should('have.length', 3)
  })
})
