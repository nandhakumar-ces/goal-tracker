import { Goal } from "../models/goal-model";

export const createGoal = async (req, res) => {
  const data = req.body;
  const newGoal = new Goal(data);
  try {
    await newGoal.save();
    res.json({
      Status: true,
    });
  } catch (error) {
    res.json({
      Status: false,
      Message: error.message,
    });
  }
};

export const goalList = async (req, res) => {
  try {
    const goals = await Goal.find();
    res.json({
      Status: true,
      Data: goals,
    });
  } catch (error) {
    res.json({
      Status: false,
      Message: error.message,
    });
  }
};

export const goalUpdate = async (req, res) => {
  const { id, title, description, period } = req.body;
  try {
    const filter = { _id: id };
    const update = { title: title, description: description, period: period };

    let doc = await Goal.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.json({
      Status: true,
      Data: doc,
    });
  } catch (error) {
    res.json({ Status: false, Message: error.message });
  }
};

export const goalDelete = async (req, res) => {
  const { _id } = req.body;
  try {
    await Goal.findOneAndDelete({ _id: _id });
    return res.json({
      Status: true,
    });
  } catch (error) {
    res.json({ Status: false, Message: error.message });
  }
};
