export const setBlockHeight = (shouldHaveHeight, blockRef) => {
    let height = 0;
    if (shouldHaveHeight) {
        for (let item of blockRef.current.children) {
            height += item.offsetHeight;
        }
    }
    blockRef.current.style.height = `${height}px`;
}