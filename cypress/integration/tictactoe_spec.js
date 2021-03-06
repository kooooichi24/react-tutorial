describe('Tic-Tac-ToeのE2Eテスト', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('交互にマスを選択し、PlayerXが勝利する', () => {
    cy.get('[data-e2e=squareButton]')
      .each(($squareButton) => {
        $squareButton.click()
      })
      .then(() => {
        cy.contains('Winner: X')
      })
  });

  it('交互にマスを選択し、引き分けとなる', () => {
    // const clickTurnList = [0, 1, 4, 2, 5, 3, 7, 8, 6];
    // clickTurnList.forEach(i => {
    //   cy.get('[data-e2e=squareButton]').eq(i).click();
    // })

    cy.get('[data-e2e=squareButton]').eq(0).click();
    cy.get('[data-e2e=squareButton]').eq(1).click();
    cy.get('[data-e2e=squareButton]').eq(4).click();
    cy.get('[data-e2e=squareButton]').eq(2).click();
    cy.get('[data-e2e=squareButton]').eq(5).click();
    cy.get('[data-e2e=squareButton]').eq(3).click();
    cy.get('[data-e2e=squareButton]').eq(7).click();
    cy.get('[data-e2e=squareButton]').eq(8).click();
    cy.get('[data-e2e=squareButton]').eq(6).click();

    cy.contains('Draw');
  })
});
