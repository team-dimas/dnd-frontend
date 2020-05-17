import TextField from './TextField.svelte'
import { mount } from 'cypress-svelte-unit-test'

it('Checks value', () => {
    mount(TextField, {
        props: {
            value: 'Test',
        },
    })
    cy.get('input').should('have.value', 'Test1')
})
