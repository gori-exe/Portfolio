import * as prismic from '@prismicio/client';

export const repositoryName = 'emanportfolio  '; // 🔁 Replace this

export const client = prismic.createClient(`https://emanportfolio.cdn.prismic.io/api/v2`, {
  // Optional fetch options, authentication, etc.
});
