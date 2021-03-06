import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    /*     Providers.Facebook({
          clientId: process.env.FACEBOOK_ID,
          clientSecret: process.env.FACEBOOK_SECRET,
        }), */

    /*     Providers.Email({
          server: {
            host: "",
            port: "",
            auth: {
              user: "",
              pass: ""
            }
          },
          from: "",
        }) */
  ],
  database: process.env.DB_URL,
  session: {
    jwt: true
  },
  jwt: {
    secret: 'ñklajsdfñajsañsdkfj'
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session(session, token) {
      session.user.id = token.id
      return session
    },
  },
}

export default (req, res) => NextAuth(req, res, options);