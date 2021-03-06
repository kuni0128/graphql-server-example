const { ApolloServer, gql  } = require('apollo-server');

// 訳注：スキーマとは、データに対して実行されるクエリの「形」を定義する型定義（つまり「typeDefs」）の集合体です。
const typeDefs = gql`
  # この "Book "タイプは、データソース内のすべての書籍のクエリ可能なフィールドを定義します。
  type Book {
    title: String
    author: String
  }

  # "Query" 型は特別なもので、クライアントが実行可能なすべてのクエリと、それぞれの戻り値の型をリストアップしています。
  # この場合、"books" クエリは 0 以上の Book (上記で定義) の配列を返します。
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: '鬼滅の刃23巻',
    author: '吾峠呼世晴',
  },
  {
    title: '鬼滅の刃22巻',
    author: '吾峠呼世晴',
  },
  {
    title: '寄生獣10巻',
    author: '岩明均',
  },
];

// リゾルバーとは、クエリとデータソースを紐付けるもの。
const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
