import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../Header'

describe('Footer', () => {
    it('should match the snapshot', () => {
        const componentTree = renderer.create(<Header />).toJSON()
        expect(componentTree).toMatchSnapshot()
    })
})
