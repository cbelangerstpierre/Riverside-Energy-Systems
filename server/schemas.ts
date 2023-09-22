import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  address: String,
  setter: String,
  information: String,
  closed: Boolean,
  installed: Boolean,
  followUpDate: Date,
});

// Every time you receive a new set, siteAssessment and anything else, you add the information from the certain thing and you update the followupDate, so that when clicking on a custumer, you know when is the next time he is gonna get talked to, and every information until now.

const setSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  setDate: Date,
  siteAssessmentDate: Date,
});

const siteAssessmentSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  siteAssessmentDate: Date,
  proposalDate: Date,
});

const proposalSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    siteAssessmentDate: Date,
    proposalDate: Date,
  });

// Create models based on the schemas
const Customer = mongoose.model("Customer", customerSchema);
const Set = mongoose.model("Set", setSchema);

export { Customer, Set };
