
const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/usersController')
const { authenticateUser } = require('../app/middlewares/authenticate')
const { authorizeUser } = require('../app/middlewares/authorization')
const upload = require('../app/middlewares/upload')
const plansController = require('../app/controllers/plansController')
const categoriesController = require('../app/controllers/categoriesController')
const authenticate = require('../app/middlewares/authenticate')


router.post('/users-register',usersController.register)
router.post('/login',usersController.login)
router.post('/admin-register',usersController.adminRegister)
router.get('/account',authenticateUser,usersController.account)

router.get('/plans',plansController.list)
router.post('/plans',upload.single('image'),authenticateUser,authorizeUser,plansController.create)
router.get('/plans/:id',plansController.show)
router.put('/plans/:id',authenticateUser,authorizeUser,plansController.update)
router.delete('/plans/:id',authenticateUser, authorizeUser,plansController.destory)


router.get('/categories',categoriesController.list)
router.get('/categories/:id',categoriesController.show)
router.post('/categories',authenticateUser, authorizeUser,categoriesController.create)
router.put('/categories/:id',authenticateUser, authorizeUser, categoriesController.update)
router.delete('/categories/:id',authenticateUser,authorizeUser,categoriesController.destory)



module.exports = router