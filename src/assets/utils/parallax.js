export const parallaxMove = ({target, moveCoef, threshhold}) => {
    let r = target.getBoundingClientRect();
    let paralaxYCenter = r.y + r.height / 2;
    let scrollYCenter = window.innerHeight / 2;
    let move = (paralaxYCenter - scrollYCenter) * moveCoef;
    if (threshhold && (threshhold.min > move || threshhold.max < move)) return
    target.style.transform = `translateY(${move}px)`;
}

export const parallaxMoveInView = ({ target, moveCoef, axis, threshhold }) => {
    let r = target.getBoundingClientRect();
    let paralaxYTop = r.y;
    let scrollY = window.innerHeight;

    let move = (scrollY - paralaxYTop) * moveCoef
    if (paralaxYTop < 0 || paralaxYTop > scrollY) return
    if (threshhold && (threshhold.min > move || threshhold.max < move)) return
    target.style.transform = `translate${axis}(${move}px)`;
}