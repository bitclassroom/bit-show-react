// @ts-nocheck
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

// unset XMLHttpRequest before axios is loaded and the
// adapter type evaluated since imports are hoisted
global.XMLHttpRequest = undefined

configure({ adapter: new Adapter() })
