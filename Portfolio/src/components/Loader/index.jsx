import { CircleLoader } from 'react-spinners';
import './index.scss';

const Loader = ({ loading }) => {
  return (
    loading && (
      <div className={`loader ${loading ? 'fade-out' : ''}`}>
        <CircleLoader color="#ffd700" size={90} />
      </div>
    )
  )
}

export default Loader;