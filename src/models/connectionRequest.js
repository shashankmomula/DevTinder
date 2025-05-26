const mongoose = require("mongoose");

const connectionRequestschema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:"User"
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:"User"
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["ignored", "interested", "accepted", "rejected"],
        message: `{VALUES} is incorrect type status`,
      },
    },
  },
  { timestamps: true }
);

connectionRequestschema.index({fromUserId:1,toUserId:1}); 

// Before save this pre is called

connectionRequestschema.pre("save",function(next){
  const connectionRequest = this;

  if(connectionRequest.toUserId.equals(connectionRequest.fromUserId)){
    throw new Error("Cannot send connection request to yourself!!");
  }
  next();
});

const connectionRequestsModel = new mongoose.model(
  "connectionRequest",
  connectionRequestschema
);

module.exports = connectionRequestsModel;
