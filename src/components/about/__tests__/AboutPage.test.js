import React from 'react'
import renderer from 'react-test-renderer'
import AboutPage from '../AboutPage'

describe('AboutPage', () => {
    it('should match the snapshot', () => {
        const componentTree = renderer.create(<AboutPage />).toJSON()
        expect(componentTree).toMatchSnapshot()
    })
})
