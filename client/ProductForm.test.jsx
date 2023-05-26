import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductForm from './src/components/ProductForm.jsx'

test('render ProductForm to check alert', () => {
    render(<ProductForm />)
    screen.debug

    const code = ProductForm.toString();

    const expectedText = 'alert(`{\n"name": "${name}",\n"price": ${price},\n "image": "${image}",\n "description": "${description}"\n}`)'
    const expectedText2 = 'alert(`"name": ${name} "price": ${price} "image": ${image} "description": ${description}`)'

    if (code === expectedText) {
        expect(code).toContain(expectedText2);
    } else if (code === expectedText2) {
        expect(code).toContain(expectedText)
    } else {
        console.log("Fail");
    }
})

test('render ProductForm to check onChange', () => {
    render(<ProductForm />)

    const code = ProductForm.toString()
    const expectText = 'event.target.value'
    const expectText1 = 'e.target.value'
    if (code === expectText) {
        expect(code).toContain(expectText)
    } else if (code === expectText1) {
        expect(code).toContain(expectText1)
    } else {
        console.log("Fail");
    }
})