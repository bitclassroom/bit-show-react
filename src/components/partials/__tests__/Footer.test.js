import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../Footer'

describe('Footer', () => {
    it('should match the snapshot', () => {
        const componentTree = renderer.create(<Footer />).toJSON()
        expect(componentTree).toMatchSnapshot()
    })
})
