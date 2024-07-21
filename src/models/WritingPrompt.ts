import mongoose, { Schema, Document } from 'mongoose';

export interface IWritingPrompt extends Document {
  card: string;
  text: string;
}

const WritingPromptSchema: Schema<IWritingPrompt> = new Schema({
  card: { type: String, required: true },
  text: { type: String, required: true }
});

const WritingPrompt = mongoose.model<IWritingPrompt>('WritingPrompt', WritingPromptSchema);

export default WritingPrompt;
