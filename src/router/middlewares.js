module.exports = router => {

  router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
  })

}
