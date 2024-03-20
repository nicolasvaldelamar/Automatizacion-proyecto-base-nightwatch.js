Feature: Validación de elementos y acciones en la página web

  Scenario: Validar presencia y visibilidad de un elemento
    Given I navigate to "https://www.wikipedia.org/"
    When I validate the element with selector ".central-featured" is present and visible
    Then I should see the element with selector ".central-featured" present and visible

  Scenario: Validar texto en un elemento
    Given I navigate to "https://www.wikipedia.org/"
    When I validate the text "Welcome to Wikipedia," is present in the element with selector "#mp-welcome"
    Then I should see the text "Welcome to Wikipedia," in the element with selector "#mp-welcome"

  Scenario: Realizar clic en un elemento
    Given I navigate to "https://www.wikipedia.org/"
    When I click on the element with selector "#n-randompage"
    Then I should be redirected to a new page

  Scenario: Validar y establecer texto en un elemento
    Given I navigate to "https://www.wikipedia.org/"
    When I validate the element with selector "#searchInput" is visible
    And I set the text "Nightwatch.js" in the element with selector "#searchInput"
    Then I should see the text "Nightwatch.js" in the element with selector "#searchInput"
