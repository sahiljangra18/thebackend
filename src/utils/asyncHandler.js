
//const asyncHandler = () => {}

export default asyncHandler;

const asyncHandler = (fn) => (req, res, next) => {
    try {
        
    } catch (error) {
        res.send(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}

