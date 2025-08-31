import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const dietchartSchema = mongoose.Schema(
    {
        pateientDietChart: [
            {
                diet: {
                    id: {
                        type: String
                    },
                    name:  {
                        type: String
                    },
                    category: {
                        type: String
                    }
                },
                allowance: {
                    type: String
                }
            },
        ],
        wtodo: {
            type: String
        },
        wto_dont: {
            type: String
        },
    },

    {
        timestamps: true,
    }
)

const DietChart = mongoose.model('DietChart', dietchartSchema)

export default DietChart
