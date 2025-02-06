describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit("./src?index.html")
  })

  it('Verifica o título da aplicação', () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT")
  })
  it("Preenche os campos obrigatórios e envia o formulário", () => {
    const longText = Cypress._.repeat("Filha, papai te ama, ", 20)
    cy.get('#firstName').type("Tibério")
    cy.get('#lastName').type("Neto")
    cy.get('#email').type("athanetto@gmail.com")
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.contains("button", "Enviar").click()

    cy.get(".success").should("be.visible")
  })
  it.only("Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get('#firstName').type("Tibério")
    cy.get('#lastName').type("Neto")
    cy.get('#email').type("athanetto@gmail,com")
    cy.get('#open-text-area').type("teste")
    cy.contains("button", "Enviar").click()

    cy.get(".error").should("be.visible")
  })
})