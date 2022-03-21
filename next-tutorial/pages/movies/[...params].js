import { useRouter } from 'next/router';
import HeadTitle from '../../components/HeadTitle';

const Detail = ({params}) => {
  const router = useRouter();
  const {poster_path , overview} = router.query
  // const poster_path = router.query.poster_path;
  // const overview = router.query.overview;
  const [title, id] = params || [];
  console.log('router : ' , router);
  console.log('post_path : ',  router.query.poster_path);
  console.log('here is', params);
  return (
    <div>
      <HeadTitle title={title} />
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='poster'/>
      <h4>{title}</h4>
      <div>
        {overview}
      </div>
    </div>
  );
}

export default Detail;

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}