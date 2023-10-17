export function filterData(searchText, shoppings) {
    const filterData = shoppings.filter((shopping) =>
        shopping?.category?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
}