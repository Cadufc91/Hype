import { render } from "@testing-library/react";
import  { Banner } from './Banner';

describe('Header', () => {
    it('should match snapshot', () => {
        const { container } = render(<Banner />)

        expect(container.firstChild).toMatchSnapshot()
    })
})