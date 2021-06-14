import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';


export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user', 
      // Escopo, define quais informações dele ser utilizado para api
      // Neste caso importa informações do usuário como nome, senha, avatar
    }),
  ],
  
});