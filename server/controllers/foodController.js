const { handleError } = require("../config/handleError")
const { handleSucess } = require("../config/handleSuccess")
const { foodModel } = require("../models/foodModel")

const FoodController = {
    async getTopFood(req,res){
        try {
            const result = await foodModel.topFood()
            return handleSucess(res, "Succesfully get the top foods!" , result)
        } catch (error) {
            return handleError(res , "Something went wrong!", error)
        }
    }
}

module.exports = { FoodController }




