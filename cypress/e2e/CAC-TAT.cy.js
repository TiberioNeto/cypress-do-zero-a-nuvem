describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit("./src?index.html")
  })

  it('Verifica o título da aplicação', () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT")
  })
  it.only("Preenche os campos obrigatórios e envia o formulário", () => {
    const longText = Cypress._.repeat("Filha, papai te ama, ", 20)
    cy.get('#firstName').type("Tibério")
    cy.get('#lastName').type("Neto")
    cy.get('#email').type("athanetto@gmail.com")
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.contains("button", "Enviar").click()

    cy.get(".success").should("be.visible")
  })
})