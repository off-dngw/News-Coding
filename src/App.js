
import axios from 'axios';
import { useCallback, useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

const App = () => {

  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category),[]);

  const [data, setData] = useState(null);
  const onClick = async () => {
    try{
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=1e0908864cf9458ea0b78ac180d09958'
      )
      setData(response.data)
    }catch (e){
      console.log(e);
    }
  }
  return(
    <>
   <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  ) 
  
}


export default App;