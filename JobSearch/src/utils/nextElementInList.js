const nextElementInList = (list, value) => {
    const currentItemIndex = list.indexOf(value);
    const nextItemIndex = (currentItemIndex + 1) % list.length;
    return list[nextItemIndex];
};

export default nextElementInList;
