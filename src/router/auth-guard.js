const isAuthenticatedGuard = async (to, from, next) => {
    
    return new Promise(() => {
        const random = Math.random() * 100

        if (random > 50) {
            console.log('Acceso permitido!')
            next()
        } else {
            console.log('Acceso denegado por el beforeEach Guard.', random)
            next({ name: 'pokemon-home' })
        }

    })

}


export default isAuthenticatedGuard