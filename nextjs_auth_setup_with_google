// in app /api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { connectToDB } from '@/utils/database' // connection of my db
import User from '@/models/user'  // this is my user model

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email })
      session.user.id = sessionUser._id
      return session
    },
    async signIn({ profile }) {
      try {
        // console.log(profile)
        await connectToDB()
        // check if user already exists
        const userExist = await User.findOne({
          email: profile.email,
        })
        // if not, create a new document and save user in MongoDB
        if (!userExist) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(' ', '').toLowerCase(),
            image: profile.picture,
          })
        }

        return true
      } catch (error) {
        console.log(error)

        return false
      }
    },
  },
})

export { handler as GET, handler as POST }



// in the navigation bar where i want to call the provider in order to sign up or sign in with google aouth

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'  
const { data: session } = useSession()
  const [providers, setProviders] = useState(null)
  const { isOpen, toggle, close, ref } = useDropdown()

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await getProviders() // Get the authentication providers
        setProviders(response) // Update state with the fetched
      } catch (error) {
        console.error('Error fetching providers:', error)
      }
    }

    fetchProviders() // Call the function to fetch providers
  }, []) // Emp


    where we want to sign in we should invoke this function         signIn(provider.id)
    // signIn(provider.id)
    // signOut()
   // session?.user?.image

the session object basically hold use the info about our user we retrieve it from the database
