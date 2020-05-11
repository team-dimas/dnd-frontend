export function getBoundingRectRelativeToContainer(target, container) {
    if (!target) {
        return null;
    }

    if (!container || container === document.body) {
        return target.getBoundingClientRect();
    }

    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    return {
        height: targetRect.height,
        width: targetRect.width,
        top: targetRect.top - containerRect.top,
        y: targetRect.y - containerRect.y,
        right: containerRect.right - targetRect.right,
        bottom: containerRect.bottom - targetRect.bottom,
        left: targetRect.left - containerRect.left,
        x: targetRect.x - containerRect.x
    };
}

export function relocateTargetElementToContainer(target, container) {
    if (!target || !container || !target.parentElement || target === document.body) {
        return;
    }

    container.appendChild(target);
}
