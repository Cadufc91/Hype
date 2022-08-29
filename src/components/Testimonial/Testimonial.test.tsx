import { render } from "@testing-library/react";
import  { Testimonial } from './Testimonial';

describe('Header', () => {
    it('should match snapshot', () => {
        const { container } = render(<Testimonial />)

        expect(container.firstChild).toMatchSnapshot()
    })
})