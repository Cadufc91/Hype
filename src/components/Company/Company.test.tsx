import { render } from "@testing-library/react";
import  { Company } from './Company';

describe('Header', () => {
    it('should match snapshot', () => {
        const { container } = render(<Company />)

        expect(container.firstChild).toMatchSnapshot()
    })
})