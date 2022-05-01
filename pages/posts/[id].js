import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);

  return {
    props: {
      postData: postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      {console.log(postData)}
      {postData.title} <br />
      {postData.id} <br />
      {postData.date}
    </Layout>
  );
}
