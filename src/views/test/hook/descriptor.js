export function Buried(target, funcName, descriptor) {
    const method = descriptor.value
    descriptor.value = (...args) => {
        console.log(target, descriptor)
        let res = method.apply(target, args)
        console.log('res', res);
    }
    return descriptor
}
