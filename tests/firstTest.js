import TestCase from 'js-unit/core/TestCase';

export default class ExampleTest extends TestCase {

    /** @test */
    it_counts_the_elements_of_an_array() {
        let array = ['apples', 'bananas', 'oranges'];

        this.assertCount(3, array);
    }
}