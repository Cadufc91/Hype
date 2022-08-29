import { render } from "@testing-library/react";
import  { Work } from './Work';

describe('Header', () => {
    it('should match snapshot', () => {
        const { container } = render(<Work />)

        expect(container.firstChild).toMatchSnapshot()
    })
})