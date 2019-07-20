const assert = require('assert');
const applyFilters = require("./");
const all = require('./test.data.json');

describe('applyFilters', () => {
    it('example 1', () => {
        const result = JSON.stringify(applyFilters(all, ['3.2.2']));
        assert.equal('[{"name":"Folder3","children":[{"name":"subfolder 3.2","children":[{"name":"Item 3.2.2"}]}]}]', result);
    })
    it('example 2', () => {
        const result = JSON.stringify(applyFilters(all, ['3', '2']).filter(f => f.children.length));
        assert.equal('[{"name":"Folder3","children":[{"name":"subfolder 3.1","children":[{"name":"Item 3.1.2"}]},{"name":"subfolder 3.2","children":[{"name":"Item 3.2.1"},{"name":"Item 3.2.2"}]}]}]', result);
    })
    it('example 3', () => {
        const result = JSON.stringify(applyFilters(all, ['.1']).filter(f => f.children.length));
        assert.equal('[{"name":"Folder1","children":[{"name":"subfolder 1.1","children":[{"name":"item 1.1.1"},{"name":"item 1.1.2"}]},{"name":"subfolder 1.2","children":[{"name":"item 1.2.1"}]}]},{"name":"Folder2","children":[{"name":"subfolder 2.1","children":[{"name":"Item 2.1.1"},{"name":"Item 2.1.2"}]},{"name":"subfolder 2.2","children":[{"name":"Item 2.2.1"}]}]},{"name":"Folder3","children":[{"name":"subfolder 3.1","children":[{"name":"Item 3.1.1"},{"name":"Item 3.1.2"}]},{"name":"subfolder 3.2","children":[{"name":"Item 3.2.1"}]}]}]', result);
    })
    it('example 4', () => {
        const result = JSON.stringify(applyFilters(all, ['Folder2', '1.1']).filter(f => f.children.length))
        assert.equal('[{"name":"Folder2","children":[{"name":"subfolder 2.1","children":[{"name":"Item 2.1.1"}]}]}]', result);
    })
    it('example 5', () => {
        const result = JSON.stringify(applyFilters(all, ['Folder2', '2.1']).filter(f => f.children.length))
        assert.equal('[{"name":"Folder2","children":[{"name":"subfolder 2.1","children":[{"name":"Item 2.1.1"},{"name":"Item 2.1.2"}]},{"name":"subfolder 2.2","children":[{"name":"Item 2.2.1"}]}]}]', result);
    })
})