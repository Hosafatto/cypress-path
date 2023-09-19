/// <reference types="cypress"/> 

const { TodoPage } = require("../pageObjects/todoPage")

describe('Using Page Objects', () => {

    const todoPage = new TodoPage()

    beforeEach( () => {
        todoPage.navigate()
        todoPage.addTodo("Clean room")
    })

    it('Should do some validations', () => {
        todoPage.validateTodoText(0,"Clean room")
    })
})