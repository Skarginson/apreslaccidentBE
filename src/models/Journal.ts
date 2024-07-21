import mongoose, { Schema, Document } from 'mongoose';

export interface IJournal extends Document {
  userId: string;
  writingPromptId: string;
  entry: string;
}

const JournalSchema: Schema<IJournal> = new Schema({
  userId: { type: String, required: true },
  writingPromptId: { type: String, required: true },
  entry: { type: String, required: true }
});

const Journal = mongoose.model<IJournal>('Journal', JournalSchema);

export default Journal;
