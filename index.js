const { ApolloServer, gql  } = require('apollo-server');

// 訳注：スキーマとは、データに対して実行されるクエリの「形」を定義する型定義（つまり「typeDefs」）の集合体です。
const typeDefs = gql`
  # この "Book "タイプは、データソース内のすべての書籍のクエリ可能なフィールドを定義します。
  type Book {
    title: String
    author: String
  }

  # Query" 型は特別なもので、クライアントが実行可能なすべてのクエリと、それぞれの戻り値の型をリストアップしています。
  # この場合、"books" クエリは 0 以上の Books (上記で定義) の配列を返します。
  type Query {
    books: [Book]
  }
`;
