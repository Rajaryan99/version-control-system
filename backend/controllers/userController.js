import jwt from 'jsonwebtoken'
import bcrypt, { hashSync } from 'bcryptjs'
import { MongoClient, ObjectId, ReturnDocument } from 'mongodb'
import 'dotenv/config'



const uri = process.env.MONGODB_URL

let client;

async function connectClient() {
    if (!client) {
        client = new MongoClient(uri)

        await client.connect()
    }
}

 const signup = async (req, res) => {
     const { username, email, password } = req.body;

     if (!username || !email || !password) {
         res.send('Please fill all the details')
     }

     try {
         
         await connectClient();
         const db = client.db("githubclone");
         const userCollection = db.collection('users')

         const user = await userCollection.findOne({ email })
         
         if (user) {
             return res.status(400).json({ message: 'user already exist' })
         }

         const hashedPassword = await bcrypt.hash(password, 10);

         const newUser = {
             username,
             password: hashedPassword,
             email,
             repositories: [],
             followedUser: [],
             starRepos: []
         }

         const result = await userCollection.insertOne(newUser);

         const token = jwt.sign({ id: result.insertId }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })
         
         res.json({token, userId: result.insertId });
         
        
     } catch (error) {
         res.status(500).json({ error: 'Signup failed' })
         console.log(error.message);
     }

}

  const login = async (req, res) => {
      const { email, password } = req.body;

      try {
          
          await connectClient();
          const db = client.db('githubclone');
          const userCollection = db.collection('users');

          const user = await userCollection.findOne({ email });

          if (!user) {
              return res.status(400).json({ message: 'Invalid credentials' })
              
          }

          const isMatch = await bcrypt.compare(password, user.password)
          
          if (!isMatch) {
              return res.status(400).json({ message: 'Invalid credentials' })

          }

          const token  =jwt.sign({id:user._id}, process.env.JWT_SECRET_KEY, {expiresIn:'1h'})

          res.json({token, userId: user._id})
        
      } catch (error) {
        res.status(400).json({message: "invalid username or password"}, error)
      }
}

const getAllUsers = async (req, res) => {
    try {
       
        await connectClient();
        const db = client.db('githubclone');
        const userCollection = db.collection('users')

        const users = await userCollection.find({}).toArray();
        res.json(users);
    
   } catch (error) {
        console.error('Error during fetching : ', error.message)
        res.status(500).json({message: 'server error'})
   }
}


const getUserProlfile = async (req, res) => {
     
    const currentID = req.params.id;
    try {
         
        await connectClient();
        const db = client.db('githubclone');
        const userCollection = db.collection('users')

        const user = await userCollection.findOne({
            _id: new ObjectId(currentID)
        })

        

        if (!user) {
            return res.status(400).json({message: "User not found :("})
        }

        res.json(user, {message: "profile fetached!"});
        
         
        
    } catch (error) {
        console.error('Error during fetching : ', error.message)
        res.status(500).json({ message: 'server error' })
    }
}

const updateUserProfile = async (req, res) => {
    const currentID = req.params.id;
    const { email, password } = req.body;

    try {
        await connectClient();
        const db = client.db('githubclone');
        const userCollection = db.collection('users')

        let updatedFields = { email }
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updatedFields.password = hashedPassword;
        }

        const result = await userCollection.findOneAndUpdate({
            _id: new ObjectId(currentID)

        }, {$set: updatedFields}, {ReturnDocument: 'after'})

        if (!result.value) {
            return res.status(404).json({message: 'User not found'})
        }
        
        res.send(result.value);
    } catch (error) {
        console.error('updating details error', error.message)
    }
}

const deleteUserProfile = async (req, res) => {
    const currentID = req.params.id;

    try {
        await connectClient();
        const db = client.db('githubclone');
        const userCollection = db.collection('users');

        const result = await userCollection.deleteOne({
            _id: new ObjectId(currentID)
        })


        if (result.deleteCount == 0) {
            return res.status(404).res.json({ message: 'User not found' })
        }

        res.json({ message: 'User Profile deleted' })



    } catch (error) {

    }

}

 export default {
    getAllUsers,
    signup,
    login,
    getUserProlfile,
    updateUserProfile,
    deleteUserProfile
};