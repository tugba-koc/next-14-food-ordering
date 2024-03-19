import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 255,
      validate: {
        validator: function (v) {
          return /\S+@\S+\.\S+/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024,
      validate: {
        validator: function (v) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/.test(
            v
          );
        },
        message: (props) =>
          `${props.value} is not a valid password! Passwords must be at least 5 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.`,
      },
    },
  },
  { timestamps: true }
);

export const User = models?.User || model('User', UserSchema);
