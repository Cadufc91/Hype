import { render } from "@testing-library/react";
import  { Services } from './Services';

describe('Header', () => {
    it('should match snapshot', () => {
        const { container } = render(<Services />)

        expect(container.firstChild).toMatchSnapshot()
    })
})