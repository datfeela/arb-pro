export const parallaxMove = ({ target, moveCoef, threshhold }) => {
    debugger;
    let r = target.getBoundingClientRect();
    let paralaxYCenter = r.y + r.height / 2;
    let scrollYCenter = window.innerHeight / 2;
    let move = (paralaxYCenter - scrollYCenter) * moveCoef;
    if (threshhold && (threshhold.min > move || threshhold.max < move)) return
    target.style.transform = `translateY(${move}px)`;
}

export const parallaxMoveInView = ({ target, moveCoefX, moveCoefY, threshholdX, threshholdY }) => {
    let r = target.getBoundingClientRect();
    let movingObjectTop = r.y;
    let windowHeight = window.innerHeight;

    if (movingObjectTop < 0 || movingObjectTop > windowHeight) return

    let moveX = moveCoefX ? (windowHeight - movingObjectTop) * moveCoefX : 0;
    let moveY = moveCoefY ? (windowHeight - movingObjectTop) * moveCoefY : 0;

    if (threshholdX && (threshholdX.min > moveX || threshholdX.max < moveX)) return
    if (threshholdY && (threshholdY.min > moveY || threshholdY.max < moveY)) return

    target.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

export const parallaxCustomized = ({ targetRef, parentRef, scrollTillParentCenter, threshholdX, threshholdY, transitionSpeed, firstAnimationFrame }) => {
    // transitionSpeed - скорость, с которой элемент двигается
    // 1 - проходит максимальное расстояние анимации за расстояние высоты экрана
    // 0.5 - проходит максимальное расстояние анимации за половину высоты экрана

    // firstAnimationFrame - с какого фрейма от 0 до 1 начинается анимация
    // 0 - начнётся с самого начала
    // 0.5 - пропустит половину анимации и начнёт сразу с середины

    const r = parentRef ? parentRef.getBoundingClientRect() : undefined;
    const parentTop = r ? r.y : 0;
    // const parentCenter = r && scrollTillParentCenter && r.height / 2


    let windowHeight = window.innerHeight;

    let translatePercent = (1 - parentTop / windowHeight) / transitionSpeed + firstAnimationFrame;

    if (translatePercent < 0 || translatePercent > 1) return

    let moveX = threshholdX ? threshholdX * translatePercent : 0;
    let moveY = threshholdY ? threshholdY * translatePercent : 0;

    targetRef.style.transform = `translate(${moveX}px, ${moveY}px)`;
}