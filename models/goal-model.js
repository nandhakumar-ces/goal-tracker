const GOALSCHEMA = mongoose.Schema({
  title: String,
  description: String,
  period: [String],
  priority: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

export const Goal = mongoose.model("goal", GOALSCHEMA);
