import { Schema } from "mongoose";
import mongoose from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, {timesatamps: true});

export const Subscription = mongoose.model("Subscription", subscriptionSchema);