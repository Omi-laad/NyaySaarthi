class ApiError extends Error {
    constructor(message = "Something went wrong", statusCode, error = []) {
        super(message);
        this.statusCode = statusCode;
        this.error = error
        this.message = message
        this.success = false;
        this.data = false

    }
}
export default ApiError