const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(gn(req, res, next)).catch((err) => next)
};

module.exports = catchAsync;