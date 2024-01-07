export const removeChildren = (parent) => {
    [...parent.children].forEach((el) => {
        el.remove();
    })
}