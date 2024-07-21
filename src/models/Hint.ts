import mongoose, { Schema, Document } from 'mongoose';

interface IHint extends Document {
  text: string;
  isUsed: boolean;
}

const HintSchema: Schema = new Schema({
  text: { type: String, required: true },
  isUsed: { type: Boolean, default: false }
});

const Hint = mongoose.model<IHint>('Hint', HintSchema);

export default Hint;
