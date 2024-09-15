import { useRef, type DependencyList } from 'react'
function compareIsSame(oldDeps: DependencyList, deps: DependencyList) {
    if (oldDeps === deps) return true;
    if (oldDeps.length !== deps.length) return false;
    for (let i = 0; i < oldDeps.length; i++) {
        // 和 ===，== 的行为不同，具体看这里
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is
        if (!Object.is(oldDeps[i], deps[i])) return false;
    }
    return true;
}



export const useCreation = <T>(fn: () => T, deps: DependencyList) => {
    const { current } = useRef({
        deps,
        val: undefined as undefined | T,
        initialized: false,
    });

    if (!current.initialized || !compareIsSame(current.deps, deps)) {
        current.initialized = true
        current.val = fn();
        current.deps = deps;
    }
    return current.val as T;
}