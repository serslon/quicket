const includes = (data, filter) => data.reduce((acc, item) => {
    const children = item.children ? includes(item.children, filter) : [];
    if (children.length) {
        acc.push({
            name: item.name,
            children
        })
    } else if (item.name.includes(filter)) {
        acc.push({
            ...item
        })
    }
    return acc;
}, [])

const applyFilters = (data = [], filters = []) => filters.reduce((acc, filter) => includes(acc, filter), data)

module.exports = applyFilters