const catchAsync = require('./../utils/catchAsync')
const Email = require('./../utils/email')

exports.contactMe = catchAsync(async (req, res, next) => {
    await new Email(req.body).sendContactMe()
    await new Email(req.body).sendContactToAdmin()
    res.status(204).json({
        status: 'success',
        data: null
    })
})

