import mongoose, { Schema, Document } from 'mongoose';

interface ICard extends Document {
  suit: string;
  rank: string;
  isHintCard: boolean;
}

const CardSchema: Schema = new Schema({
  suit: { type: String, required: true },
  rank: { type: String, required: true },
  isHintCard: { type: Boolean, default: false }
});

const Card = mongoose.model<ICard>('Card', CardSchema);

export default Card;
