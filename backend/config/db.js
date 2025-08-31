// import mongoose from 'mongoose';
// import dotenv from 'dotenv'

// const connectDB = async () => {
// try {
//     dotenv.config()
//     // console.log('Env loaded:', process.env.DATABASE);
//         // const DB = process.env.DATABASE;
//         // console.log('DB:', DB);
//         // const atlasURI =`mongodb://localhost:27017/vaidya_manager`
//         const conn = await mongoose.connect(process.env.DATABASE, {
//             useUnifiedTopology: true,
//             useNewUrlParser: true,
//             useCreateIndex: true,
//         })
//         console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
//     } catch (error) {
//         console.error(`Error: ${error.message}`.red.underline.bold)
//         process.exit(1)
//     }
// }

// export default connectDB

// db.js
// import mysql from 'mysql2';

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'vaidyaclinic',
// });

// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//     } else {
//         console.log('Connected to the MySQL database');
//     }
// });

// export default connection; // Export the connection object directly
import dotenv from 'dotenv';
dotenv.config(); // ✅ Ensure this runs BEFORE using process.env.DATABASE

console.log("📦 DB STRING:", process.env.DATABASE); // Should NOT be undefined

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log("🛠 Connecting to MongoDB...");
    const conn = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

